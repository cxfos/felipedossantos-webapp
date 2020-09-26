const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackLaravelMixManifest = require('webpack-laravel-mix-manifest');

module.exports = {
  mode: "production",
  entry: {
    rootSiteApp: "./resources/js/rootSite/rootSiteApp.js",
    thayDayCare: "./resources/js/thayDayCare/thayDayCare.js"
  },
  output: {
    filename: "js/[name].[contentHash].js",
    path: path.resolve(__dirname, "public")
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10,
          name(module, chunks, cacheGroupKey) {
            const chunksName = chunks.length > 1 ? 'common' : chunks.map((item) => item.name).join('_');
            return `${cacheGroupKey}-${chunksName}`;
          },
        }
      }
    },
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].[contentHash].css" }),
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: [
        'images/*',
        'js/*',
        'css/*',
        '!burbank/*',
        '!fontawesome/*',
        '!.htaccess',
        '!favicon.ico',
        '!index.php',
        '!robots.txt'
      ]
    }),
    new WebpackLaravelMixManifest()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "./public/images"
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, //2. Extract css into files
          "css-loader" //1. Turns css into commonjs
        ]
      }
    ]
  }
};
