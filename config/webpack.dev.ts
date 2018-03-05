
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import merge = require('webpack-merge')
import defaultConfig from './webpack.config'

export default merge.smart(defaultConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  }
})
