import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration } from "webpack";


export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    const htmlPlugin = new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: options.paths.html
    })

    const miniCssPugin = new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
    })

    return [
        htmlPlugin,
        miniCssPugin
    ]
}