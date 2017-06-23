var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var config = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.bundle.js'
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
          use: [
            'style-loader', // creates style nodes from JS strings
            { // translates CSS into CommonJS
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { 
                sourceMap: true,
                plugins: () => [autoprefixer]
              }
            },
            { // compiles Sass to CSS
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        }
    ]
  },
  plugins: [
    // Create HTML file that includes references to bundled CSS and JS. 
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}

/*
  FOR PRODUCTION
  In package.json -> "build": "NODE_ENV=production webpack -p"
  Windows: "build": "set NODE_ENV=production && webpack -p"
*/
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  )
}

module.exports = config;