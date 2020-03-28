const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const LOCAL_PORT = 9876;

class Pomodoro {
  constructor() {
    this.app = express();
    this.staticPath = null;

    this.app.use(bodyParser.json());

    if (process.env.NODE_ENV === 'local') {
      this.staticPath = path.resolve(__dirname, 'dist/local');
      this.initLocal();
      this.initRoutes();
    }
  }

  initRoutes() {
    this.app.get('/pomodoro*', (req, res) => {
      res.sendFile(path.resolve(this.staticPath, 'index.html'));
    });
  }

  initLocal() {
    // eslint-disable-next-line no-console
    console.log('🔸 Booting into LOCAL mode');

    /* eslint-disable global-require */
    const webpack = require('webpack');
    const middleware = require('webpack-dev-middleware');
    const compiler = webpack(require('./webpack.config'));
    /* eslint-enable global-require */

    this.app.use(
      middleware(compiler, {
        writeToDisk: true,
      }),
    );

    // eslint-disable-next-line no-console
    this.app.listen(LOCAL_PORT, () => console.log(`✅ app initialized at http://localhost:${LOCAL_PORT}/pomodoro`));

    this.app.use(compression());
  }
}

module.exports = new Pomodoro();
