import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login';
import Register from './Register';

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

        const authTrueButtons = (
            <div className="navbar-item">
                <div className="buttons">
                    <Link to="/logout" className="button is-light">
                        Log out
                            </Link>
                </div>
            </div>
        )

        return (
            <Router>
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
                        </div>
                        <div className="navbar-end">
                            {this.props.auth.isAuthenticated ? authTrueButtons : nonAuthButtons}
                        </div>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Register} />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Navbar);