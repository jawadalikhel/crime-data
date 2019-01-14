import React, {Component} from 'react';
import './style.css';

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
      header: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await registerResponse.json();
    if(parsedResponse.data = 'registration successful'){
      this.props.history.push('/');
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
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
      </div>
    )
  }
}

export default Register;
