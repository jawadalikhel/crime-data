import React, {Component} from 'react';
import './style.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class LandingComp extends Component{
  render(){
    return(
      <div id="LandingComp">
        <button className="btn">Login</button><br/>
        <button className="btn btn2">Register</button>
      </div>
    )
  }
}

export default LandingComp;
