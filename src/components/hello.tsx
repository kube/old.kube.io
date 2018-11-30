
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
import Markdown from 'react-markdown'

import Social from './social'
import { intro } from '../data/intro'
import * as PALETTE from '../palette'

const HelloPageStyle = style({
  margin: '0 auto',
  $nest: {
    h1: {
      fontFamily: PALETTE.FONTS.SANS,
      fontWeight: 700,
      fontSize: px(74),
      margin: 0,
      padding: 0,
      marginTop: px(16)
    },
    h2: {
      fontFamily: PALETTE.FONTS.SANS,
      fontWeight: 400,
      fontSize: px(40),
      margin: 0,
      padding: 0,
      marginBottom: px(18)
    },
    p: {
      textAlign: 'justify',
      fontSize: px(18),
      lineHeight: px(25)
    }
  }
})

export default () => (
  <div className={HelloPageStyle}>
    <h1>Hello.</h1>
    <h2>I'm a Freelance Developer.</h2>
    <Markdown source={intro} />
    <Social />
  </div>
)
