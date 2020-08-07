import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Login from './login';

const Routes = () => (
  <Switch>
      <Route path="/" exact component= { Login } />
      <Route path="/menu" component={ Menu } />
  </Switch>
);

export default Routes;
