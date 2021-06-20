"use strict";
/**
 * Version of the Webpack Config used for Development.
 *
 * This version will include SourceMaps, Uncompressed JS and HMR.
 */

module.exports = {
  entry: ["./app/scripts/MainPage.js"],
  output: {
    filename: "[name].min.js",
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-object-rest-spread"],
        },
      },
    ],
  },
};
