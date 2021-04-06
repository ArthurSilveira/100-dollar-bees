import { css } from '@emotion/react'
import { FONT_SCALE, BREAKPOINTS } from './constants'

const typography = css`
  // @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,300&display=swap');

  html {
    font-size: 10px; //base 10 is better :)
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Font globals */
    --font-size--tiny: ${FONT_SCALE.body.tiny};
    --font-size--small: ${FONT_SCALE.body.small};
    --font-size--base: ${FONT_SCALE.body.base};
    --font-size--big: ${FONT_SCALE.body.big};
    --font-size--bigger: ${FONT_SCALE.body.bigger};
    --font-size--huge: ${FONT_SCALE.body.huge};

    --font-weight--regular: 400;
    --font-weight--strong: 600;
    --font-weight--stronger: 700;
    --font-weight--fat: 800;
  }

  body {
    font-size: ${FONT_SCALE.body.base};

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      font-size: ${FONT_SCALE.body.bigger};
    }
  }

  p {
    line-height: 1.8;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1 {
    font-size: ${FONT_SCALE.headings.h2};
    font-weight: 800;

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      font-size: ${FONT_SCALE.headings.h1};
    }
  }

  h2 {
    font-size: ${FONT_SCALE.headings.h3};
    font-weight: 600;

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      font-size: ${FONT_SCALE.headings.h2};
    }
  }

  h3 {
    font-size: ${FONT_SCALE.headings.h3};
    font-weight: 500;
  }

  h4 {
    font-size: ${FONT_SCALE.headings.h4};
    font-weight: 500;
  }
`

export default typography
