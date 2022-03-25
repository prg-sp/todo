const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: { application: ['./src/js/app.js', './src/css/main.css'] },

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
		}),
	],
};
