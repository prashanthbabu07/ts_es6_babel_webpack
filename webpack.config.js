const path = require('path');

module.exports = {
    entry: {
        index: './src/index.ts',
        testes6: "./src/testes6.js"
    },
    //devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                use: 'babel-loader' // specify the loader
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        // filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist/scripts'),
    },
};