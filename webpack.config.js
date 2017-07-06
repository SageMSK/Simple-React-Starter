const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
        { 
          test: /\.js?$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader'
        },
        {
          test: /(\.css|\.scss|\.sass)$/,
          // use ExtractTextPlugin so they can be outputted to their own .css file
          use: ExtractTextPlugin.extract({
            use: [
              { // translates CSS into CommonJS
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: { 
                  sourceMap: true,
                  plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
                }
              },
              { // compiles Sass to CSS
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ],
            // creates style nodes from JS strings
            fallback: 'style-loader'
          })
        },
        {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
        {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
        {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  devServer: {
    historyApiFallback: true,
    // Messages like webpack bundle info is not shown: https://webpack.js.org/configuration/dev-server/#devserver-noinfo-
    noInfo: true
  },
  plugins: [
    // Create HTML file that includes references to bundled CSS and JS. 
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    // In production, create a separate CSS bundle file and disable this if dev
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      disable: process.env.NODE_ENV === "development"
    })
  ]
};

/*
  FOR PRODUCTION
  In package.json -> "build": "NODE_ENV=production webpack -p" or
  on Windows: "build": "set NODE_ENV=production && webpack -p"
*/
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  );
}

module.exports = config;