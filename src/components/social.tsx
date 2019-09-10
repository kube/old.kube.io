
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import * as Icons from './icons'
import { style } from 'typestyle'
import { px, scale } from 'csx'

import * as Palette from '../palette'

const FooterIconStyle = (color: string) =>
  style({
    margin: px(7),
    maxWidth: px(31),
    maxHeight: px(31),
    fill: Palette.DARK_GREY,
    transition: 'transform 0.3s',
    $nest: {
      '&:hover': {
        transform: scale(1.15),
        fill: color
      },
      '&:active': {
        transform: scale(0.94),
        fill: Palette.PURPLE
      }
    }
  })

type SocialLinkProps = {
  link: string
  icon: typeof Icons.GitHub
  color: string
}

const SocialLink = (props: SocialLinkProps) => (
  <a href={props.link} target="_blank">
    <props.icon className={FooterIconStyle(props.color)} />
  </a>
)

export default () => (
  <div>
    <SocialLink
      link="https://github.com/kube"
      icon={Icons.GitHub}
      color={Palette.GITHUB}
    />
    <SocialLink
      link="https://observablehq.com/@kube"
      icon={Icons.Observable}
      color={Palette.OBSERVABLE}
    />
    <SocialLink
      link="https://linkedin.com/in/cfeijoo"
      icon={Icons.LinkedIn}
      color={Palette.LINKEDIN}
    />
    <SocialLink
      link="https://stackoverflow.com/users/1914206/kube?tab=profile"
      icon={Icons.StackOverflow}
      color={Palette.STACKOVERFLOW}
    />
    <SocialLink
      link="https://twitter.com/KubeKhrm"
      icon={Icons.Twitter}
      color={Palette.TWITTER}
    />
  </div>
)
