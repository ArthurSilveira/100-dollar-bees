import { css } from '@emotion/react'
import { FONT_SCALE, BREAKPOINTS } from './constants'

// http://text-crop.eightshapes.com/?typeface-selection=google-font&typeface=Assistant&custom-typeface-name=Helvetica&custom-typeface-url=&custom-typeface-weight=400&custom-typeface-style=normal&weight-and-style=regular&size=14&line-height=1.3&top-crop=2.5&bottom-crop=3.2
export const textCrop = (lineHeight = 1, topAdjustment = 0, bottomAdjustment = 0) => {
  // Configuration for ideal cropping for Assistant 14px regular 1 line height
  const topCrop = 1,
    bottomCrop = 1,
    cropFontSize = 14,
    cropLineHeight = 1

  // Apply values to calculate em-based margins that work with any font size
  const dynamicTopCrop =
    Math.max(topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2), 0) / cropFontSize
  const dynamicBottomCrop =
    Math.max(bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2), 0) / cropFontSize

  // textCrop output
  return css`
    line-height: ${lineHeight};

    &:before,
    &:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    &:before {
      margin-bottom: calc(-${dynamicTopCrop}em + ${topAdjustment}px);
    }

    &::after {
      margin-top: calc(-${dynamicBottomCrop}em + ${bottomAdjustment}px);
    }
  `
}

const typography = css`

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

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
    color: var(--colors-neutral);

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      font-size: ${FONT_SCALE.body.bigger};
    }
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
    font-weight: 700;
  }

  h4 {
    font-size: ${FONT_SCALE.headings.h4};
    font-weight: 700;
  }
`

export default typography
