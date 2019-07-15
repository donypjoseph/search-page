import React, { Component } from 'react';
import { IoMdPerson, IoIosArrowDown, IoIosArrowUp, IoIosWifi, IoMdBeer, IoIosBriefcase, IoIosTabletPortrait, IoIosPeople } from 'react-icons/io';
import { MdAirlineSeatLegroomExtra, MdVideoLibrary, MdDirectionsRun } from 'react-icons/md';
import { GiSteampunkGoggles } from 'react-icons/gi';
import profile1 from './profile1.png'; 
import profile2 from './profile2.png'; 
import profile3 from './profile3.png'; 
import profile4 from './profile4.png'; 
import profile5 from './profile5.png';
import sunexpress from './sun.png';


class Person extends Component {
    constructor(props) {
        super(props);
        this.getIcons = this.getIcons.bind(this);
        this.getPersonIcons = this.getPersonIcons.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.state = {
            isOpen: false,
            total: 0
        }
    }
    getIcons(name) {
        switch (name) {
            case "WIFI":
              return(<span className="icon"><IoIosWifi /></span>)
            case "CHAMPAGNE":
              return(<span className="icon"><IoMdBeer /></span>)
            case "NETFLIX":
              return(<span className="icon"><MdVideoLibrary /></span>)
            case "Extra Legroom":
              return(<span className="icon"><MdAirlineSeatLegroomExtra /></span>)
            case "20KG Extra Luggage":
              return(<span className="icon"><IoIosBriefcase /></span>)
            case "IPAD":
              return(<span className="icon"><IoIosTabletPortrait /></span>)
            case "VRGOGGLE":
              return(<span className="icon"><GiSteampunkGoggles /></span>)
            case "FASTTRACK":
              return(<span className="icon"><MdDirectionsRun /></span>)
              default:
              break;
          }
    }

    getPersonIcons(name) {
        switch (name) {
            case "Sreekanth Rajan":
              return(<span className="icon-big"><img src={profile1} alt="" /></span>)
            case "Mohsin Basheer":
              return(<span className="icon-big"><img src={profile2} alt="" /></span>)
            case "Lana Mizzell":
              return(<span className="icon-big"><img src={profile3} alt="" /></span>)
            case "Melinda Egerton":
              return(<span className="icon-big"><img src={profile4} alt="" /></span>)
            case "Melany Gossman":
              return(<span className="icon-big"><img src={profile5} alt="" /></span>)
              default:
              break;
          }
    }

    checkboxChange (e, amount, index) {
        console.log(amount);
        if(e.target.checked) {
            this.setState({ total: +parseFloat(this.state.total).toFixed(2) + +parseFloat(amount).toFixed(2)});
        } else {
            this.setState({ total: +parseFloat(this.state.total).toFixed(2) - +parseFloat(amount).toFixed(2)});
        }
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen});


  render() {
    const { offer, index } = this.props;
   
    return (
        
        <div className="card">
        <div className="card-body">
        <div className="row">
            <div className="col-2">
                <span >{this.getPersonIcons(offer.passengerName)}
                    <div className="gray-color">{offer.passengerName}</div>
                </span>
            </div>
            <div className="col-2">
                <div>{offer.flights[0].depTime} - {offer.flights[0].arrTime}</div>
                <span ><img className="sun" src={sunexpress} alt="" /></span>
            </div>
            <div className="col-3">
                <div>{offer.flights[0].jourenyTime}m</div>
                <div className="gray-color">{offer.flights[0].bdAirportCode}-{offer.flights[0].offAirportCode}</div>
            </div>
            <div className="col-3">
                Nonstop
            </div>
            <div className="col-1">
                <span className="green">${(parseFloat(offer.price) + parseFloat(this.state.total)).toFixed(2)} </span>
            </div>
            <div className="col-1">
                <a onClick={this.toggleOpen}><IoIosArrowDown /></a>
            </div>
        </div>
        <div className={`${this.state.isOpen ? "show border-top margin-top-10" : "hide"}`}>
            <div className="airports">Antalya, Turkey - Frankfurt, Germany </div>
            <div className="row margin-100 margin-top-10">
                {offer.ancillaryServices.map((ancillary, i) => (
                    <div class="form-check col-6">
                        <input class="form-check-input icon margin-top-10" type="checkbox" onClick={(e) => this.checkboxChange(e, parseFloat(ancillary.amount).toFixed(2), index)} value="" id={`defaultCheck${i}`} />
                        <label class="form-check-label gray-color" for="defaultCheck1" >
                            {this.getIcons(ancillary.ancillaryName)} {ancillary.description} - <span className="text-primary">${ancillary.amount}</span>
                        </label>
                    </div>
                ))}
                </div>
              <div class="align-right">
      <button type="button" onClick={this.search} className="btn btn-primary"><span className="search-button">Book Now</span></button>

    </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Person;
