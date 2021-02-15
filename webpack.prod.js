const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
    mode : 'production',
	watch : false,
    plugins: [
		new StylelintPlugin({
			fix: true,
			files: 'src/**/*.scss',
			emitError: true
		}),
		new ESLintPlugin({
			fix : true,
			extensions: ['ts', 'tsx', 'js'],
		}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
		}),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                safe: false,
                discardComments: { removeAll: true },
                map: {
                    inline: false
                }
            },
            canPrint: true
		}),
		new MinifyPlugin()
    ],
	optimization: {
		minimize: false,
    }
});