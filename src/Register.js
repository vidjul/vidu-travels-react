import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './actions/authentication';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit(event) {
        event.preventDefault();
        const registerObj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.registerUser(registerObj, this.props.history);
    }

    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Create an account</h1>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input name="name" value={this.state.name} onChange={this.onChange} type="text" className="input" placeholder="Enter your name here" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">E-mail</label>
                                <div className="control">
                                    <input name="email" value={this.state.email} onChange={this.onChange} type="text" className="input" placeholder="Enter your email here" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input name="password" value={this.state.password} onChange={this.onChange} type="password" className="input" placeholder="Enter your password here" />
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
        );
    };
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register))