const merge = require('webpack-merge')
const baseConfig = './webpack.config.base.js'

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 5000
  }
})
