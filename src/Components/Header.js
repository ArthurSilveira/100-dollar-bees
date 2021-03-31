import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { BREAKPOINTS } from '../Styles/constants'
import Navigation from './Navigation'
import logo from '../Assets/bee-logo-dark.svg'
import { useScreenSize } from '../hooks/useScreenSize'

function Header(props) {
  const device = useScreenSize()

  return (
    <PageHeader className='container'>
      <HeaderBrand to='/'>
        <img src={logo} alt='brand-logo' />
        {device !== 'mobile' && <span>$100Bees</span>}
      </HeaderBrand>
      <Navigation/>
    </PageHeader>
  )
}

const PageHeader = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  }
`

export default Header