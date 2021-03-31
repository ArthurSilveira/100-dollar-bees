import React from 'react'
import styled from '@emotion/styled'
import { BREAKPOINTS } from '../Styles/constants'

function Home(props) {
  return (
    <HomeWrapper>
      <HomeSection>
        <h1>
          Save the Bees!
        </h1>
        <StyledP>
          There's over 20,000 bee species in the world, get to know some of them!
          The crypto bee collective engages in bee conservation cryptophilanthropy.
          At least 50% of the proceeds will be donated to bee conservation.
          The remainder will go to support the artist and the bee collective. Bzzzz
        </StyledP>
      </HomeSection>
      <HomeSection>
        <h2>
          Hexel Collection
        </h2>
      </HomeSection>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HomeSection = styled.div`
  padding-top: 20px;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding-top: 40px;
    width: 75%;
  }
`

const StyledP = styled.p`
  line-height: 1.8;
  padding-top: 20px;
  
  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding-top: 20px;
  }
`

export default Home