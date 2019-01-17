import React, {Component} from 'react';
import './style.css';
import Profile from '../Profile';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      // username: '',
      // password: '',
      // sendUsername: '',
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const loginResponse = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, 'this is parsed data at login');

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/profile');
        console.log(parsedResponse.usename, ' <-- the username')

      } else if (parsedResponse.data === 'login unsuccessful'){
        alert('Username of Password Wrong')
      }

    } catch(err) {
      console.log(err)
    }

  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  passUsername = () => {

  }


  render(){
    return(
      <div id="login">
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' onChange={this.handleChange} placeholder='username' />
          <input type='password' name='password' onChange={this.handleChange} placeholder='password' />
          <button>Login</button>
        </form>
      </div>
    )
  }
}
export default Login;
