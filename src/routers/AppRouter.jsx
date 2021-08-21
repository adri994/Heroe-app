import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import LoginView from "../views/LoginView";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  // La diferencia entre el router principal y las hijas es que no tiene el Router
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            component={ LoginView } />
          
          <Route
            path="/"
            component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router >
  )
}

export default AppRouter
