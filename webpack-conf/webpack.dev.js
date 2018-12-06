const baseConf = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(baseConf, {
    mode: 'development',
    watch: true
});