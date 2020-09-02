import React, { Component } from 'react';
import Axios from 'axios';

import {
  useHistory
} from "react-router-dom";

class SignUp extends Component {

  state = {
    user: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      password2: '',
      age: 0
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = { ...this.state.user };
    tempUser[name] = value; //tempuser.firstname = "john"
    this.setState(
      {
        user: tempUser
      }
    );
  }

  submitSignup = (e) => {
    e.preventDefault()
    // let history = useHistory()
    Axios.post('http:////localhost:2500/athletepromote/api/register', this.state.user)
      .then(response => {
        // navigate to thank you page
        console.log("Success in creating user! ", response)
        this.props.history.push('/');
      })
      .catch(error => {
        // display error message on the screen
        console.log("Failed to register user :: ", error)
      }
      )

  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-6">
          <div className="box">
            <h1 className="text-center"></h1>
            <h3 className="text-muted"><span className="text-danger"></span></h3>

            <form action="register" modelAttribute="users" method="post">
              <h3 className="text-danger"></h3>
              <div className="form-group">
                <label for="fname">First Name</label>
                <input onChange={this.handleChange} value={this.state.fname} name="fname" id="fname" type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label for="lname">Last Name</label>
                <input  onChange={this.handleChange} value={this.state.lname} name="lname" className="form-control" placeholder="Last Name" />
            
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input onChange={this.handleChange} value={this.state.email}  name="email" id="email" type="email" className="form-control" placeholder="Email" />
               
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input onChange={this.handleChange} value={this.state.password} name="password" type="password" id="password" className="form-control" placeholder="password" />
                
              </div>
              <div className="form-group">
                <label for="password2">Re-Enter Password</label>
                <input  onChange={this.handleChange} value={this.state.password2} name="password2" id="password2" type="password" className="form-control" placeholder="Re-enter password" />
              </div>
              <div className="form-group">
                <label for="age">Age</label>
                <input  onChange={this.handleChange} value={this.state.age} name="age" id="age" type="number" className="form-control" />
              </div>
              <div className="text-left">
                <button type="submit" onClick={(e) =>  this.submitSignup(e)} className="btn btn-primary" id="submit-register"><i className="fa fa-user-md"></i> Register</button>
              </div>

            </form>

          </div>



        </div>



      </div>
    );
  }
}

export default SignUp;