exports.loadCSS = ({include, exclude} = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        // Loaders are transformations that are applied to source files, and return the new source and can be chained together like a pipe in Unix.
        // They evaluated from right to left.
        // This means that loaders: ['style-loader', 'css-loader'] can be read as styleLoader(cssLoader(input)).
        //use ['style-loader', 'css-loader'],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include,
        exclude,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }
});

exports.devServer = ({host, port} = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host,
    port,
    overlay: {
      errors: true,
      warnings: true,
    }
  }
});

exports.lintJavascript = ({include, exclude, options} = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'eslint-loader',
        options,
      }
    ]
  }
});
