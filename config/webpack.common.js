const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const projectDir = path.join(__dirname, "..");
module.exports = {
  entry: {
    app: `${projectDir}/src/index.js`
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vender: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "venders"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: "/node_modules",
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${projectDir}/public/template.html`,
      chunks: ["app", "venders"],
      filename: "index.html"
    })
  ]
};
