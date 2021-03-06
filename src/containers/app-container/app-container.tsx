import * as React from 'react';
import styled from 'react-emotion';
import { Header } from '../../components'

import Routes from '../../routes';

const ViewWrapper = styled('div')(`
  padding: 32px;
  display: flex;
  justify-content: center;
`);

export class AppContainer extends React.Component {
  render(): React.ReactElement {
    return (
      <>
        <Header />
        <ViewWrapper>
          <Routes />
        </ViewWrapper>
      </>
    );
  }
}

export default AppContainer;
