
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
import { style } from 'typestyle'
import { px, rotate } from 'csx'

import * as Palette from '../palette'

const NavStyle = style({
  position: 'fixed',
  display: 'inline-block',
  transform: rotate('90deg'),
  transformOrigin: '0 50%',
  marginLeft: px(-61),
  marginTop: px(13),
  $nest: {
    a: {
      textDecoration: 'none',
      opacity: 0.6,
      color: Palette.MEDIUM_GREY,
      $nest: {
        '&.active': {
          opacity: 1.0,
          color: Palette.PURPLE
        },
        '&:hover': {
          opacity: 1.0,
          color: Palette.MEDIUM_GREY
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
          fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
          textTransform: 'uppercase',
          display: 'inline-block',
          margin: 0,
          padding: '4px 11px'
        }
      }
    }
  }
})

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
