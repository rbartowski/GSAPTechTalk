const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * `..` Since this config file is in the config folder so we need
 * to resolve path in the top level folder.
 */
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
    mode: 'development',
    entry: {
        // Since we need to load vue in the entry page.
        vue: 'vue',
        // This is where the `main-content` component is
        index: resolve('src/index.js'),
    },
    output: {
        filename: 'index.js',
        // Folder where the output of webpack's result go.
        path: resolve('dist'),
    },
    module: {
        rules: [
            {
                // vue-loader config to load `.vue` files or single file components.
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                        css: ['vue-style-loader', {
                            loader: 'css-loader',
                        }],
                        js: [
                            'babel-loader',
                        ],
                    },
                    cacheBusting: true,
                },
            },
            {
                // This is required for other javascript you are gonna write besides vue.
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('node_modules/webpack-dev-server/client'),
                ],
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  MiniCSSExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
        ],
    },
    /**
     * There are multiple devtools available, check
     * https://github.com/webpack/webpack/tree/master/examples/source-map
     */
    devtool: 'eval',
    devServer: {
        // The url you want the webpack-dev-server to use for serving files.
        host: '0.0.0.0',
        // Can be the popular 8080 also.
        port: 8080,
        // gzip compression
        compress: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: true,
        },
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve('src/index.html')}),
        new webpack.NamedModulesPlugin(),
        // Exchanges, adds, or removes modules while an application is running, without a full reload.
        new webpack.HotModuleReplacementPlugin(),
        new MiniCSSExtractPlugin({
            filename: "./src/styles/main.css",
          })
    ],
    resolve: {
        /**
         * The compiler-included build of vue which allows to use vue templates
         * without pre-compiling them
         */
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.vue', '.js', '.json', '.scss'],
    },
    // webpack outputs performance related stuff in the browser.
    performance: {
        hints: false,
    },
};