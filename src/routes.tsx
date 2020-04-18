import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SessionContainer } from './containers';

const routes = (): React.ReactElement => (
  <Switch>
    <Route path='/pomodoro' component={SessionContainer} />
    <Redirect exact path='/' to='/pomodoro' />
  </Switch>
);

export default routes;