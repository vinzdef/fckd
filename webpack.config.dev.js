var autoprefixer = require('autoprefixer')
var HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        filename: '[name].js',
        publicPath: '/'
    },

    devServer: { historyApiFallback: true },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!postcss?sourceMap!sass?sourceMap'
            },
            { test: /\.(svg|jpg|png|gif|woff2?|ttf)$/, loader: 'url'},
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'html' }
        ]
    },

    postcss: function() {
        return [autoprefixer]
    },

    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: true
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    }
}
