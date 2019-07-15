import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './Search.css';
import Home from './Home'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    );
  }
}

export default App;
