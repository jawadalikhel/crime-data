import React, {Component} from 'react';
import './style.css';

class LandingComp extends Component{
  render(){
    return(
      <div id="LandingComp">
        <button className="btn"><a href="/login">Login</a></button><br/>
        <button className="btn btn2"><a href="/register" >Register</a></button>
      </div>
    )
  }
}

export default LandingComp;
