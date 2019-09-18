
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Vector, subtract, crossProduct, dotProduct } from './vector'

export type Face = Vector[]

export const normal = ([a, b, c, d]: Face) =>
  crossProduct(subtract(c, a), subtract(d, b))

export const isFaceFacingCamera = (shape: Face) => {
  const visionVector = [0, 0, -1]
  return dotProduct(normal(shape), visionVector) > 0
}

export const facePath = (face: Face) =>
  face
    .map(([x, y], i) =>
      i === 0
        ? `M${x},${y}`
        : x === face[i - 1][0]
        ? `V${y}`
        : y === face[i - 1][1]
        ? `H${x}`
        : `L${x},${y}`
    )
    .concat('Z')
    .join('')
