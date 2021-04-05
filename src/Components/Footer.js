import React from 'react'
import styled from '@emotion/styled'
import SocialMediaButtons from 'react-social-media-buttons'
import { useTheme } from '@emotion/react'

import { BREAKPOINTS } from '../Styles/constants'
import SVG from 'react-inlinesvg'
import discordIcon from '../Assets/discord.svg'

function Footer(props) {
  const theme = useTheme()

  const links = ['https://twitter.com/100DollarBees']
  const style = {
    width: '64px',
    height: '64px',
    margin: '0'
  }

  const iconStyle = {
    color: theme.colors.primary
  }

  return (
    <PageFooter>
      <FooterContainer className='container'>
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
        <SocialNav>
          <DiscordButton href='https://discord.gg/Rp64DCpu6Q'>
            <SVG src={discordIcon} />
          </DiscordButton>
          <SocialMediaButtons
            links={links}
            buttonStyle={style}
            iconStyle={iconStyle}
            openNewTab={true}
          />
        </SocialNav>
      </FooterContainer>
    </PageFooter>
  )
}

const PageFooter = styled.div`
  padding: var(--space-inset--xxl) 0;
  background: ${p => p.theme.colors.foreground};
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  span {
    padding-top: var(--space--xl);
    padding-bottom: var(--space--l);
    font-weight: 600;
    color: ${p => p.theme.colors.subtle};
  }

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    flex-direction: row;
  }
`
const SocialNav = styled.div`
  display: flex;
`

const DiscordButton = styled.a`
  height: 64px;
  width: 64px;
  padding: 12px;
  margin-right: 8px;
  svg {
    fill: ${p => p.theme.colors.primary};
  }
`

export default Footer
