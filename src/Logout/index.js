import React, {Component} from 'react';

class Logout extends Component{
  constructor(){
    super();
  }

  logoutF = async () =>{
    try {
      const logout = await fetch('http://localhost:9000/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await logout.json();

      console.log(parsedResponse, ' Dattaa');

      if(parsedResponse.data === 'logout successful'){
        this.props.history.push('/');
        alert('logout successful');
      }else {
        this.props.history.push('/');
        alert('logout unsuccessful');
      }

    } catch (err) {
      console.log(err, 'error in logoutF');
    }
  }

  conponentDidMount(){
    this.logoutF();
  }
  render(){
    return(
      null
    )
  }
}

export default Logout;
