
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

import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-jsx'

import * as PALETTE from '../palette'

const CodeStyle = style({
  color: PALETTE.CODE.TEXT,
  $nest: {
    '.tag': {
      color: PALETTE.CODE.BLUE,
      $nest: {
        '.punctuation': { color: PALETTE.CODE.TEXT }
      }
    },
    '.punctuation': {
      fontWeight: 500,
      color: PALETTE.CODE.COMMENT
    },
    '.attr-name': {
      color: PALETTE.CODE.PINK
    },
    '.operator': {
      color: PALETTE.CODE.PURPLE
    },
    '.keyword': {
      color: PALETTE.CODE.PURPLE
    },
    '.function': {
      color: PALETTE.CODE.PINK
    },
    '.number': {
      color: PALETTE.CODE.CYAN
    },
    '.string': {
      color: PALETTE.CODE.CYAN
    },
    '.script': {
      color: PALETTE.CODE.TEXT,
      $nest: {
        '.punctuation': {
          color: PALETTE.CODE.COMMENT
        }
      }
    },
    '.boolean': {
      fontWeight: 500,
      color: PALETTE.CODE.CYAN
    }
  }
})

type CodeRenderProps = {
  value: string
  language: string
  inline: boolean
}

export const CodeRenderer = (props: CodeRenderProps) => (
  <pre className={CodeStyle}>
    <code
      dangerouslySetInnerHTML={{
        __html: highlight(props.value, languages[props.language], 'typescript')
      }}
    />
  </pre>
)
