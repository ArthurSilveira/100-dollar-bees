import React from 'react'
import { Global, css } from '@emotion/react'

import reset from './reset'
import typography from './typography'
import { BREAKPOINTS } from './constants'

function GlobalStyles() {

  return (
    <Global
      styles={css`
        ${reset}
        ${typography}
        ${container}
      `}
    />
  )
}

const container = css`
  .container {
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    max-width: 1170px;

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      width: 100%;
    }

  }
`

export default GlobalStyles
