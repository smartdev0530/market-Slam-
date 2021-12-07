import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Prompt,
} from "react-router-dom";
import Login from "./Pages/Login";
import Category from "./Pages/Category";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";
import Create from "./Pages/Create";
import { createBrowserHistory } from "history";
import Header from "./Components/Header";
const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          exact
          path="/register"
          render={(routerProps) => <Register {...routerProps} />}
        />
        <Header>
          <Route
            exact
            path="/home"
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            exact
            path="/category"
            render={(routerProps) => <Category {...routerProps} />}
          />
          <Route
            exact
            path="/info"
            render={(routerProps) => <InfoPage {...routerProps} />}
          />
          <Route
            exact
            path="/create"
            render={(routerProps) => <Create {...routerProps} />}
          />
        </Header>
      </Switch>
    </Router>
  );
}
