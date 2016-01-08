const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: "./app/boot",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: 4000,
  },
  resolve: {
    extensions: ['', '.js', '.ts', 'tsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular 2 Webpack',
      template: 'default-index.html',
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:4000', browser: 'Google Chrome' }),
  ]
}