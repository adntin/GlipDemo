// const webpack = require('webpack')
const merge = require('webpack-merge')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  plugins: [
    // file name cache
    // new webpack.HashedModuleIdsPlugin(),
    // tree shaking
    // new UglifyJSPlugin()
  ]
})