import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './App.css';
import LandingComp from './LandingComp';
import Register from './Register';
import Chat from './Chat';
import Profile from './Profile';
import Login from './Login';
import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LandingComp}/>
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Logout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
