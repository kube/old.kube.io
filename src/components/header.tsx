
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { style, media } from 'typestyle'
import { px } from 'csx'

import * as Palette from '../palette'
import { Logo } from './logo/kubeLogo'

const LogoStyle = style(
  media(
    { type: 'screen' },
    {
      height: px(65),
      fill: Palette.PURPLE
    }
  ),
  media(
    { type: 'print' },
    {
      display: 'none'
    }
  )
)

export default () => (
  <header>
    <Logo className={LogoStyle} />
  </header>
)
