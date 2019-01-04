import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';

class Navbar extends Component {

    render() {
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
                        </div>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}

export default Navbar