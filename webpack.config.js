module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle-webpack.js'
    },
    externals: {
        'lodash': '_'
    }
}