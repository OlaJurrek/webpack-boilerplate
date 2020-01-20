const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: "file-loader"
      },
      {
        test: /\.(otf|ttf|woff2?)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};
