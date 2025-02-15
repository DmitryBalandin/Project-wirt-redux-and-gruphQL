import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

export function buildLoaders(options:BuildOptions):ModuleOptions['rules']{
   
        const loadersCss = {
          test: /\.s[ac]ss$/i,
          use: [
            options.mode !== "production" ?
              "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"],
        };

        const loadersTsx = {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }

      return [
        loadersCss,
        loadersTsx
      ]
}