import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './menu';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Menu />
    </Route>
  </Switch>
);

export default Routes;
