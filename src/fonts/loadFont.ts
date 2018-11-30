
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { fontFace } from 'typestyle'
import { url } from 'csx'

const FONT_STYLES = {
  normal: 'Regular',
  italic: 'Italic'
}

const FONT_WEIGHTS = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black'
}

type FontStyle = keyof typeof FONT_STYLES
type FontWeight = keyof typeof FONT_WEIGHTS

type Font = {
  name: string
  styles: FontStyle[]
  italicSuffix?: string
  extension: 'otf' | 'ttf'
  weights: FontWeight[]
}

function getStyleSuffix(font: Font, fontStyle: FontStyle) {
  return fontStyle === 'italic' && font.italicSuffix
    ? font.italicSuffix
    : FONT_STYLES[fontStyle]
}

/**
 * Helper to load fonts.
 * Reference fonts in index.ts
 */
export function loadFont(font: Font) {
  font.styles.forEach(fontStyle =>
    font.weights.forEach(fontWeight => {
      const suffix =
        fontWeight === 400
          ? getStyleSuffix(font, fontStyle)
          : fontStyle === 'normal'
          ? FONT_WEIGHTS[fontWeight]
          : FONT_WEIGHTS[fontWeight] + getStyleSuffix(font, fontStyle)

      fontFace({
        fontFamily: font.name,
        fontWeight: fontWeight as number,
        fontStyle,
        src: url(
          require(`./${font.name}/${font.name}-${suffix}.${
            font.extension
          }`)
        )
      })
    })
  )
  return font.name
}
