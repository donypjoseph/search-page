import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Search.css';
import Search from './Search'
import Header from './Header'


class Home extends Component {
  render() {
    return (
      <div className="wrap">
      <Header />
        <Search />
      </div>
    );
  }
}

export default Home;
