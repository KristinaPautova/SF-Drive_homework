const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js'
    },
    mode: 'production',
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
	      {
	        test: /\.scss$/i,
	        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	      },
	      {
	      	test: /\.(eot|woff|ttf|svg)$/,
	      	use: ['file-loader']
	      }
	  ],
	},
	optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  }
}
