/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-map'
};
