const path = require('path')                                       
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    watch : false,
    mode : 'development',                           
    entry: ['./src/index.jsx'],
    output: {                                           
        path: path.join(__dirname, '/dist'),            
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.styl'],
    },
    module: {                                          
        rules: [
            {
                test: /\.(js|jsx)$/,                     
                exclude: /node_module/,                 
                use:{
                    loader: 'babel-loader'				
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename : './index.html',
        })
    ],
    devServer : {
        hot : true,
        port : 3000
    }
}