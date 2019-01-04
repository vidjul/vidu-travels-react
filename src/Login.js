import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Please login using the form below.</h1>
                    <div className="columns ">
                        <div className="column is-one-quarter ">
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder="Enter your login here" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" placeholder="Enter your password here" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <button class="button is-link">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login