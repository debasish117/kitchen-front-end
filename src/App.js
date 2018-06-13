import React, { Component } from 'react';
import Login from "./containers/Login";
import Items from '../src/components/Items/Items';
import Create from '../src/components/Items/Create';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route exact path="/items" component={Items} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
