import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
