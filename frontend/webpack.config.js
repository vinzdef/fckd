var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './scripts/index.js',
	output: {
	   path: './build',
	   publicPath: '/build/',
	   filename: 'app.js'
   },

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
		},{
			test: /\.s?css$/,
		   	loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	   }]
	},

	plugins: [
	   new ExtractTextPlugin('main.css')
   ]
}
