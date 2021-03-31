import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { BREAKPOINTS } from '../Styles/constants'

function Navigation(props) {
  return (
    <StyledNav>
      <NavLink to='/about' activeClassName='selected'>About</NavLink>
      <NavLink to='/contact' activeClassName='selected'>Contact</NavLink>
      <a href='https://opensea.io/collection/100-bees-hexel-collection' target='blank'>Opensea</a>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
  padding-top: 4px;

  a {
    margin-left: 16px;
    font-size: var(--font-size--base);
    font-weight: 700;
    color: black;
    text-decoration: none;

    &:hover {
      opacity: .6;
    }

    &.selected {
      color: ${p => p.theme.colors.primary};
    }

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      margin-left: 64px;
      font-size: var(--font-size--bigger);
      font-weight: 800;
    }
  }
`

export default Navigation