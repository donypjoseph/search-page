import React, { Component } from 'react';
import axios from 'axios';

export default class Airport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airports: ""
        }
    }
    componentWillMount() {
        axios.get('https://airport-qa.api.aero/airport/v2/airports', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'x-apikey': '3035d833bb6e531654a3cce03e6b1fde',
            }})
            .then(response => {
                // handle success
                console.log(response.data.airports);
                this.setState({airports: response.data.airports});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
render() {
    const airports = this.state.airports;
    return (
        <div>
            <ul>{airports && airports.map(airport => <li> {airport.name} </li>)}</ul>
        </div >
    )
}
}


// curl -X GET 'https://airport-qa.api.aero/airport/v2/airports' -H 'x-apikey: 3035d833bb6e531654a3cce03e6b1fde'