import React from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  LandingPage,
  MenuPage,
  DashboardConfigPage,
  DashboardPage,
  MusicPage,
  Home,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/menu" exact={true} component={MenuPage} />
        <Route
          path="/dashboard/:id/config"
          exact={true}
          component={DashboardConfigPage}
        />
        <Route path="/dashboard/:id" exact={true} component={DashboardPage} />
        <Route path="/music" exact={true} component={MusicPage} />
      </Switch>
    </Router>
  );
}

export default App;
