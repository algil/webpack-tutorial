const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
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
      })
    ],
  },
  parts.lintJavascript({include: PATHS.app}),
  parts.loadCSS(),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    // Customized host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
