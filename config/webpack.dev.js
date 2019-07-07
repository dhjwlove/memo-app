const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

const projectDir = path.join(__dirname, "..");
module.exports = merge(common, {
  devServer: {
    contentBase: `${projectDir}/build`,
    inline: true,
    hot: true,
    host: "0.0.0.0",
    port: "4000",
    quiet: false,
    noInfo: false,
    historyApiFallback: true
  },
  mode: "development",
  output: {
    path: path.resolve(projectDir, "build"),
    publicPath: "/",
    filename: "js/[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
