import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions/authentication';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { credentials: { email: '', password: '' } }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        let credentials = { ...this.state.credentials };
        credentials[event.target.name] = event.target.value;
        this.setState({ credentials })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.loginUser(this.state.credentials);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Please login using the form below.</h1>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label">E-mail</label>
                                <div className="control">
                                    <input name="email" value={this.state.credentials.email} onChange={this.onChange} type="text" className="input" placeholder="Enter your email here" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input name="password" value={this.state.credentials.password} onChange={this.onChange} type="password" className="input" placeholder="Enter your password here" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-link" onClick={this.onSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login)