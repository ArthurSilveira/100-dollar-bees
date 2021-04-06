import React from 'react'
import { Global, css, useTheme } from '@emotion/react'

import reset from './reset'
import typography from './typography'
import layout from './layout'
import { BREAKPOINTS } from './constants'

function GlobalStyles() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        body {
          transition: background-color 0.2s ease;
          background: ${theme.colors.background};
          color: ${theme.colors.primary};
        }

        #root {
          display: flex;
          flex-flow: column wrap;
          min-height: 100vh;
          header,
          footer {
          }
          main {
            flex: 1;
            margin-bottom: 50px;
          }
        }
        a {
          color: ${theme.colors.primary};
        }
        ${reset}
        ${typography}
        ${layout}
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
