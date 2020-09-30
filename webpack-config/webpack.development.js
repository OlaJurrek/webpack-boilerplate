const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const autoprefixer = require('autoprefixer');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: '../web/',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
