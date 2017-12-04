// const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins:[
    // file name cache
    // new webpack.NamedModulesPlugin(),
  ]
})