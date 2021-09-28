const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/i,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader", ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(svg|png|jpg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: [ ".js" ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            // filename: "assets/index.html"
        }),
        // new CopyPlugin
        new MiniCssExtractPlugin({
            filename: "styles/style.css"
        })
    ]
};