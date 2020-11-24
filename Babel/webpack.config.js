const path = require('path');
module.exports = {
    entry: ['@babel/polyfill','./js/main.js'],
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js',
    },
};