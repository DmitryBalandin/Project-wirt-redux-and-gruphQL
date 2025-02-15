import  webpack  from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import { BuildOptions } from "./types/types";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolver } from "./buildResolver";



export function buildWebpack(options:BuildOptions): webpack.Configuration {
    
    return {
        mode: options.mode,
        entry: options.paths.entry,
        devtool: 'inline-source-map',
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.output,
            clean: true
          },
          plugins:buildPlugins(options),
          module:{
            rules:buildLoaders(options),
          },
          resolve:buildResolver(options),
          devServer:buildDevServer(options),

    }
}