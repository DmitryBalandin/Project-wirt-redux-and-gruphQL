import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

  const isDev = options.mode === "development";

  const localClassName =
    isDev ?
      '[path][name]__[local]' :
      '[hash:base64:8]';

  const assetLoaders = {
    test: /\.(png|jpg|jpeg)/,
    type: 'asset/resource'
  };
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }],
};

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const loadersCss = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? MiniCssExtractPlugin.loader :
        "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            namedExport: false,
            exportLocalsConvention: 'as-is',
            localIdentName: localClassName,
          }
        },


      }
      // , 
      // {
      //   loader: 'resolve-url-loader',
      // }
      , {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        }
      }]
  };


  const loadersTsx = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    fontsLoader,
    svgLoader,
    assetLoaders,
    loadersCss,
    loadersTsx
  ]
}