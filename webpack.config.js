const path = require('path');
module.exports = {
  mode:'development',
  entry: {
    "adminf":'./src/adminF/index.ts',
    "webpart":'./src/webpart/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          },
      ]
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"],
  },
  //不打包的
  externals: {
    'jquery': "jQuery"
  }
};