/*const path = require('path');

module.exports = {
    entry: './src/index.js',                // JavaScript entry point
    output: {
        filename: 'bundle.js',              // Output file
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,            // For processing CSS files
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false, // Disable source maps to avoid related errors
                        },
                    },
                ],
            },
        ],
    },
    mode: 'production',
};*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',           // JavaScript entry point
    output: {
        filename: 'login-password.js',         // Output JavaScript file
        path: path.resolve(__dirname, 'dist'),  // Output folder
        clean: true,                   // Clean the /dist folder before new build
    },
    module: {
        rules: [
            {
                test: /\.css$/i,       // For processing CSS files
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false, // Ignore errors related to missing files referenced in CSS
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,  // Fonts and images for Bootstrap
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,      // For processing HTML files
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/login-password.html',  // HTML file to be processed
        }),
        new MiniCssExtractPlugin({
            filename: 'login-password.css',        // Output CSS file
        }),
    ],
    mode: 'production',                  // Set mode to production for optimization
};

