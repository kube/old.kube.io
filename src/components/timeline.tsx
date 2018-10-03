
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { style, classes, media } from 'typestyle'
import { px, rgba, quote } from 'csx'

import * as Palette from '../palette'
import Markdown from 'react-markdown'

import { ListStyleMixin } from '../styles'

type TimelineItem = {
  date: string | number
  title: string
  place?: string
  subtitle: string
  url?: string
  description?: string
  stack?: string[]
}

type TimelineProps = {
  timeline: TimelineItem[]
  style?: React.CSSProperties
  className?: string
}

const TimelineStyle = style(
  ListStyleMixin,
  {
    $nest: {
      li: {
        clear: 'both',
        display: 'block',
        margin: 0,
        padding: 0,
        marginTop: px(13),
        marginBottom: px(31),
        $nest: {
          '.date': {
            float: 'left',
            textAlign: 'right',
            paddingTop: px(6),
            marginRight: px(11),
            width: px(79),
            fontSize: px(16),
            fontWeight: 400,
            fontFamily: Palette.FONTS.TEXT,
            color: rgba(0, 0, 0, 0.45).toString()
          },
          '.content': {
            width: 'auto',
            overflow: 'hidden',
            $nest: {
              '.title': {
                fontSize: px(21),
                fontWeight: 700,
                fontFamily: Palette.FONTS.SANS
              },
              '.place': {
                fontSize: px(18),
                fontFamily: Palette.FONTS.TEXT,
                $nest: {
                  '&::before': {
                    content: quote(' ')
                  }
                }
              },
              '.subtitle': {
                display: 'block',
                marginTop: px(2),
                fontStyle: 'italic',
                fontFamily: Palette.FONTS.SERIF,
                fontSize: px(18)
              },
              '.description': {
                fontSize: px(14),
                color: '#676767',
                $nest: {
                  p: {
                    margin: '7px 0'
                  }
                }
              },
              '.stack-list': {
                padding: 0,
                margin: 0,
                $nest: {
                  li: {
                    border: '1px solid #CCCCCC',
                    color: '#797979',
                    borderRadius: px(3),
                    fontSize: px(9),
                    display: 'inline-block',
                    margin: px(2),
                    padding: '2px 3px',
                    textTransform: 'uppercase'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  media(
    { type: 'print' },
    {
      $nest: {
        li: {
          pageBreakInside: 'avoid',
          marginTop: px(13),
          marginBottom: px(22)
        }
      }
    }
  )
)

export default (props: TimelineProps) => (
  <ul
    style={props.style}
    className={classes(TimelineStyle, props.className)}
  >
    {props.timeline.map(line => (
      <li>
        <div className="date">{line.date}</div>
        <div className="content">
          <a href={line.url} target="_blank">
            <span className="title">{line.title}</span>
          </a>
          {line.place && <span className="place">{line.place}</span>}
          <span className="subtitle">{line.subtitle}</span>

          {line.description ? (
            <div className="description">
              <Markdown source={line.description} />
            </div>
          ) : null}

          {line.stack ? (
            <ul className="stack-list">
              {line.stack.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </li>
    ))}
  </ul>
)
