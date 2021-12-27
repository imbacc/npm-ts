const webpack = require('webpack')
const { resolve } = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const packageConfig = require('./package.json')

module.exports = {
  mode: 'production',
  entry: {
    index: './libs/index.ts'
  },
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
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
          compress: {
            drop_console: true, //传true就是干掉所有的console.*这些函数的调用.
            drop_debugger: true, //干掉那些debugger;
            pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
          }
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin(`v${packageConfig.version}\nupdate: ${new Date().toLocaleString('zh')}`)
  ]
}
