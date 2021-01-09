import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as user from "../services/userApi";

class RegisterScreen extends Component {
  state = {
    userName: "",
    emailId: "",
    password: "",
    confirmpassword: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password, emailId, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert("Passwords don't match. Please check");
      return;
    }
    if (!(await user.registerUser(userName, emailId, password))) {
      alert("There is an error in registering the user.");
      return;
    }
    window.location.reload();
  };

  render() {
    return (
      <React.Fragment>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User name</label>
            <input
              type="text"
              id="userName"
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              onChange={(e) => this.setState({ emailId: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) =>
                this.setState({ confirmpassword: e.target.value })
              }
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterScreen;
