import React, { Component } from 'react';
import './App.css';
import Map from './containers/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        Map
        <Map></Map>
      </div>
    );
  }
}

export default App;
