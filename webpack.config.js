const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[
    new webpack.DefinePlugin({
      'tabsMap': JSON.stringify(dotenv.parsed.TABSMAP || '{}')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}