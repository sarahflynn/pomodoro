const path = require('path');
const webpack = require('webpack');
const { execSync } = require('child_process');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const BUILD_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
const BUNDLE_PATH = path.join(__dirname, `./dist/${BUILD_ENV}`);
const RELEASE = execSync('git rev-parse HEAD')
  .toString()
  .trim();

const finalPlugins = [
  new CopyWebpackPlugin([
    {
      from: './src/index.html',
    },
  ]),
  new webpack.EnvironmentPlugin({
    NODE_ENV: process.env.NODE_ENV,
    RELEASE,
  }),
];

module.exports = {
  mode: isProd ? 'production' : 'development',
  
  entry: ['@babel/polyfill', './src/index.js'],

  output: {
    path: BUNDLE_PATH,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },

  plugins: finalPlugins,
};
