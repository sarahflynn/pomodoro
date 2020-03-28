import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AppContainer } from './containers';

const routes = (): React.ReactElement => (
  <Switch>
    <Route path='/pomodoro' component={AppContainer} />
    <Redirect exact path='/pomodoro*' to='/pomodoro' />
  </Switch>
);

export default routes;