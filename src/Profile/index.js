import React, {Component} from 'react';
import './style.css';

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
    }
  }

    getProfile = async () => {
    try {
      const fullnameResponse = await fetch('http://localhost:9000/auth/profile', {
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify('this.state'),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const parsedResponse = await fullnameResponse.json();
      console.log(parsedResponse, 'the is the fullnameResponse  ')
      // console.log('heheheheyyyy just testing in getProfile function')
      // console.log(parsedResponse.username.fullname, ' <---- This is the username return')

      return parsedResponse;

    } catch (err) {
      console.log(err, 'error in getName');
    }

  }


  componentDidMount(){

    this.getProfile().then((data) => {
      console.log(data.username.username, ' <---- This is the username return');
      this.setState({
        dataUsername: data.username.username
      })
    }).catch((err) => {
      console.log(err);
    })

  }

  render(){
      return(
        <div id="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Welcome Back {this.state.dataUsername}</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
            </div>
          </div>

          <a href="/"><button>Logout</button></a>
        </div>
      )
  }
}

export default Profile;
