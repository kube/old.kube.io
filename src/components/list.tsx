
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { style, classes } from 'typestyle'
import { ListStyleMixin } from '../styles'

type ListProps = {
  items: string[]
  className?: string
  style?: React.CSSProperties
}

const ListStyle = style(ListStyleMixin)

export default (props: ListProps) => (
  <ul
    style={props.style}
    className={classes(ListStyle, props.className)}
  >
    {props.items.map(item => <li>{item}</li>)}
  </ul>
)
