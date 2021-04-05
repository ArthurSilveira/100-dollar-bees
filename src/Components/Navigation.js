import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { BREAKPOINTS } from '../Styles/constants'

function Navigation(props) {
  return (
    <StyledNav>
      <NavLink to='/about' activeClassName='selected'>
        About
      </NavLink>
      <button>Login</button>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 4px;

  a {
    margin-left: 16px;
    font-size: var(--font-size--base);
    font-weight: 700;
    color: ${p => p.theme.colors.primary};
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    &.selected {
      color: ${p => p.theme.colors.accent};
    }

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      margin-left: 64px;
      font-size: var(--font-size--bigger);
      font-weight: 800;
    }
  }

  button {
    background: ${p => (p.theme.dark ? p.theme.colors.accent : p.theme.colors.primary)};
    margin-left: 24px;
    padding: var(--space-inset-squish--xs);
    font-size: var(--font-size--base);
    font-weight: 600;
    min-width: 56.7px;
    color: ${p => (p.theme.dark ? p.theme.colors.contrast : p.theme.colors.accent)};

    &:hover {
      opacity: 0.6;
    }

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      margin-left: 64px;
      font-size: var(--font-size--big);
      padding: var(--space-inset-squish--s);
      font-weight: 700;
      min-width: 71.15px;
    }
  }
`

export default Navigation
