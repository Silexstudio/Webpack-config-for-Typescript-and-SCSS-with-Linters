const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
    mode : 'development',
	watch : true,
	watchOptions : {
        aggregateTimeout : 400,
		ignored: '/node_modules/'
    },
    plugins: [
		new StylelintPlugin({
			fix: true,
			files: 'src/**/*.scss',
			emitWarning: true,
		}),
		new ESLintPlugin({
			fix : true,
			extensions: ['ts', 'tsx', 'js'],
			threads: true
		}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
		})
    ],
    cache: {
        type: 'memory'
    },
    output: {
        pathinfo: false,
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
		splitChunks: false,
		minimize: false,
		emitOnErrors: false,
    },
    resolve : {
        extensions: ['.tsx', '.ts', '.js'],
        unsafeCache: true
    }
});