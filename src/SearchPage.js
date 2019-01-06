import React, { Component } from 'react';
import ItineraryBox from './ItineraryBox';
import { Redirect } from 'react-router';

class SearchPage extends Component {
    render() {
        if (!this.props.location.state) {
            return (
                <Redirect to='/' />
            )
        }
        // const data = {
        //     "Depart": {
        //         "Direct": false,
        //         "Path": [
        //             {
        //                 "Origin": {
        //                     "Id": 10413,
        //                     "ParentId": 6073,
        //                     "Code": "CDG",
        //                     "Type": "Airport",
        //                     "Name": "Paris Charles de Gaulle"
        //                 },
        //                 "Destination": {
        //                     "Id": 13554,
        //                     "ParentId": 4698,
        //                     "Code": "LHR",
        //                     "Type": "Airport",
        //                     "Name": "London Heathrow"
        //                 },
        //                 "Departure": "2019-01-06T10:25:00",
        //                 "Arrival": "2019-01-06T10:50:00",
        //                 "Duration": 85,
        //                 "Carrier": {
        //                     "Id": 881,
        //                     "Code": "BA",
        //                     "Name": "British Airways",
        //                     "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
        //                     "DisplayCode": "BA"
        //                 }
        //             },
        //             {
        //                 "Origin": {
        //                     "Id": 13554,
        //                     "ParentId": 4698,
        //                     "Code": "LHR",
        //                     "Type": "Airport",
        //                     "Name": "London Heathrow"
        //                 },
        //                 "Destination": {
        //                     "Id": 12712,
        //                     "ParentId": 5772,
        //                     "Code": "JFK",
        //                     "Type": "Airport",
        //                     "Name": "New York John F. Kennedy"
        //                 },
        //                 "Departure": "2019-01-06T12:55:00",
        //                 "Arrival": "2019-01-06T16:10:00",
        //                 "Duration": 495,
        //                 "Carrier": {
        //                     "Id": 881,
        //                     "Code": "BA",
        //                     "Name": "British Airways",
        //                     "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
        //                     "DisplayCode": "BA"
        //                 }
        //             }
        //         ],
        //         "TotalDuration": 705
        //     },
        //     "Return": {
        //         "Direct": false,
        //         "Path": [
        //             {
        //                 "Origin": {
        //                     "Id": 12712,
        //                     "ParentId": 5772,
        //                     "Code": "JFK",
        //                     "Type": "Airport",
        //                     "Name": "New York John F. Kennedy"
        //                 },
        //                 "Destination": {
        //                     "Id": 13554,
        //                     "ParentId": 4698,
        //                     "Code": "LHR",
        //                     "Type": "Airport",
        //                     "Name": "London Heathrow"
        //                 },
        //                 "Departure": "2019-01-11T22:29:00",
        //                 "Arrival": "2019-01-12T10:30:00",
        //                 "Duration": 421,
        //                 "Carrier": {
        //                     "Id": 881,
        //                     "Code": "BA",
        //                     "Name": "British Airways",
        //                     "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
        //                     "DisplayCode": "BA"
        //                 }
        //             },
        //             {
        //                 "Origin": {
        //                     "Id": 13554,
        //                     "ParentId": 4698,
        //                     "Code": "LHR",
        //                     "Type": "Airport",
        //                     "Name": "London Heathrow"
        //                 },
        //                 "Destination": {
        //                     "Id": 10413,
        //                     "ParentId": 6073,
        //                     "Code": "CDG",
        //                     "Type": "Airport",
        //                     "Name": "Paris Charles de Gaulle"
        //                 },
        //                 "Departure": "2019-01-12T13:05:00",
        //                 "Arrival": "2019-01-12T15:20:00",
        //                 "Duration": 75,
        //                 "Carrier": {
        //                     "Id": 881,
        //                     "Code": "BA",
        //                     "Name": "British Airways",
        //                     "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
        //                     "DisplayCode": "BA"
        //                 }
        //             }
        //         ],
        //         "TotalDuration": 651
        //     },
        //     "Price": 2801.33
        // };
        // const dataList = [data, data];
        if (this.props.location.state.itineraries.length === 0) {
            return (
                <article className="message is-danger">
                    <div className="message-header">
                        <p>Error</p>
                    </div>
                    <div className="message-body">
                        No flights were found for your search. Please try again later.
                    </div>
                </article>
            )
        }
        const boxes = this.props.location.state.itineraries.map((data, index) => <ItineraryBox Itinerary={data} key={index} />)
        return (
            <section className="section">
                <div className="container">
                    {boxes}
                </div>
            </section>
        );
    }
};

export default SearchPage;