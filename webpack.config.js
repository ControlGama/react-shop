const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            }, {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }, {
                test: /\.(svg|png|jpg)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        port: 3005,
        compress: true,
        historyApiFallback: true,
    }
}