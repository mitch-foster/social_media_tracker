import React, { Component } from 'react';

import logo from './logo.svg';
import Router from './components/Router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={'http://jjumpp.com/wp-content/uploads/2017/05/Color-White.png'} className="App-logo" alt="logo" />
          <h2>Twitter Stats Tracker</h2>
        </div>
        {Router}
      </div>
    );
  }
}

export default App;
