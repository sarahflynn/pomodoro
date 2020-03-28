import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import configureStore from './state/store.ts';
import { theme } from './styles.ts';
import { AppContainer } from './containers/index.ts';

const store = configureStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Route component={AppContainer} />
        </Router>
      </ErrorBoundary>
    </Provider>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
