const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LogPlugin = require('./webpack/plugins/LogPlugin')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/mod.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {test: /\.css$/, use: [{loader:'style-loader'},{loader: 'css-loader'}]}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new LogPlugin()
  ]
}