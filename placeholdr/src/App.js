import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Profile from './components/user/Profile';
import Landing from './components/landing/LandingPage'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/profile/' component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
