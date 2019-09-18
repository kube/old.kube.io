
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { NavLink } from 'react-router-dom'
import { style, media } from 'typestyle'
import { px, rotate } from 'csx'

import * as PALETTE from '../palette'

const NavStyle = style(
  {
    position: 'fixed',
    display: 'inline-block',
    transform: rotate('90deg'),
    transformOrigin: '0 51%',
    marginLeft: px(-61),
    marginTop: px(13),
    $nest: {
      a: {
        textDecoration: 'none',
        opacity: 0.6,
        color: PALETTE.MEDIUM_GREY,
        $nest: {
          '&.active': {
            opacity: 1.0,
            color: PALETTE.PURPLE
          },
          '&:hover': {
            opacity: 1.0,
            color: PALETTE.MEDIUM_GREY
          }
        }
      },
      ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        $nest: {
          li: {
            fontSize: px(22),
            fontWeight: 700,
            fontFamily: PALETTE.FONTS.SANS,
            textTransform: 'uppercase',
            display: 'inline-block',
            margin: 0,
            padding: '4px 11px'
          }
        }
      }
    }
  },
  media({ type: 'print' }, { display: 'none' }),
  media({ maxHeight: 400 }, { top: 0, marginTop: 0 })
)

export default () => (
  <nav className={NavStyle}>
    <ul>
      <li className="active">
        <NavLink exact to="/" activeClassName="active">
          Hello
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/cv" activeClassName="active">
          CV
        </NavLink>
      </li>
    </ul>
  </nav>
)
