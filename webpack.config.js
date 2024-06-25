const path = require('path');

module.exports = {
    entry: {
        script: path.resolve(__dirname, 'src/script.ts'),
        comic: path.resolve(__dirname, 'src/comic.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development'
};