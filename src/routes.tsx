import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SessionContainer } from './containers';

const routes = (): React.ReactElement => (
  <Switch>
    <Route path='/pomodoro/session' component={SessionContainer} />
    <Redirect exact path='/pomodoro' to='/pomodoro/session' />
  </Switch>
);

export default routes;