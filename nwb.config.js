const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    rules: {
      sass: {
        modules: true,
        loader: 'sass-loader',
        localIdentName: '[hash:base64:5]',
      },
    },
    extra: {
      module: {
        rules: [{
          test: /\.scss$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
            options: {
              data: '@import "colors.scss";',
              includePaths: [
                path.resolve(__dirname, './src/styles'),
              ],
            },
          }],
        }],
      },
    },
  },
};
