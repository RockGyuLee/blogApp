const path = require('path')                                       
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    watch : false,
    mode : 'development',                           
    entry: ['./src/index.jsx'],
    output: {                                           
        path: path.join(__dirname, '/dist'),            
        filename: '[name].js',
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
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options : {
                            regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
                            name: '[1]-[name].[ext]',
                        }
                    },
                ],
                
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader"
                    }
                ],
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename : './index.html',
        }),
    ],
    devServer : {
        hot : true,
        port : 3000
    }
}