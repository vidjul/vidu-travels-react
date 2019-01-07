import React, { Component } from 'react';
import moment from 'moment';

class ItineraryBox extends Component {
    render() {
        const departPathLength = this.props.Itinerary.Depart.Path.length;
        const departureOriginCode = this.props.Itinerary.Depart.Path[0].Origin.Code;
        const departureDestinationCode = this.props.Itinerary.Depart.Path[departPathLength - 1].Destination.Code;
        const departureDepartTime = this.props.Itinerary.Depart.Path[0].Departure;
        const departureArrivalTime = this.props.Itinerary.Depart.Path[departPathLength - 1].Arrival;
        const departCarrierImage = this.props.Itinerary.Depart.Path[0].Carrier.ImageUrl;

        const returningPathLength = this.props.Itinerary.Return.Path.length;
        const returningOriginCode = this.props.Itinerary.Return.Path[0].Origin.Code;
        const returningDestinationCode = this.props.Itinerary.Return.Path[returningPathLength - 1].Destination.Code;
        const returningDepartureTime = this.props.Itinerary.Return.Path[0].Departure;
        const returningArrivalTime = this.props.Itinerary.Return.Path[returningPathLength - 1].Arrival;
        const returnCarrierImage = this.props.Itinerary.Return.Path[returningPathLength - 1].Carrier.ImageUrl;

        const price = this.props.Itinerary.Price;

        return ( 
            <div className="box">
                <p>Departure on {moment(departureDepartTime).format('L')}</p>
                <div className="columns is-vcentered">
                    <div className="column is-one-fifth">
                        <img src={departCarrierImage} alt="Departure Carrier" />
                    </div>
                    <div className="column is-one-fifth">
                        <div className="columns is-vcentered has-text-centered">
                            <div className="column">
                                <p className="is-size-3">{moment(departureDepartTime).format('HH:mm')}</p>
                                <p className="is-size-5 has-text-centered">{departureOriginCode}</p>
                            </div>
                            <div className="column">
                                <i className="fas fa-plane-departure"></i>
                            </div>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        {departPathLength > 1 ? `${departPathLength - 1} stop(s)` : 'direct'}
                    </div>
                    <div className="column is-one-fifth">
                        <div className="columns is-vcentered is-gapless has-text-centered">
                            <div className="column">
                                <i className="fas fa-plane-arrival"></i>
                            </div>
                            <div className="column">
                                <p className="is-size-3">{moment(departureArrivalTime).format('HH:mm')}</p>
                                <p className="is-size-5">{departureDestinationCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Returning on {moment(returningDepartureTime).format('L')}</p>
                <div className="columns is-vcentered">
                    <div className="column is-one-fifth">
                        <img src={returnCarrierImage} alt="Departure Carrier" />
                    </div>
                    <div className="column is-one-fifth">
                        <div className="columns is-vcentered has-text-centered">
                            <div className="column">
                                <p className="is-size-3">{moment(returningDepartureTime).format('HH:mm')}</p>
                                <p className="is-size-5 has-text-centered">{returningOriginCode}</p>
                            </div>
                            <div className="column">
                                <i className="fas fa-plane-departure"></i>
                            </div>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        {returningPathLength > 1 ? `${returningPathLength - 1} stop(s)` : 'direct'}
                    </div>
                    <div className="column is-one-fifth">
                        <div className="columns is-vcentered is-gapless has-text-centered">
                            <div className="column">
                                <i className="fas fa-plane-arrival"></i>
                            </div>
                            <div className="column">
                                <p className="is-size-3">{moment(returningArrivalTime).format('HH:mm')}</p>
                                <p className="is-size-5">{returningDestinationCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="columns">
                    <div className="column is-2">
                        <p className="is-size-4">{price} £</p>
                    </div>
                    <div className="column is-9"></div>
                    <div className="column is-1">
                        <button className="button is-primary">Details</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItineraryBox;