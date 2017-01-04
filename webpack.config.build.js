var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        main: './js'
    },
    output: {
        path: './build',
        filename: "js/[name].js"
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!postcss-loader!sass-loader", { publicPath: '../' })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader?name=[path][name].[ext]!img?minimize"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            "template": "html!./src/index.html"
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    imagemin: {
        gifsicle: { interlaced: false },
        jpegtran: {
          progressive: true,
          arithmetic: false
        },
        optipng: { optimizationLevel: 5 },
        pngquant: {
          floyd: 0.5,
          speed: 2
        },
        svgo: {
          plugins: [
            { removeTitle: true },
            { convertPathData: false }
          ]
        }
    }
}