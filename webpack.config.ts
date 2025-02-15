import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


type Mode = 'production' | 'development';

interface EnvVariables {
  mode: Mode
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      port: 3000,
      open: true
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.mode !== "production" ?
              "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"],
        },
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
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    ],

  }
  return config

};