var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js'
    },
    output: {
        path: './dev',
        filename: "js/[name].js"
    },
    devtool: "inline-source-map",
    module:{
        loaders:[

            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new StyleLintPlugin({syntax: 'scss'}),
        new HtmlWebpackPlugin({
            "template": "html!src/index.html"
        }),
    ]
}