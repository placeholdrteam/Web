import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Profile from './components/user/Profile';
import Landing from './components/landing/LandingPage';
import Profile_Init from './components/landing/Paginator';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/profile/' component={Profile} />
            <Route path='/profile/p_init' component={Profile_Init} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
