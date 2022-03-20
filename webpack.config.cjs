const path = require('path');
// import path from 'path';

module.exports = {
	mode: 'development',

	entry: { appsas: ['./src/js/app.js', './src/css/main.css'] },

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},

	devServer: {
		liveReload: true,
		port: 8080,
		open: true,
	},
	module: {
		rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
	},
};
