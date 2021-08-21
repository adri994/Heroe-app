import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from '../components/Navbar'
import DcView from "../views/DcView";
import HeroView from "../views/HeroView";
import MarvelView from "../views/MarvelView";
import SearchHeroe from "../views/SearchHeroe";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route
            exact
            path="/marvel"
            component={MarvelView} />
          <Route
            exact
            path="/dc"
            component={DcView} />
          <Route
            exact
            path="/hero/:heroeId"
            component={HeroView} />
          <Route
            exact
            path="/search"
            component={SearchHeroe} />

          <Redirect to="/marvel" />
        </Switch>

      </div>
    </>
  )
}

export default DashboardRoutes
