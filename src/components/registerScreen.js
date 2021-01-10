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

	handleSubmit = async e => {
		e.preventDefault();
		const { userName, password, emailId, confirmpassword } = this.state;
		if (password !== confirmpassword) return alert("Passwords don't match. Please check");

		if (!(await user.registerUser(userName, emailId, password))) return alert("There is an error in registering the user.");

		window.location.reload();
	};

	render() {
		return (
			<div className="loginScreen">
				<div className="loginSub">
					<h3 className="mb-4">Register</h3>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="userName">Full Name</label>
							<input
								className="form-control"
								type="text"
								id="userName"
								onChange={e => this.setState({ userName: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								className="form-control"
								type="email"
								id="email"
								onChange={e => this.setState({ emailId: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								className="form-control"
								type="password"
								id="password"
								onChange={e => this.setState({ password: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="confirmPassword">Confirm Password</label>
							<input
								className="form-control"
								type="password"
								id="confirmPassword"
								onChange={e => this.setState({ confirmpassword: e.target.value })}
							/>
						</div>
						<button className="btn btn-primary mt-6" type="submit">
							Register
						</button>
					</form>
					<div className="mt-4">
						Already have an account? <Link to="/login">Login</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterScreen;
