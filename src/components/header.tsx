
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { style } from 'typestyle'
import { px } from 'csx'

import * as Palette from '../palette'
import * as Icons from './icons'

const LogoStyle = style({
  height: px(65),
  fill: Palette.PURPLE
})

export default () => (
  <header>
    <Icons.Kube className={LogoStyle} />
  </header>
)
