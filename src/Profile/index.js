import React, {Component} from 'react';
import './style.css';

const Profile = (props) => {
  console.log(props.username, 'the props')
    return(
      <div id="HomeContainer">
        <h1>Welcome ______________   to your profile!</h1>
        <button>Logout</button>
      </div>
    )
}

export default Profile;
