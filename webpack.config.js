const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/app.ts'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				use: { loader: "babel-loader", loader: "ts-loader" }
			},
			{
				test: /\.(css|scss)$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '/image',
					outputPath: 'image'
				}
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		hot: true,
		open: true,
		compress: true,
		port: 3000,
	}
}