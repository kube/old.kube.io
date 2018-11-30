
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
import { px, percent, quote } from 'csx'

import * as PALETTE from '../palette'

import { cv } from '../data/cv'
import List from './list'
import Timeline from './timeline'

const CvPageStyle = style(
  {
    margin: '0 auto',
    marginBottom: px(130),
    $nest: {
      h1: {
        fontFamily: PALETTE.FONTS.SANS,
        fontWeight: 700,
        fontSize: px(74),
        margin: 0,
        padding: 0,
        marginTop: px(27),
        lineHeight: px(67),
        ...media({ type: 'print' }, { display: 'none' })
      },
      h3: {
        fontSize: px(25),
        fontFamily: PALETTE.FONTS.SANS,
        textTransform: 'uppercase',
        marginTop: px(54),
        marginBottom: px(13)
      }
    }
  },
  media(
    { type: 'print' },
    {
      $nest: {
        h3: {
          fontSize: px(22),
          marginBottom: px(9),
          marginTop: px(31)
        }
      }
    }
  )
)

const IntroStyle = style(
  {
    marginTop: px(36),
    $nest: {
      h2: {
        fontFamily: PALETTE.FONTS.SANS,
        fontSize: px(34),
        margin: 0,
        padding: 0
      },
      '.job': {
        fontFamily: PALETTE.FONTS.SANS,
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
  },
  media(
    { type: 'print' },
    {
      marginLeft: percent(22),
      paddingLeft: px(38)
    }
  )
)

const InfoColumnsStyle = style(
  media(
    { type: 'screen' },
    {
      $nest: {
        '.column': {
          float: 'left',
          width: percent(33)
        }
      }
    }
  ),
  media(
    { type: 'print' },
    {
      float: 'left',
      paddingTop: px(7),
      textAlign: 'right',
      width: percent(22),
      marginRight: px(38)
    }
  )
)

const PrincipalColumnStyle = style(
  media(
    { type: 'screen' },
    {
      clear: 'both',
      paddingTop: px(1)
    }
  ),
  media(
    { type: 'print' },
    {
      width: percent(65),
      float: 'left'
    }
  )
)

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

      <div className={InfoColumnsStyle}>
        <div className="column">
          <h3>Code</h3>
          <List items={cv.languages} />
        </div>

        <div className="column">
          <h3>Stack</h3>
          <List items={cv.frameworks} />
        </div>

        <div className="column">
          <h3>Tools</h3>
          <List items={cv.tools} />
        </div>
      </div>

      <div className={PrincipalColumnStyle}>
        <h3>Cursus</h3>
        <Timeline timeline={cv.cursus} />

        <h3>Work Experience</h3>
        <Timeline timeline={cv.work} />
      </div>
    </section>
  </div>
)
