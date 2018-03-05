
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
import { px, percent, quote } from 'csx'

import { cv } from '../data/cv'
import List from './list'
import Timeline from './timeline'
import * as Palette from '../palette'

const CvPageStyle = style({
  margin: '0 auto',
  marginBottom: px(130),
  $nest: {
    h1: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
      fontWeight: 'bolder',
      fontSize: px(74),
      margin: 0,
      padding: 0,
      marginTop: px(27),
      lineHeight: px(67)
    },
    h3: {
      fontSize: px(25),
      fontWeight: 200,
      fontFamily: Palette.FONTS.SANS,
      textTransform: 'uppercase',
      marginTop: px(54),
      marginBottom: px(13)
    }
  }
})

const IntroStyle = style({
  marginTop: px(36),
  $nest: {
    h2: {
      fontFamily: Palette.FONTS.SANS,
      fontSize: px(34),
      margin: 0,
      padding: 0
    },
    '.job': {
      fontFamily: Palette.FONTS.SANS,
      fontSize: px(24),
      margin: 0,
      padding: 0
    },
    '.address': {
      margin: '9px 0',
      $nest: {
        '.city': {
          fontSize: px(18),
          fontWeight: 500
        },
        '.country': {
          $nest: {
            '&::before': {
              content: quote(', ')
            }
          }
        }
      }
    },
    '.email': {
      fontSize: px(17),
      $nest: {
        '.user': {},
        '.domain': {
          $nest: {
            '&::before': {
              content: quote('@')
            }
          }
        }
      }
    }
  }
})

export default () => (
  <div className={CvPageStyle}>
    <section>
      <h1>Curiculum Vitae.</h1>

      <div className={IntroStyle}>
        <h2>
          {cv.firstName} {cv.lastName}.
        </h2>
        <div className="job">{cv.job}.</div>

        <div className="address">
          <span className="city">{cv.address.city}</span>
          <span className="country">{cv.address.country}</span>
        </div>

        <div className="email">
          <span className="user">{cv.mail.user}</span>
          <span className="domain">{cv.mail.domain}</span>
        </div>

        <div className="phone">
          {cv.phone.replace(/[0-9][0-9]/g, _ => _ + ' ')}
        </div>
      </div>

      <div style={{ float: 'left', width: percent(33) }}>
        <h3>Code</h3>
        <List items={cv.languages} />
      </div>

      <div style={{ float: 'left', width: percent(33) }}>
        <h3>Stack</h3>
        <List items={cv.frameworks} />
      </div>

      <div style={{ float: 'left', width: percent(33) }}>
        <h3>Tools</h3>
        <List items={cv.tools} />
      </div>

      <div style={{ clear: 'both' }} />

      <h3>Cursus</h3>
      <Timeline timeline={cv.cursus} />

      <h3>Work Experience</h3>
      <Timeline timeline={cv.work} />
    </section>
  </div>
)
