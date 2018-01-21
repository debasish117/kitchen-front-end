import React, { Component } from 'react';
import Login from '../src/screens/login/login';
import Items from '../src/screens/items/items'
import Create from '../src/screens/items/create'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Login name='debasis'/>
        <Login name='nidhin'/>
        <Items />
        <Create />
      </div>
    );
  }
}

export default App;
