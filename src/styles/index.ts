
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { px } from 'csx'
import { types } from 'typestyle'

import * as Palette from '../palette'

export const BodyStyle: types.NestedCSSProperties = {
  margin: px(42),
  marginTop: px(110),
  fontFamily: Palette.FONTS.TEXT,
  color: Palette.DARK_GREY,
  backgroundColor: Palette.DARK_GREY
}

export const DefaultLinkStyle: types.NestedCSSProperties = {
  color: Palette.LightLink.normal,
  textDecoration: 'none',
  transition: 'color 0.3s',
  $nest: {
    '&:hover': {
      color: Palette.LightLink.hover
    },
    '&:active': {
      color: Palette.LightLink.active
    }
  }
}

export const ListStyleMixin: types.NestedCSSProperties = {
  margin: 0,
  padding: 0,
  $nest: {
    li: {
      padding: 0,
      margin: '3 0',
      listStyle: 'none',
      fontSize: px(18)
    }
  }
}
