import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as user from "../services/userApi";

class LoginScreen extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    if (!(await user.loginUser(userName, password))) {
      alert("Invalid username or password");
      return;
    }
    window.location.reload();
  };

  render() {
    return (
      <React.Fragment>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName"></label>
            <input
              type="text"
              onChange={(e) => this.setState({ userName: e.target.value })}
              id="userName"
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              id="password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <div>
          New to MoneyManager? <Link to="/register">Register</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
