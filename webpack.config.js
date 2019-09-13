
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsPlugin = require('favicons-webpack-plugin')

const PROJECT_ROOT = __dirname
const SOURCE_ROOT = join(PROJECT_ROOT, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'dist')

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  entry: SOURCE_ROOT,

  output: {
    path: BUILD_FOLDER
  },

  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      },
      {
        test: /\.(o|t)tf$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: join(SOURCE_ROOT, 'index.html')
    }),
    new FaviconsPlugin(join(SOURCE_ROOT, 'images/favicon.png')),
    new CopyPlugin([
      {
        from: 'CNAME',
        context: PROJECT_ROOT,
        to: BUILD_FOLDER
      },
      {
        from: '404.html',
        context: SOURCE_ROOT,
        to: BUILD_FOLDER
      }
    ])
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
