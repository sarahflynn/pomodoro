import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './state/store.ts';
import { theme } from './styles.ts';
import { AppContainer } from './containers/index.ts';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Route component={AppContainer} />
    </Router>
  </Provider>
);

render(<App />, document.getElementById('root'));
