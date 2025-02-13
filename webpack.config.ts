import  path from 'path';
import  webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
// import type { Configuration } from "webpack";
import  HtmlWebpackPlugin from'html-webpack-plugin';


type Mode = 'production' | 'development';

interface EnvVariables{
  mode:Mode
}

export  default  (env:EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      port:3000,
      open:true
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template:path.resolve(__dirname, 'public', 'index.html')
    })],
}
    return config

};