import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export class Header extends React.Component {
  render(): React.ReactElement {
    console.log('in app container');
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <h1>Pomodoro App</h1>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
