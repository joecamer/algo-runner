const path = require("path")

module.exports = {
    entry: './src/ts/app.ts',
    output: {
        path: path.resolve(__dirname , 'dist/js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    }
}