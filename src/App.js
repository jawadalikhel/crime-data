import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './App.css';
import LandingComp from './LandingComp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Route path="/" component={LandingComp} />
        </Router>
      </div>
    );
  }
}

export default App;
