
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { style, cssRule, media } from 'typestyle'
import { px } from 'csx'

import Header from './components/header'
import NavBar from './components/navbar'
import HelloPage from './components/hello'
import ProjectsPage from './components/projects'
import CvPage from './components/cv'
import Background from './components/background'

import { BodyStyle, DefaultLinkStyle } from './styles'

cssRule('body', BodyStyle)
cssRule('a', DefaultLinkStyle)

const PageStyle = style(
  {
    position: 'relative',
    width: px(490),
    minHeight: px(600),
    margin: '0 auto',
    marginBottom: px(90)
  },
  media(
    { type: 'print' },
    {
      width: 'auto',
      marginBottom: 0
    }
  )
)

render(
  <BrowserRouter>
    <div>
      <Background />
      <div className={PageStyle}>
        <Header />
        <NavBar />
        <div>
          <Route exact path="/" component={HelloPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/cv" component={CvPage} />
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.body
)
