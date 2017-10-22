const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/app.module.js',
        vendor: [
            'angular/angular.js',
            'angular-ui-router/release/angular-ui-router.js',
            'angular-sanitize'
        ]
    },
    context: __dirname,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app')) },
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
    ]
};
