import React, { Component } from 'react';


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar is-fixed-top">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        ViduTravels
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-item">
                        Home
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            <button className="button is-light">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar