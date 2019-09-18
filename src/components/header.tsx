
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React, { useState, useEffect } from 'react'
import { motion, useViewportScroll, useSpring } from 'framer-motion'
import { style, media } from 'typestyle'
import { px } from 'csx'

import * as Palette from '../palette'
import { Logo } from './logo/kubeLogo'

const LogoStyle = style(
  media(
    { type: 'screen' },
    {
      height: px(65),
      fill: Palette.PURPLE
    }
  ),
  media(
    { type: 'print' },
    {
      display: 'none'
    }
  )
)

const round = (x: number) => Math.round(x * 100) / 100

export default () => {
  const BASE_ROT_X = Math.PI / 4
  const BASE_ROT_Y = Math.PI / 5

  const revolution = useSpring(0, {
    stiffness: 420,
    damping: 90,
    mass: 11
  })
  const { scrollY } = useViewportScroll()

  const [rotX, setRotX] = useState(BASE_ROT_X)
  const [rotY, setRotY] = useState(BASE_ROT_Y)

  function cubeRevolution() {
    revolution.set(revolution.get() > Math.PI ? 0 : Math.PI * 2)
  }

  useEffect(
    () =>
      revolution.onChange(r => {
        const value = BASE_ROT_Y + round(r)
        if (rotY !== value) setRotY(value)
      }),
    []
  )
  useEffect(
    () =>
      scrollY.onChange(y => {
        if (y < 0) setRotX(BASE_ROT_X + round(y) / 42)
      }),
    []
  )
  useEffect(() => {
    setTimeout(cubeRevolution, 760)
  }, [])

  return (
    <motion.header
      style={{ maxWidth: 80 }}
      onTap={cubeRevolution}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Logo rotationX={rotX} rotationY={rotY} className={LogoStyle} />
    </motion.header>
  )
}
