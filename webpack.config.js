var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		path.resolve(__dirname, './build/index.js')
	],
	output: {
		path: "dist",
		publicPath: '/',
		filename: "bundle.js"
	},
	
	module: {
		loaders: [
	
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')
			},
			{
				test: /\.(woff|woff2|otf|ttf|svg)$/,
				exclude: /node_modules/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000',
				query: {
					mimetype: 'image/png'
				}
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	watch: true
}
