import React, { Component } from 'react';
import Header from './Header'
import profile from './profile.png'; 


class Profile extends Component {
  render() {
    return (
      <div className="wrap">
      <Header />
      <div className="container">
        <img src={profile} alt="" width="100%" height="100%"/>
        </div>
      </div>
    );
  }
}

export default Profile;
