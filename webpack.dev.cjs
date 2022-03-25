const path = require('path');
const common = require('./webpack.common.cjs');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},

	devServer: {
		static: {
			directory: path.resolve(__dirname, 'src'),
		},
		liveReload: true,
		port: 8080,
		open: true,
	},

	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
		],
	},
});
