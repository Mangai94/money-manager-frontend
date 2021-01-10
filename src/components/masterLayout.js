import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as user from "../services/userApi";

export default function useMasterLayout(InputComponent, currentUser) {
	return class extends Component {
		state = {};

		handleLogOut = () => {
			user.logOut();
			window.location.reload();
		};

		render() {
			return (
				<div className="container-fluid">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<NavLink className="navbar-brand" to="/">
							Money Manager
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav mr-auto"></ul>
							<div className="form-inline my-2 my-lg-0">
								<span className="mr-4">Welcome {currentUser.userName}</span>
								<a className="" href="#" onClick={this.handleLogOut}>
									Logout
								</a>
							</div>
						</div>
					</nav>
					<InputComponent />
				</div>
			);
		}
	};
}
