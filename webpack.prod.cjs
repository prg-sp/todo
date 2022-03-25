const path = require('path');
const common = require('./webpack.common.cjs');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].[contenthash].bundle.js',
	},

	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
		new CleanWebpackPlugin(),
	],

	optimization: {
		minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},
});
