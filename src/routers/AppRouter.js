import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {LoginPage} from '../components/login/LoginPage'
import {DashboardRoutes} from './DashboardRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={ LoginPage } />
          <Route path="/" component={ DashboardRoutes } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
