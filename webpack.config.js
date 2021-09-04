const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForStyles = {
    test: /\.css$/,
    use: ['style -loader', 'css-loader']
}
const ruleForJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ]
        ]
    }
}

const ruleForImages = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
}

const rules = [ruleForJavaScript, ruleForStyles, ruleForImages]

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production'
    return {
        entry: './src/index.js',
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: { rules },
        devServer: {
            open: true,
            port: 3000,
            compress: true
        }

    }
}