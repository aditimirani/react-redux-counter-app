const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports= {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[chunkhash].js'
    }, 
    module: {
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               }
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            // {
            //     test:/\.html$/,
            //     use:['html-loader']
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
         new CleanWebpackPlugin()
    ]
}