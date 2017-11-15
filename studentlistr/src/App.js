import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassContainer from './ClassContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lister App</h1>
        </header>
        <p className="App-intro">
        </p>
        <ClassContainer />
      </div>
    );
  }
}

export default App;
