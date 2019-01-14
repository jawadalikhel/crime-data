import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './App.css';
import LandingComp from './LandingComp';
import Register from './Register';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/landing" component={LandingComp}/>
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
