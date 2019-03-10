const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const projectRoot = path.resolve(__dirname)

module.exports = {
  entry: (() => {
    const entry = {
      bundle: path.join(__dirname, 'src', 'index.js')
    }

    entry.development = [
      // 'react-hot-loader/patch',
      // 'webpack/hot/only-dev-server'
    ]

    return entry
  })(),
  output: {
    filename: (() => {
      return '[name].js'
    })()
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(projectRoot, 'src'),
        exclude: path.join(projectRoot, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.join(projectRoot, 'src')
    ]
  }
}
