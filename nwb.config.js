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
        includePaths: [path.resolve('./node_modules')], // Not working yet
      },
    },
  },
};
