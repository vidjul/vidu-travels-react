import React, { Component } from 'react';

class SearchSection extends Component {
    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Search for flights</h1>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label">Inbound Date</label>
                                <div className="control">
                                    <input type="date" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Outbound Date</label>
                                <div className="control">
                                    <input type="date" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">From</label>
                                <div className="control">
                                    <input type="input" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">To</label>
                                <div className="control">
                                    <input type="input" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Travel class</label>
                                <div className="control">
                                    <input type="input" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Adults</label>
                                <div className="control">
                                    <input type="number" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Teenagers</label>
                                <div className="control">
                                    <input type="number" className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Infants</label>
                                <div className="control">
                                    <input type="number" className="input" />
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

export default SearchSection;