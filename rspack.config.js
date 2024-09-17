const path = require('path');
const { RsdoctorRspackPlugin } = require('@rsdoctor/rspack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    devtool: false,
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    externals: {
        react: 'react',
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    plugins: [
      process.env.RSDOCTOR &&
        new RsdoctorRspackPlugin({
          // plugin options
        }),
    ].filter(Boolean),
};
