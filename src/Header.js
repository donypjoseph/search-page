import React, { Component } from 'react';
import logo from './logo.png'
class Header extends Component {
  render() {
    return (
      <header className="Header">
      <div class="container">
      <div class="row">
      <div class="col-2">
      <img src={logo} alt="" width="80px" height="75px"/>
    </div>
    <div class="col-8">
      <span className="header-button font-big">DYNAMOS</span>
    </div>
    <div class="col-sm">

    </div>
    </div>
    </div>
      <div className="pull-left">

      </div>

      <div className='Header__container'><div className="align-center">
      </div></div>
        </header>
    );
  }
}

export default Header;
