const path = require("path")
const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const copyWebpackplugin = require("copy-webpack-plugin")
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function (env, argv) {
  return {
    mode: env.production ? "production" : "development",
    entry: path.resolve(__dirname, "src/main.js"),
    devtool: env.production ? "none" : "eval-source-map",
    output: {
      filename: "[name].js",
      chunkFilename: "[name]_[chunkhash:8].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: '/' // hin重要
    },
    module: {
      rules: [
        {
          test: /\.ts|\.js$/,
          exclude: /node_modules/,
          use: [
            "babel-loader",
            // {
            //   loader: "ts-loader",
            //   options: {
            //     appendTsSuffixTo: [/\.vue$/]
            //   }
            // }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "vue-style-loader",
            'css-loader',
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            "vue-style-loader",
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }
      ]
    },
    resolve: {
      extensions: [".ts", '.js', '.vue'],
      alias: {
        "@": path.resolve(__dirname, "./")
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      compress: true,
      port: 3030,
      historyApiFallback: true,
      host: "0.0.0.0",
      hot: true,
      overlay: true,
      publicPath: "/"
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['dist']
      }),
      new copyWebpackplugin([
        {from: "./src/static", to: './static'}
      ]),
      new htmlWebpackPlugin({
        template: "./src/index.html"
      }),
      // new HtmlWebpackTagsPlugin({
      //   tags: ['static/css/common.css'],
      //   append: true
      // }),
      new VueLoaderPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}