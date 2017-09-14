import React, { Component } from 'react';

import logo from './logo.svg';
import Router from './components/Router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Social Media Tracker</h2>
        </div>
        {Router}
      </div>
    );
  }
}

export default App;
