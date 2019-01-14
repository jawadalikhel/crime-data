import React, {Component} from 'react';
import './style.css';

class Chat extends Component{
  render(){
    return(
      <div id="chatContainer">

        <div id="neighbors">
          <h1>Your neighbors</h1>
        </div>

        <div id="chat">
          <h1>Chatboard</h1>
        </div>
      </div>
    )
  }
}

export default Chat;
