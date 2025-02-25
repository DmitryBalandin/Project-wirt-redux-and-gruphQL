
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/buildWebpack';
import { BuildMode, BuildPaths } from './config/types/types';


interface EnvVariable {
  mode: BuildMode,
  port: number
}

export default (env:EnvVariable) =>{
  const paths:BuildPaths ={
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src:path.resolve(__dirname,'src')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  })

  return config
}