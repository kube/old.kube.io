
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
import { px } from 'csx'
import * as Palette from '../palette'
import Project from './project'

import { PROJECTS } from '../data/projects'

const ProjectsPageStyle = style({
  margin: '0 auto',
  color: Palette.SUNBURST_GREY,
  $nest: {
    h1: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
      fontWeight: 'bolder',
      fontSize: px(74),
      margin: 0,
      padding: 0,
      marginTop: px(16)
    },
    h2: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
      fontWeight: 'normal',
      fontSize: px(40),
      margin: 0,
      padding: 0,
      marginBottom: px(18)
    }
  }
})

export default () => (
  <div className={ProjectsPageStyle}>
    <section>
      <h1>Projects.</h1>
      <h2>Some Code Stuff.</h2>
      {PROJECTS.map(project => <Project project={project} />)}
    </section>
  </div>
)
