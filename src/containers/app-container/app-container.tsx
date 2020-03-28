import * as React from 'react';
import { connect } from 'react-redux';

export class AppContainer extends React.Component {
  render(): React.ReactElement {
    console.log('in app container');
    return (
      <>
        <h1>Test Page</h1>
        <p>This is my test page</p>
      </>
    );
  }
}

export default AppContainer;