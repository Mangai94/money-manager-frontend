import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/homeScreen";
import LoginScreen from "./components/loginScreen";
import RegisterScreen from "./components/registerScreen";
import * as user from "./services/userApi";
import useMasterLayout from "./components/masterLayout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import DummyScreen from "./components/dummyScreen";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const HomeScreenWithMaster = useMasterLayout(HomeScreen);
  const DummyScreenWithMaster = useMasterLayout(DummyScreen);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const isAuthorized = await user.isAuthorized();

    setIsAuthorized(isAuthorized);
    setInitializing(false);
  };

  const protectScreen = (targetComponent) => {
    if (isAuthorized) return targetComponent;
    return <Redirect to="/login" />;
  };

  const protectLoginScreen = (targetComponent) => {
    if (isAuthorized) return <Redirect to="/" />;
    return targetComponent;
  };

  if (initializing)
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          render={() => protectLoginScreen(<LoginScreen />)}
        />
        <Route
          path="/register"
          render={(props) => protectLoginScreen(<RegisterScreen {...props} />)}
        />
        <Route
          path="/dummy"
          render={() => protectScreen(<DummyScreenWithMaster />)}
        />
        <Route
          path="/"
          render={() => protectScreen(<HomeScreenWithMaster />)}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
