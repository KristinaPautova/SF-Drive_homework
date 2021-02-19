const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/new.ts',
    output: {
        filename: "main.js"
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }

        ]
    }
}