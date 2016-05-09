'use strict';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};
