import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'react-emotion';

const TitleWrapper = styled('div')(`
  margin-left: 16px;
`)
export class Header extends React.Component {
  render(): React.ReactElement {
    console.log('in app container');
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <TitleWrapper>
              <h1>Pomodoro App</h1>
            </TitleWrapper>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
