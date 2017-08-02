const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    app: PATHS.app, // If a file name is not specified, index.js will be resolved by default
  },
  output: {
    path: PATHS.build,
    filename: '[name].js', // [name] will be replaced by the name of the entry (app), so it will be app.js
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};