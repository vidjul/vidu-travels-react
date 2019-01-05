import React, { Component } from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import axios from 'axios';

class SearchSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: {
                "country": "UK",
                "currency": "GBP",
                "locale": "en-GB",
                "originPlace": "CDG-sky",
                "destinationPlace": "JFK-sky",
                "outboundDate": moment().format('YYYY-MM-DD'),
                "inboundDate": moment().add(7, 'days').format('YYYY-MM-DD'),
                "cabinClass": "economy",
                "adults": "1",
                "children": "0",
                "infants": "0",
                "groupPricing": true,
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        let searchQuery = {
            ...this.state.searchQuery,
        };
        searchQuery[event.target.name] = event.target.value;
        this.setState({ searchQuery });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/createSession', this.state.searchQuery)
            .then(res => axios.get(`/api/searchFlight?sessionKey=${res.data}`))
            .then(res => this.props.history.push({
                pathname: '/search',
                state: {itineraries: res.data.Itineraries}
            }))
            .catch(err => console.log(err.response));
    }

    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Search for flights</h1>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label">Outbound Date</label>
                                <div className="control">
                                    <input type="date" name="outboundDate" className="input" value={this.state.searchQuery.outboundDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Inbound Date</label>
                                <div className="control">
                                    <input type="date" name="inboundDate" className="input" value={this.state.searchQuery.inboundDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">From</label>
                                <div className="control">
                                    <input type="input" name="originPlace" className="input" value={this.state.searchQuery.originPlace} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">To</label>
                                <div className="control">
                                    <input type="input" name="destinationPlace" className="input" value={this.state.searchQuery.destinationPlace} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Travel class</label>
                                <div className="control">
                                    <input type="input" name="cabinClass" className="input" value={this.state.searchQuery.cabinClass} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Adults</label>
                                <div className="control">
                                    <input type="number" name="adults" className="input" value={this.state.searchQuery.adults} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Children (4 - 18)</label>
                                <div className="control">
                                    <input type="number" name="children" className="input" value={this.state.searchQuery.children} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Infants(0 - 3)</label>
                                <div className="control">
                                    <input type="number" name="infants" className="input" value={this.state.searchQuery.infants} onChange={this.handleChange} />
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

export default withRouter(SearchSection);