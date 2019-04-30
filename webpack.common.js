const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin/dist/clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: resolve('src', 'app'),
  output: {
    filename: 'bundle.js',
    path: resolve('build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['build'],
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html'
    }),
    new HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      '^': resolve('src'),
    },
    extensions: ['.js', '.jsx', '.mjs'],
  },
};