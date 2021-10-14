// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'assets/svgs/[hash][ext][query]',
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
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(pdf)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/resume/[hash][ext][query]'
                }
            },
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            // filename: "assets/index.html"
        }),
    ]
};