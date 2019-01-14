import React, {Component} from 'react';
import './style.css';

const Home = (props) => {
  console.log(props.name, 'the props')
    return(
      <div id="HomeContainer">
        <h1>Welcome...{props.name}</h1>
      </div>
    )
}

export default Home;
