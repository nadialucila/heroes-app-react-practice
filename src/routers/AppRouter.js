import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import {LoginPage} from '../components/login/LoginPage'
import {DashboardRoutes} from './DashboardRoutes'
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function App() {

  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div style={{height: '100%', width: '100%'}}>
        <Switch>
          <PublicRoutes exact path="/login" isAuthenticated={user.logged} component={ LoginPage } />
          <PrivateRoutes path="/" isAuthenticated={user.logged} component={ DashboardRoutes } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
