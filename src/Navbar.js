import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from './actions/authentication';

class Navbar extends Component {
    render() {

        const nonAuthButtons = (
            <div className="navbar-item">
                <div className="buttons">
                    <Link to="/signup" className="button is-primary">
                        <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                        Log in
                            </Link>
                </div>
            </div>
        );

        const authItems = (
            <div className="navbar-item">
                <Link to='/dashboard'>Dashboard</Link>
            </div>
        )

        const authAdminItems = (
            <div className="navbar-item">
                <Link to='/admin/dashboard'>Admin Dashboard</Link>
            </div>
        )

        const authTrueButtons = (
            <div className="navbar-item">
                <div className="buttons">
                    <button onClick={() => this.props.logoutUser(this.props.history)} className="button is-light">Log out</button>
                </div>
            </div>
        )

        return (
                <div>
                    <nav className="navbar has-shadow">
                        <div className="navbar-brand">
                            <div className="navbar-item">
                                ViduTravels
                    </div>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-item">
                                <Link to="/">Home</Link>
                            </div>
                            {this.props.auth.isAuthenticated && this.props.auth.user.isAdmin === 'false' ? authItems : null}
                            {this.props.auth.isAuthenticated && this.props.auth.user.isAdmin === 'true' ? authAdminItems : null}
                        </div>
                        <div className="navbar-end">
                            {this.props.auth.isAuthenticated ? authTrueButtons : nonAuthButtons}
                        </div>
                    </nav>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));