
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * Remove left padding on multiline-text
 */
export const paddedText = ([text]: TemplateStringsArray) =>
  text
    .replace(/^\n/, '')
    .replace(/\n\s+$/, '')
    .replace(/^\s+\|/gm, '')
