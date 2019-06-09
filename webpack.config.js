const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'client', 'index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    }, 
    module: {
        rules: [
            { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
};