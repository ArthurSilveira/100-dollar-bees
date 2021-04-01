import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import { BREAKPOINTS } from '../Styles/constants'
import Collection from '../Components/Collection'

function Home(props) {

  const [collection, setCollection] = useState()

  useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        // owner: '0x9f9662d40f4dc862f0a1d43bf6b1e4ac200ae1af',
        offset: '0',
        limit: '20',
        collection: '100-bees-hexel-collection'
      }
    }).then(response => {
      setCollection(response.data.assets)
    }).catch(error => {
      console.log(error)
    }).then(() => {})
  },[])


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
        <Collection collection={collection} />
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