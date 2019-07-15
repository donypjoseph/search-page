import React, { Component } from 'react';
import Person from './Person'
import request from "axios";
import _ from "lodash";


const result = {
    "metaDataId": "Meta09d4abbb-5e2a-4adc-b4d1-5d5f9a842260",
    "offers": [
        {
            "offerId": "d6d32ee0-0a8f-4f4e-b7c4-697865091df7",
            "price": 126.29,
            "currency": "USD",
            "flights": [
                {
                    "carrierCode": "Sun Express",
                    "flightNumber": "144",
                    "bdAirportCode": "AYT",
                    "offAirportCode": "FRA",
                    "depDate": "2019-04-10",
                    "arrDate": "2019-04-10",
                    "depTime": "07:50",
                    "arrTime": "10:35",
                    "jourenyTime": "3:45"
                }
            ],
            "passengerName": "Mason Vail",
            "ancillaryServices": [
                {
                    "ancillaryName": "WIFI",
                    "description": "Wifi Access",
                    "amount": 10.05,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "CHAMPAGNE",
                    "description": "Champagne",
                    "amount": 18.34,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "NETFLIX",
                    "description": "Netflix Access",
                    "amount": 15.56,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "Extra Legroom",
                    "description": "Extra Legroom",
                    "amount": 25.35,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "20KG Extra Luggage",
                    "description": "20KG Extra Luggage",
                    "amount": 33.5,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "IPAD",
                    "description": "IPad in Flight",
                    "amount": 28.45,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "VRGOGGLE",
                    "description": "VR Goggle in Flight",
                    "amount": 26.29,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "FASTTRACK",
                    "description": "Fast track boarding",
                    "amount": 40.60,
                    "currency": "TRY"
                }
            ]
        },
        {
            "offerId": "be871e20-434e-453a-a376-6b03a1f1db91",
            "price": 354.67,
            "currency": "USD",
            "flights": [
                {
                    "carrierCode": "Sun Express",
                    "flightNumber": "144",
                    "bdAirportCode": "AYT",
                    "offAirportCode": "FRA",
                    "depDate": "2019-04-10",
                    "arrDate": "2019-04-10",
                    "depTime": "07:50",
                    "arrTime": "10:35",
                    "jourenyTime": "3:45"
                }
            ],
            "passengerName": "Sang Hendriks",
            "ancillaryServices": [
                {
                    "ancillaryName": "WIFI",
                    "description": "Wifi Access",
                    "amount": 20.25,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "CHAMPAGNE",
                    "description": "Champagne",
                    "amount": 36.68,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "NETFLIX",
                    "description": "Netflix Access",
                    "amount": 30.56,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "Extra Legroom",
                    "description": "Extra Legroom",
                    "amount": 50.40,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "20KG Extra Luggage",
                    "description": "20KG Extra Luggage",
                    "amount": 67.60,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "IPAD",
                    "description": "IPad in Flight",
                    "amount": 56.80,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "VRGOGGLE",
                    "description": "VR Goggle in Flight",
                    "amount": 52.58,
                    "currency": "TRY"
                },
                {
                    "ancillaryName": "FASTTRACK",
                    "description": "Fast track boarding",
                    "amount": 80.20,
                    "currency": "TRY"
                }
            ]
        }
    ]
};
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.filterData = this.filterData.bind(this);
        this.state = {
            offers: null,
            passenger: null,
            isOpen: false,
            showResult: false,
            showLoading: false,
            origin:"",
            destination: "",
            date:"10-Apr-2019"
        }
    }

    handleOrigin = (e) => this.setState({ origin: e.target.value });
    handleDestination = (e) => this.setState({ destination: e.target.value });
    handleDate = (e) => this.setState({ date: e.target.value });


    search() {
        this.setState({ 
                showResult: true,
                showLoading: true
            });
        const endPoint = `http://54.188.20.64:8080/getOffers?origin=${this.state.origin.toUpperCase()}&destination=${this.state.destination.toUpperCase()}&date=${this.state.date}&name=Gokul`;
        // request({
        //     method: "get",
        //     url: endPoint,
        //     "Content-Type": "application/json",
        //     "Cache-Control": "no-cache",
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //     }

        // }).then((response) => {
        //     console.log("response", response)
        //     this.setState({
        //         offers: response.data,
        //         passenger: response.data,
        //         showLoading: false
        //     })
        // }).catch((error) => {
        //     console.log("response", error)
        //     this.setState({
        //         showLoading: false
        //     })
        // })

        this.setState({
            offers: result,
            passenger: result,
            showLoading: false
        })
    }

    filterData(passengerName) {
        console.log("passengerName", passengerName);
        if(passengerName === "All") {
            this.setState({offers: this.state.passenger});
        } else {
            const filtered = _.filter(this.state.offers.offers, offer => offer.passengerName === passengerName);
            this.setState({offers: {offers : filtered}});
        }
    }

    render() {
        const offers = this.state.offers;
        const passenger = this.state.passenger;
        return(
            <div className="container search margin-20">
                <form>
                    <div className="card">
                        <div className="card-body form-row">
                            <div className="col-sm">
                                <input type="text" onChange={this.handleOrigin} value={this.state.origin} className="form-control" placeholder="From" />
                            </div>
                            <div className="col-sm">
                                <input type="text" onChange={this.handleDestination} value={this.state.destination} className="form-control" placeholder="To" />
                            </div>
                            <div className="col-">
                                <input type="text" onChange={this.handleDate} value={this.state.date} className="form-control" placeholder="Date" />
                            </div>
                            <div className="col-">
                                <button type="button" onClick={this.search} className="btn btn-primary "><span className="search-button">Dynamite!</span></button>
                            </div>
                        </div>
                    </div>
                </form>
                <form>
                {this.state.showLoading &&
                    <div className="container align-center logo">
                        <div className="spinner-border spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <div className={`search ${this.state.showResult ? "show" : "hide"}`}>
                    {passenger && passenger.offers &&
                    <div className="card">
                        <div className="card-body align-right">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle search-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Name
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" onClick={() => this.filterData("All")}>All</a>
                                {passenger && passenger.offers.map((passenger, index) => (
                                    <a class="dropdown-item" onClick={() => this.filterData(passenger.passengerName)}>{passenger.passengerName}</a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    {offers && offers.offers.map((offer, index) => (
                        <Person offer={offer} index={index} />
                    ))}
                    </div>
                </form>
            </div>
        )
    }
}