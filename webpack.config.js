module.exports = {
    entry: './src/entry.js',
    output: {
        path: './build/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build'
    },
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?presets[]=react,presets[]=es2015'}
        ]
    }
};
