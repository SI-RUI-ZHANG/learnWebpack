import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {modules: true}},
          // modules: true enables CSS Modules
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {modules: true}},
          {loader: "sass-loader"},
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ]
  }
};

export default config;