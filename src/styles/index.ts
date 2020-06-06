
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { px } from 'csx'
import { types, media } from 'typestyle'

import * as Palette from '../palette'

export function buildBackgroundSvgString (fill: string) {
  return encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'
  width='269.44'
  height='155.56'
  viewBox='0 0 269.44 155.56'>
  <path fill="${fill}" d="M177.83,152.45H95.2L97.68,148.16H180.31Z M185.6,139H102.97L105.45,134.71H188.08Z M193.37,125.55H110.74L113.22,121.25H195.85Z M201.13,112.09H118.5L120.98,107.8H203.61Z M208.9,98.64H126.27L128.75,94.35H211.38Z M216.67,85.19H134.04L136.52,80.89H219.15Z M131.13,77.78L89.81,149.34L87.34,145.05L128.65,73.49Z M123.36,64.33L82.05,135.89L79.57,131.59L120.88,60.04Z M115.59,50.88L74.28,122.43L71.8,118.14L113.12,46.58Z M107.83,37.42L66.51,108.98L64.03,104.69L105.35,33.13Z M100.06,23.97L58.75,95.53L56.27,91.23L97.58,19.68Z M92.29,10.52L50.98,82.08L48.5,77.78L89.81,6.22Z M177.83,3.11L219.15,74.67H214.19L172.88,3.11Z M162.3,3.11L203.61,74.67H198.66L157.34,3.11Z M146.76,3.11L188.08,74.67H183.12L141.81,3.11Z M131.23,3.11L172.54,74.67H167.59L126.27,3.11Z M115.7,3.11L157.01,74.67H152.05L110.74,3.11Z M100.16,3.11L141.48,74.67H136.52L95.2,3.11Z M43.11,74.67H-39.52L-37.04,70.38H45.59Z M50.88,61.22H-31.75L-29.27,56.92H53.36Z M58.65,47.76H-23.98L-21.51,43.47H61.12Z M66.41,34.31H-16.22L-13.74,30.02H68.89Z M74.18,20.86H-8.45L-5.97,16.56H76.66Z M81.95,7.4H-0.68L1.8,3.11H84.43Z M-3.59,0L-44.91,71.56L-47.39,67.27L-6.07,-4.29Z M-11.36,-13.45L-52.67,58.11L-55.15,53.81L-13.84,-17.75Z M-19.13,-26.91L-60.44,44.65L-62.92,40.36L-21.61,-31.2Z M-26.89,-40.36L-68.21,31.2L-70.69,26.91L-29.37,-44.65Z M-34.66,-53.81L-75.98,17.75L-78.46,13.45L-37.14,-58.11Z M-42.43,-67.27L-83.74,4.29L-86.22,0L-44.91,-71.56Z M43.11,-74.67L84.43,-3.11H79.47L38.15,-74.67Z M27.58,-74.67L68.89,-3.11H63.93L22.62,-74.67Z M12.04,-74.67L53.36,-3.11H48.4L7.08,-74.67Z M-3.49,-74.67L37.82,-3.11H32.86L-8.45,-74.67Z M-19.03,-74.67L22.29,-3.11H17.33L-23.98,-74.67Z M-34.56,-74.67L6.75,-3.11H1.8L-39.52,-74.67Z M312.55,230.23H229.93L232.4,225.94H315.03Z M320.32,216.78H237.69L240.17,212.49H322.8Z M328.09,203.33H245.46L247.94,199.03H330.57Z M335.86,189.87H253.23L255.71,185.58H338.34Z M343.62,176.42H260.99L263.47,172.13H346.1Z M351.39,162.97H268.76L271.24,158.67H353.87Z M265.85,155.56L224.54,227.12L222.06,222.83L263.37,151.27Z M258.08,142.11L216.77,213.67L214.29,209.38L255.61,137.82Z M250.32,128.66L209,200.22L206.52,195.92L247.84,124.36Z M242.55,115.2L201.23,186.76L198.76,182.47L240.07,110.91Z M234.78,101.75L193.47,173.31L190.99,169.02L232.3,97.46Z M227.02,88.3L185.7,159.86L183.22,155.56L224.54,84Z M312.55,80.89L353.87,152.45H348.91L307.6,80.89Z M297.02,80.89L338.34,152.45H333.38L292.06,80.89Z M281.49,80.89L322.8,152.45H317.84L276.53,80.89Z M265.95,80.89L307.27,152.45H302.31L260.99,80.89Z M250.42,80.89L291.73,152.45H286.77L245.46,80.89Z M234.88,80.89L276.2,152.45H271.24L229.93,80.89Z M312.55,74.67H229.93L232.4,70.38H315.03Z M320.32,61.22H237.69L240.17,56.92H322.8Z M328.09,47.76H245.46L247.94,43.47H330.57Z M335.86,34.31H253.23L255.71,30.02H338.34Z M343.62,20.86H260.99L263.47,16.56H346.1Z M351.39,7.4H268.76L271.24,3.11H353.87Z M265.85,0L224.54,71.56L222.06,67.27L263.37,-4.29Z M258.08,-13.45L216.77,58.11L214.29,53.81L255.61,-17.75Z M250.32,-26.91L209,44.65L206.52,40.36L247.84,-31.2Z M242.55,-40.36L201.23,31.2L198.76,26.91L240.07,-44.65Z M234.78,-53.81L193.47,17.75L190.99,13.45L232.3,-58.11Z M227.02,-67.27L185.7,4.29L183.22,0L224.54,-71.56Z M312.55,-74.67L353.87,-3.11H348.91L307.6,-74.67Z M297.02,-74.67L338.34,-3.11H333.38L292.06,-74.67Z M281.49,-74.67L322.8,-3.11H317.84L276.53,-74.67Z M265.95,-74.67L307.27,-3.11H302.31L260.99,-74.67Z M250.42,-74.67L291.73,-3.11H286.77L245.46,-74.67Z M234.88,-74.67L276.2,-3.11H271.24L229.93,-74.67Z M177.83,-3.11H95.2L97.68,-7.4H180.31Z M185.6,-16.56H102.97L105.45,-20.86H188.08Z M193.37,-30.02H110.74L113.22,-34.31H195.85Z M201.13,-43.47H118.5L120.98,-47.76H203.61Z M208.9,-56.92H126.27L128.75,-61.22H211.38Z M216.67,-70.38H134.04L136.52,-74.67H219.15Z M131.13,-77.78L89.81,-6.22L87.34,-10.52L128.65,-82.08Z M123.36,-91.23L82.05,-19.68L79.57,-23.97L120.88,-95.53Z M115.59,-104.69L74.28,-33.13L71.8,-37.42L113.12,-108.98Z M107.83,-118.14L66.51,-46.58L64.03,-50.88L105.35,-122.43Z M100.06,-131.59L58.75,-60.04L56.27,-64.33L97.58,-135.89Z M92.29,-145.05L50.98,-73.49L48.5,-77.78L89.81,-149.34Z M177.83,-152.45L219.15,-80.89H214.19L172.88,-152.45Z M162.3,-152.45L203.61,-80.89H198.66L157.34,-152.45Z M146.76,-152.45L188.08,-80.89H183.12L141.81,-152.45Z M131.23,-152.45L172.54,-80.89H167.59L126.27,-152.45Z M115.7,-152.45L157.01,-80.89H152.05L110.74,-152.45Z M100.16,-152.45L141.48,-80.89H136.52L95.2,-152.45Z M43.11,230.23H-39.52L-37.04,225.94H45.59Z M50.88,216.78H-31.75L-29.27,212.49H53.36Z M58.65,203.33H-23.98L-21.51,199.03H61.12Z M66.41,189.87H-16.22L-13.74,185.58H68.89Z M74.18,176.42H-8.45L-5.97,172.13H76.66Z M81.95,162.97H-0.68L1.8,158.67H84.43Z M-3.59,155.56L-44.91,227.12L-47.39,222.83L-6.07,151.27Z M-11.36,142.11L-52.67,213.67L-55.15,209.38L-13.84,137.82Z M-19.13,128.66L-60.44,200.22L-62.92,195.92L-21.61,124.36Z M-26.89,115.2L-68.21,186.76L-70.69,182.47L-29.37,110.91Z M-34.66,101.75L-75.98,173.31L-78.46,169.02L-37.14,97.46Z M-42.43,88.3L-83.74,159.86L-86.22,155.56L-44.91,84Z M43.11,80.89L84.43,152.45H79.47L38.15,80.89Z M27.58,80.89L68.89,152.45H63.93L22.62,80.89Z M12.04,80.89L53.36,152.45H48.4L7.08,80.89Z M-3.49,80.89L37.82,152.45H32.86L-8.45,80.89Z M-19.03,80.89L22.29,152.45H17.33L-23.98,80.89Z M-34.56,80.89L6.75,152.45H1.8L-39.52,80.89Z M177.83,308.02H95.2L97.68,303.72H180.31Z M185.6,294.56H102.97L105.45,290.27H188.08Z M193.37,281.11H110.74L113.22,276.82H195.85Z M201.13,267.66H118.5L120.98,263.36H203.61Z M208.9,254.2H126.27L128.75,249.91H211.38Z M216.67,240.75H134.04L136.52,236.46H219.15Z M131.13,233.35L89.81,304.9L87.34,300.61L128.65,229.05Z M123.36,219.89L82.05,291.45L79.57,287.16L120.88,215.6Z M115.59,206.44L74.28,278L71.8,273.7L113.12,202.15Z M107.83,192.99L66.51,264.55L64.03,260.25L105.35,188.69Z M100.06,179.53L58.75,251.09L56.27,246.8L97.58,175.24Z M92.29,166.08L50.98,237.64L48.5,233.35L89.81,161.79Z M177.83,158.67L219.15,230.23H214.19L172.88,158.67Z M162.3,158.67L203.61,230.23H198.66L157.34,158.67Z M146.76,158.67L188.08,230.23H183.12L141.81,158.67Z M131.23,158.67L172.54,230.23H167.59L126.27,158.67Z M115.7,158.67L157.01,230.23H152.05L110.74,158.67Z M100.16,158.67L141.48,230.23H136.52L95.2,158.67Z"></path>
</svg>`)
}

export const BodyStyle: types.NestedCSSProperties = {
  margin: px(42),
  marginTop: px(110),
  fontFamily: Palette.FONTS.TEXT,
  color: Palette.DARK_GREY,
  backgroundColor: Palette.LIGHT_GREY,

  backgroundImage: `url("data:image/svg+xml,${buildBackgroundSvgString('#FFFFFF40')}")`,
  backgroundRepeat: 'repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center center',

  // Remove margins on print
  ...media(
    { type: 'print' },
    {
      margin: 0,
      marginTop: 0
    }
  )
}

export const DefaultLinkStyle: types.NestedCSSProperties = {
  color: Palette.LightLink.normal,
  textDecoration: 'none',
  transition: 'color 0.3s',
  $nest: {
    '&:hover': {
      color: Palette.LightLink.hover
    },
    '&:active': {
      color: Palette.LightLink.active
    }
  }
}

export const ListStyleMixin: types.NestedCSSProperties = {
  margin: 0,
  padding: 0,
  $nest: {
    li: {
      padding: 0,
      margin: '3 0',
      listStyle: 'none',
      fontSize: px(18)
    }
  }
}