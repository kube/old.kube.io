
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import Markdown from 'react-markdown'
import { Project } from '../data/projects'
import { style } from 'typestyle'
import { px, percent, rgba } from 'csx'

import * as Palette from '../palette'
import * as Icons from './icons'

type Props = {
  project: Project
}

const ProjectItemStyle = style({
  margin: 0,
  marginBottom: px(94),
  textAlign: 'justify',
  fontWeight: 400,
  fontSize: px(16),
  lineHeight: px(21),

  $nest: {
    strong: {
      fontWeight: 500
    },
    p: {
      marginBottom: px(20)
    },
    h3: {
      fontFamily: Palette.FONTS.SANS,
      fontWeight: 600,
      fontSize: px(24),
      textTransform: 'uppercase',
      margin: 0,
      padding: 0,
      marginTop: px(54),
      paddingBottom: px(7),
      marginBottom: px(13),
      opacity: 0.7,
      color: Palette.SUNBURST_GREY,
      borderBottom: `1px dotted rgba(255, 255, 255, 0.3)`
    },
    pre: {
      padding: '11px 13px',
      backgroundColor: rgba(0, 0, 0, 0.2).toString(),
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: px(3)
    },
    code: {
      fontSize: px(15),
      fontWeight: 300,
      color: Palette.LightCode,
      fontFamily: Palette.FONTS.CODE
    },
    a: {
      color: Palette.DarkLink.normal,
      $nest: {
        '&:hover': {
          color: Palette.DarkLink.hover
        },
        '&:active': {
          color: Palette.DarkLink.active
        }
      }
    }
  }
})

const YoutubeFrameStyle = style({
  width: percent(100),
  height: px(310),
  border: `2px solid ${Palette.DARK_GREY}`,
  boxShadow: '0 4px 25px black'
})

export default ({ project }: Props) => (
  <div className={ProjectItemStyle}>
    <h3>{project.title}</h3>
    {project.subtitle && <blockquote>{project.subtitle}</blockquote>}

    {project.picture && (
      <img
        src={project.picture}
        style={{ borderRadius: px(4), maxWidth: '100%' }}
      />
    )}

    {project.youtube && (
      <iframe
        className={YoutubeFrameStyle}
        src={project.youtube}
        allowFullScreen
      />
    )}

    <div>
      <Markdown source={project.text} />
    </div>

    {project.github && (
      <a href={project.github} target="_blank">
        <Icons.GitHub
          style={{ fill: Palette.SUNBURST_GREY, width: px(35) }}
        />
      </a>
    )}
  </div>
)
