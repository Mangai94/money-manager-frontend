import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default function useMasterLayout(InputComponent) {
  return class extends Component {
    state = {};

    render() {
      return (
        <div>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dummy">
                    Dummy
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <InputComponent />
          <div>Footer</div>
        </div>
      );
    }
  };
}
