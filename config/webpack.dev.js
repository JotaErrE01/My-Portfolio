const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        // contentBase: "../dist",
        // open: true o 'chrome'
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: [ 'style-loader', "css-loader", "sass-loader" ]
            },
        ]
    }
}

module.exports = merge( common, devConfig );