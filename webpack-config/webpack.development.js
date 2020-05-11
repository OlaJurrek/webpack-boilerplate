const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const autoprefixer = require("autoprefixer");

module.exports = webpackMerge(commonConfig, {
  mode: "development",
  devServer: {
    contentBase: "../web/"
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", 
        {
          loader: "postcss-loader",
          options: {
            autoprefixer: {
              browsers: ["> 0.3%, IE 11, not dead"]
            },
            plugins: () => [autoprefixer]
            // config: {
            //   path: "./webpack-config/postcss.config.js"
            // }
          }
        },
        "sass-loader"]
      }
    ]
  }
});
