const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode : 'production',
    entry : {
        'app' : ['./src/js/app.ts', './src/scss/app.scss'],
    },
    performance: {
        hints: false
    },
    watchOptions : {
        aggregateTimeout : 400,
    },
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : 'js/[name].js'
    },
    module : {
        rules : [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions : {
								minimize: false,
								outputStyle: 'expanded'
							}
						}
					}
				]
            }
        ]
	},
	stats : {
		assets: false,
		modules: false,

		children: true,
		
		warnings : true,

		errors: true,
		errorDetails: true,
		errorStack: true,
	},
    resolve : {
        extensions: ['.tsx', '.ts', '.js'],
    }
}