const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        plugins: [new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template:path.resolve(__dirname, 'public', 'index.html')
        })],
    }

};