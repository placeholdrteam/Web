import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Profile from './components/user/Profile';
import Landing from './components/landing/LandingPage';
import Profile_Init from './components/landing/Paginator';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'         component={Landing} />
            <Route exact path='/profile/' component={Profile} />
            <Route exact path='/profile/p_init' component={Profile_Init} />
            <Route exact path='/auth/signin'    component={SignIn} />
            <Route exact path='/auth/signup'    component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
