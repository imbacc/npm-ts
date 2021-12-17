const webpack = require('webpack')
const { resolve } = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const packageConfig = require('./package.json')

module.exports = {
  mode: 'production',
  entry: './libs/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node-modeules/
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin(`v${packageConfig.version}\nupdate: ${new Date().toLocaleString('zh')}`)
  ]
}
