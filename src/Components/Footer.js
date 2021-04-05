import React from 'react'
import styled from '@emotion/styled'
import SocialMediaButtons from 'react-social-media-buttons'
import { useTheme } from '@emotion/react'

import { BREAKPOINTS } from '../Styles/constants'

function Footer(props) {
  const theme = useTheme()

  const links = ['https://twitter.com/100DollarBees']
  const style = {
    width: '64px',
    height: '64px',
    margin: '0px 16px'
  }

  const iconStyle = {
    color: theme.colors.primary
  }

  return (
    <PageFooter>
      <FooterLinks className='container'>
        <a href='https://opensea.io/' title='Buy on OpenSea' target='_blank' rel='noreferrer'>
          <img
            style={{
              width: '160px',
              borderRadius: '5px',
              boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)'
            }}
            src='https://storage.googleapis.com/opensea-static/opensea-brand/buy-button-white.png'
            alt='Buy on OpenSea badge'
          />
        </a>
        <span>$100Bees</span>
        <SocialMediaButtons
          links={links}
          buttonStyle={style}
          iconStyle={iconStyle}
          openNewTab={true}
        />
      </FooterLinks>
    </PageFooter>
  )
}

const PageFooter = styled.div`
  padding: var(--space-inset--xxl) 0;
  background: ${(p) => p.theme.colors.foreground};
`
const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  span {
    padding-top: var(--space--xl);
    padding-bottom: var(--space--l);
  }

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    flex-direction: row;
  }
`

export default Footer
