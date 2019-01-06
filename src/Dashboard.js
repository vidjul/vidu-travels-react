import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Dashboard extends Component {
    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.auth.isAuthenticated) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Welcome, </h1>
                    <p>From this page, you can send a request to get every information that we have collected on you.
                        You can also delete your account. <br />
                        If you delete your account before using your booked tickets, please note that they are still valid.</p>
                    <hr />
                    <button className="button">Get my report</button>
                    <hr />
                    <h2 className="is-size-2 has-text-danger">Danger zone, action cannot be undone.</h2>
                    <button className="button is-danger">Delete</button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(Dashboard));