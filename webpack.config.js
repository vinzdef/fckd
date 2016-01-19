module.exports = {
	entry: './scripts/index.js',
	output: {
	   path: './build',
	   publicPath: '/build/',
	   filename: 'app.js'
   },

	module: {
		preLoaders: [],
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
		},{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		}]
	}
}
