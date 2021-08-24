import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../contexts/authContext";


import LoginView from "../views/LoginView";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const AppRouter = () => {

  const { auth } = useContext(AuthContext)

  // La diferencia entre el router principal y las hijas es que no tiene el Router
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            isAuthenticated={ auth.logged }
            exact
            path="/login"
            component={ LoginView } />
          
          <PrivateRouter
            isAuthenticated={ auth.logged }
            path="/"
            component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router >
  )
}

export default AppRouter
