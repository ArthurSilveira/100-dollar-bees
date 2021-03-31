export const SPACE = {
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '64px',
  none: '0',
  auto: 'auto'
}

/*
 * We use 10px as a base font defined in the html
 * which makes it easy to use rem sizes
 */
export const FONT_SCALE = {
  body: {
    tiny: '1.1rem', // 11px
    small: '1.2rem', // 12px
    base: '1.4rem', // 14px
    big: '1.6rem', // 16px
    bigger: '1.8rem', // 18px
    huge: '2.4rem' //24px
  },

  headings: {
    hero: '4.2rem', // 42px
    h1: '3.2rem', // 32px
    h2: '2.4rem', // 24px
    h3: '2.0rem', // 20px
    h4: '1.8rem' // 18px
  }
}

export const BREAKPOINTS = {
  mobile: 720,
  tablet: 960,
  desktop: 1440
}