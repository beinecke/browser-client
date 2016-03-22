module.exports = {
    entry: './src/entry.js',
    output: {
        path: './build/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build'
    },
    module: {
        loaders: [
            {test: /\.less$/, exclude: /node_modules/, loader: 'style!css!less'},
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'}
        ]
    }
};
