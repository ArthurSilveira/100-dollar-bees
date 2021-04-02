import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { BREAKPOINTS } from '../Styles/constants'
import Navigation from './Navigation'
import logo from '../Assets/bee-logo-dark.svg'
import { useTheme } from '@emotion/react'

function Header({ toggleTheme }) {
  const theme = useTheme()

  return (
    <PageHeader className='container'>
      <HeaderBrand to='/'>
        <img src={logo} alt='brand-logo' />
        <span className='hide-sm'>$100Bees</span>
      </HeaderBrand>
      <ThemeButton onClick={toggleTheme} className={theme.dark ? 'dark' : ''}>
        <span/>
      </ThemeButton>
      <Navigation/>
    </PageHeader>
  )
}

const ThemeButton = styled.button`
  width: 40px;
  height: 18px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, .15);
  transition: .1s;

  span {
    transition: .2s;
    display: block;
    height: 20px;
    width: 20px;
    background: ${p => p.theme.colors.accent};
    transform: translate(0, -1px);
  }

  &.dark {
    background: ${p => p.theme.colors.foreground};    
    span {
      transform: translate(20px, -1px);
    }
  }
`

const PageHeader = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    height: 180px;
  }
`

const HeaderBrand = styled(Link)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  
  img {
    height: 24px;
    @media (min-width: ${BREAKPOINTS.mobile}px) {
      height: 32px;
    }
  }

  span {
    margin-left: 16px;
    padding-top: 4px;
    font-size: var(--font-size--huge);
    font-weight: 800;

    @media (max-width: ${BREAKPOINTS.mobile}px) {
      display: none;
    }
  }
`

export default Header