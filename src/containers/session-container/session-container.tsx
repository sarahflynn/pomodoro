import * as React from 'react';
import { connect } from 'react-redux';

export class SessionContainer extends React.Component {
  render(): React.ReactElement {
    console.log('in session container');
    return (
      <>
        <h1>Session Page</h1>
      </>
    );
  }
}

export default SessionContainer;