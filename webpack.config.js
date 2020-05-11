const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    entry: './src/app.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [
                        /\.vue$/
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'web/resources/js'),
        filename: 'app.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.js', '.vue']
    }
};

module.exports = function (env, argv) {
    const mode = argv.mode || config.mode;
    const isDev = mode === 'development';

    if (isDev) {
        config.devtool = 'inline-source-map';
    }

    return config;
};
