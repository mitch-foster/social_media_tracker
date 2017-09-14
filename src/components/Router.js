import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutPage from './AboutPage';
import ChartPage from './ChartPage';

export default (
  <Switch>
    <Route component={ AboutPage } exact path="/" />
    <Route component={ ChartPage } path="/chart" />
  </Switch>
)