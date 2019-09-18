
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { facePath, isFaceFacingCamera } from './face'
import * as matrix from './matrix'

const round = (x: number) => Math.round(x * 4) / 4

function createFaceFaces(
  stripes: number,
  marginRatio: number,
  innerMarginRatio: number
) {
  const width = 1 - marginRatio
  const stripeWidth =
    stripes === 1 ? width : (width / stripes) * (1 - innerMarginRatio)
  const innerMargin =
    stripes === 1
      ? 0
      : (width - stripeWidth * stripes) / (stripes - 1)

  const edge = width / 2

  return [...new Array(stripes)].map((_, stripe) => {
    const y1 = -edge + (stripeWidth + innerMargin) * stripe
    const y2 = y1 + stripeWidth
    return [
      [-edge, y1, 0.5],
      [edge, y1, 0.5],
      [edge, y2, 0.5],
      [-edge, y2, 0.5]
    ]
  })
}

const cubeFaceFaces = createFaceFaces(3, 0.11, 0.27)

const cubeFaces = [
  [-0.5, 0.0, 0.0],
  [0.5, 0.0, 0.0],
  [0.0, 0.5, 0.0],
  [0.0, -0.5, 0.0],
  [0.0, 0.0, -0.5],
  [1.0, 0.0, 0.5]
]
  .map(([angleX, angleY, angleZ]) => {
    const transformMatrix = [
      matrix.scale(2),
      matrix.rotate.X(Math.PI * angleX),
      matrix.rotate.Y(Math.PI * angleY),
      matrix.rotate.Z(Math.PI * angleZ)
    ].reduce(matrix.product)

    return cubeFaceFaces.map(face =>
      face.map(matrix.applyTransform([transformMatrix]))
    )
  })
  .reduce((a, b) => a.concat(b))

type LogoProps = {
  className?: string
  rotationX?: number
  rotationY?: number
}

export function Logo({
  className,
  rotationX = Math.PI / 4,
  rotationY = Math.PI / 5
}: LogoProps) {
  const cameraWidth = 190
  const cameraHeight = 170

  const cubeTransformations = matrix.applyTransform([
    matrix.scale(60),
    matrix.rotate.X(rotationX),
    matrix.rotate.Y(rotationY),
    matrix.translate([cameraWidth / 2, cameraHeight / 2, 0, 1])
  ])

  const projectedCubeFaces = cubeFaces
    .map(face =>
      face.map(cubeTransformations).map(vector => vector.map(round))
    )
    .filter(isFaceFacingCamera)

  return (
    <svg
      className={className}
      viewBox={`0 0 ${cameraWidth} ${cameraHeight}`}
    >
      <path
        fill="#7160B7"
        d={projectedCubeFaces.map(facePath).join(' ')}
      />
    </svg>
  )
}
