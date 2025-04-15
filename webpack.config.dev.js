const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
	plugins: [
		new ESLintPlugin({
			eslintPath: require.resolve('eslint/use-at-your-own-risk'),
			extensions: ['js'],
			fix: true,
		}),
	],
	stats: {
		children: true,
	},
})
