import React, { Component } from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import axios from 'axios';
import classnames from 'classnames';

class SearchSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            way: "one_way",
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
            },
            errors: [],
        }
        this.handleRadio = this.handleRadio.bind(this);
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

    handleRadio(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/createSession', this.state.searchQuery)
            .then(res => axios.get(`/api/searchFlight?sessionKey=${res.data}`))
            .then(res => this.props.history.push({
                pathname: '/search',
                state: { itineraries: res.data.Itineraries }
            }))
            .catch(err => this.setState({ errors: err.response.data }));
    }

    render() {
        const { errors } = this.state;
        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Search for flights</h1>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="field">
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" name="way" value="one_way" checked={this.state.way === "one_way"} onChange={this.handleRadio} />
                                         One-Way
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="way" value="two_way" checked={this.state.way === "two_way"} onChange={this.handleRadio} />
                                         Two-way
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Outbound Date</label>
                                <div className="control">
                                    <input type="date" name="outboundDate" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'OutboundDate') })} value={this.state.searchQuery.outboundDate} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'OutboundDate') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'OutboundDate').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">Inbound Date</label>
                                <div className="control">
                                    <input type="date" name="inboundDate" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'InboundDate') })} value={this.state.searchQuery.inboundDate} onChange={this.handleChange} disabled={this.state.way === "one_way"}  />
                                </div>
                                {errors.find(err => err.ParameterName === 'InboundDate') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'InboundDate').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">From</label>
                                <div className="control">
                                    <input type="input" name="originPlace" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'OriginPlace') })} value={this.state.searchQuery.originPlace} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'OriginPlace') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'OriginPlace').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">To</label>
                                <div className="control">
                                    <input type="input" name="destinationPlace" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'DestinationPlace') })} value={this.state.searchQuery.destinationPlace} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'DestinationPlace') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'DestinationPlace').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">Travel class</label>
                                <div className="control">
                                    <input type="input" name="cabinClass" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'CabinClass') })} value={this.state.searchQuery.cabinClass} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'CabinClass') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'CabinClass').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">Adults</label>
                                <div className="control">
                                    <input type="number" name="adults" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'Adults') })} value={this.state.searchQuery.adults} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'Adults') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'Adults').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">Children (4 - 18)</label>
                                <div className="control">
                                    <input type="number" name="children" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'Children') })} value={this.state.searchQuery.children} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'Children') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'Children').Message}</p>}
                            </div>
                            <div className="field">
                                <label className="label">Infants(0 - 3)</label>
                                <div className="control">
                                    <input type="number" name="infants" className={classnames('input', { 'is-danger': errors.find(err => err.ParameterName === 'Infants') })} value={this.state.searchQuery.infants} onChange={this.handleChange} />
                                </div>
                                {errors.find(err => err.ParameterName === 'Infants') && <p className="help is-danger">{errors.find(err => err.ParameterName === 'Infants').Message}</p>}
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