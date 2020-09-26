const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: true
  },
  entry: {
    thayDayCare: "./resources/js/thayDayCare/thayDayCare.js"
  },
  output: {
    filename: "js/[name].bundle.js",
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./thay.template.html"
    })
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
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "./images"
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", //2. Inject styles into DOM
          "css-loader" //1. Turns css into commonjs
        ]
      }
    ]
  }
};
