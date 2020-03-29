import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import configureStore from './state/store.ts';
import { AppContainer } from './containers/index.ts';
import { theme } from './styles.ts';

const store = configureStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Route component={AppContainer} />
      </Router>
    </Provider>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
