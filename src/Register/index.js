import React, {Component} from 'react';
import './style.css';
import Home from '../Home';

class Register extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      username: '',
      password: '',
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(this.state, 'this state in handleSubmit');

    const registerResponse = await fetch('http://localhost:9000/auth/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await registerResponse.json();

    if(parsedResponse.data === 'registration successful'){
      this.props.history.push('/home');
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  gtName = () =>{

  }

  render(){
    return(
      <div id="backGround-reg">
        <div id='register'>
          <form id='form' onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} name='name' className='input' placeholder='Name' /><br/>
            <input type='text' onChange={this.handleChange} name='username' className='input' placeholder='username' /><br/>
            <input type='password' onChange={this.handleChange} name='password' className='input' placeholder='password'/><br/>
            <button value='register' className='regBtn'>Register</button>
          </form>
        </div>
        <Home name={this.state.getUsername} />
      </div>
    )
  }
}

export default Register;
