const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");

const projectDir = path.join(__dirname, "..");
module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(projectDir, "build"),
    publicPath: "/",
    filename: "js/[name].[contenthash:8].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new CleanWebpackPlugin()
  ]
});
