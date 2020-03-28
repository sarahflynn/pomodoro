import * as React from 'react';
import styled from 'react-emotion';
import Routes from '../../routes';

const ViewWrapper = styled('div')(`
  padding: 16px 32px;
`)

export class AppContainer extends React.Component {
  render(): React.ReactElement {
    console.log('in app container');
    return (
      <>
        <h1>Pomodoro</h1>
        <ViewWrapper>
          <Routes />
        </ViewWrapper>
      </>
    );
  }
}

export default AppContainer;