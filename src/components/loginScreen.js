import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as user from "../services/userApi";

class LoginScreen extends Component {
	state = {
		userName: "",
		password: "",
	};

	handleSubmit = async e => {
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
			<div className="loginScreen">
				<div className="loginSub">
					<h3 className="mb-4">Login</h3>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="userName"></label>
							<input
								className="form-control"
								type="text"
								onChange={e => this.setState({ userName: e.target.value })}
								id="userName"
							/>
						</div>
						<div>
							<label htmlFor="password"></label>
							<input
								className="form-control"
								type="password"
								onChange={e => this.setState({ password: e.target.value })}
								id="password"
							/>
						</div>
						<button className="btn btn-primary mt-4" type="submit">
							Login
						</button>
					</form>
					<div className="mt-4">
						New to MoneyManager? <Link to="/register">Register</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginScreen;
