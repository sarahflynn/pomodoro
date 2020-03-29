import { injectGlobal } from 'react-emotion';

injectGlobal(`

  h1 {
    font-family: "Sen", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  h3 {
    font-family: "Sen", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #111;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 400;

    span.sub-header {
      color: #999999;
      margin-left: 5px;
    }
  }

  p, button {
    color: #111;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  
  a {
    color: blue;
    font-weight: bold;
  }
`);

export const theme = {};
