import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
            // static: './dist',
            port: 3000,
            open: true,
            historyApiFallback:true  
    }
}