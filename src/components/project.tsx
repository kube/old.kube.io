
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
import { CodeRenderer } from './CodeRenderer'

type Props = {
  project: Project
}

const ProjectItemStyle = style({
  margin: 0,
  marginBottom: px(94),
  textAlign: 'justify',
  fontWeight: 300,
  fontSize: px(16),
  lineHeight: px(21),

  $nest: {
    strong: {
      fontWeight: 500
    },
    p: {
      marginBottom: px(16)
    },
    h3: {
      fontFamily: Palette.FONTS.SANS,
      fontWeight: 600,
      fontSize: px(24),
      textTransform: 'uppercase',
      margin: 0,
      padding: 0,
      marginTop: px(54),
      paddingBottom: px(22),
      opacity: 0.7,
      color: Palette.MOONBURST_GREY,
    },
    pre: {
      padding: '13px 18px',
      backgroundColor: rgba(255, 255, 255, 0.04).toString(),
      backdropFilter: `blur(3px)`,
      '-webkit-backdrop-filter': 'blur(3px)',
      borderBottomWidth: px(2),
      borderRadius: px(7)
    },
    code: {
      fontSize: px(15),
      fontWeight: 400,
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
      <Markdown
        source={project.text}
        renderers={{
          code: CodeRenderer
        }}
      />
    </div>

    {project.github && (
      <a href={project.github} target="_blank">
        <Icons.GitHub
          style={{ fill: Palette.SUNBURST_GREY, width: px(31) }}
        />
      </a>
    )}
  </div>
)
