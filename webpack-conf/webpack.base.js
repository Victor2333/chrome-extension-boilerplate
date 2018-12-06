const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')
const PATHS = {
    srcPath: srcPath,
    background: path.resolve(srcPath, 'entries', 'background.js'),
    content: path.resolve(srcPath, 'entries', 'content.js'),
    popup: path.resolve(srcPath, 'entries', 'popup.js'),
    static: path.resolve(srcPath, 'static'),
    dist: path.resolve(rootPath, 'dist')
}
module.exports = {
    entry: {
        popup: PATHS.popup,
        content: PATHS.content,
        background: PATHS.background
    },
    output: {
        path: PATHS.dist,
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'popup',
            filename: 'popup.html',
            template: path.resolve(PATHS.static, 'template', 'popup.ejs'),
            chunks: ['popup']
        }),
        new CleanWebpackPlugin([PATHS.dist], { root: rootPath })
    ]
}
