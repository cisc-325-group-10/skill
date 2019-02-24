const slsw = require('serverless-webpack');
const WebpackBinPermission = require('./webpack-bin-permissions')

module.exports = {
    entry: slsw.lib.entries,
    mode: 'production',
    plugins: [new WebpackBinPermission()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    stats: 'minimal',
    target: 'node',
};