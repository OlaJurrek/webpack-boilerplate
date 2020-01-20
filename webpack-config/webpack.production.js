const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "../web")
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./webpack-config/"
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].bundle.css" })
  ],
  optimization: {
    minimizer: []
  }
});
