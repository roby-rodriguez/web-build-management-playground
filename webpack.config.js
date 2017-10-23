const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/app.module.js',
/*
        vendors: [
            //'angular/angular.js',
            //'@uirouter/angularjs/release/angular-ui-router.js',
            //'angular-sanitize'

        ]
*/
    },
    context: __dirname,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app/!html')) },
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {}
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
        ],
    },
    resolve: {
        extensions: [ '.js', '.ts', '.scss' ],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{ from: './src/index.html', to: './index.html' }])
    ]
};
