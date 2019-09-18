
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { Helmet } from 'react-helmet'
import { style, media } from 'typestyle'
import { px } from 'csx'
import Project from './project'

import * as PALETTE from '../palette'
import { PROJECTS } from '../data/projects'
import { buildBackgroundSvgString } from '../styles'

const ProjectsPageStyle = style(
  {
    margin: '0 auto',
    color: PALETTE.SUNBURST_GREY,
    $nest: {
      h1: {
        fontFamily: PALETTE.FONTS.SANS,
        fontWeight: 'bolder',
        fontSize: px(74),
        margin: 0,
        padding: 0,
        marginTop: px(16)
      },
      h2: {
        fontFamily: PALETTE.FONTS.SANS,
        fontWeight: 'normal',
        fontSize: px(40),
        margin: 0,
        padding: 0,
        marginBottom: px(18)
      }
    }
  },
  media(
    { maxWidth: 400 },
    {
      $nest: {
        h1: {
          fontSize: px(65),
        },
        h2: {
          fontSize: px(38),
          lineHeight: px(38)
        }
      }
    }
  )
)

export default () => (
  <>
    <Helmet>
      <style type="text/css">
        {`body {
          background-color: ${PALETTE.DARK_GREY};
          background-image: url("data:image/svg+xml,${buildBackgroundSvgString(
            '#00000036'
          )}");
        }`}
      </style>
    </Helmet>
    <div className={ProjectsPageStyle}>
      <section>
        <h1>Projects.</h1>
        <h2>Some Code Stuff.</h2>
        {PROJECTS.map(project => (
          <Project project={project} />
        ))}
      </section>
    </div>
  </>
)
