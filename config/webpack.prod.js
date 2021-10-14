const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

const prodConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader", ]
            },
        ]
    },
    plugins: [
        // new CopyPlugin
        new MiniCssExtractPlugin({
            filename: "styles/style.css"
        })
    ]
}

module.exports = merge( common, prodConfig );