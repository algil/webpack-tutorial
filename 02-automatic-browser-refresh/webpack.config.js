const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const commonConfig = {
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
  ]
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      // Enable HTML5 History API Fallback
      historyApiFallback: true,
      // Only show errors to reduce logs amount
      stats: 'errors-only',
      host: process.env.HOST, // by default: `localhost`
      port: process.env.PORT, // bu default: 8080
    }
  };

  return Object.assign(
    {},
    commonConfig,
    config,
  );
};

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig();
  }

  return developmentConfig();

};