const webpack = require('webpack');
module.exports = {
  entry: {
    app: [
      './src/index.js',
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
