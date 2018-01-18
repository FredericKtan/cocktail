const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    rules: {
      'sass-css': {
        modules: true,
        localIdentName: '[hash:base64:5]',
        data: '@import "_variables";', // Not working yet
        includePaths: [path.resolve('./src/styles')], // Not working yet
      },
    },
  },
};
