var path = require('path');
var webpack = require('webpack');

//var bootstrapPath = path.join(__dirname, 'css/');

module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            }
            //{ test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }       
};

    //webpack-dev-server --progress --colors --history-api-fallback
