import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import { BREAKPOINTS } from '../Styles/constants'
import Collection from '../Components/Collection'

function Home(props) {

  const [collection, setCollection] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        offset: '0',
        limit: '50',
        collection: '100-bees-hexel-collection'
      }
    }).then(response => {
      setCollection(response.data.assets)
    }).catch(error => {
      console.log(error)
    }).then(() => setLoading(false))
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
        <Collection collection={collection} loading={loading}/>
      </HomeSection>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--space--xxl);
`

const HomeSection = styled.div`
  padding-top: 20px;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding-top: 40px;
  }
`

const StyledP = styled.p`
  padding-top: 20px;
  padding-right: 0;
  
  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding-top: 20px;
    padding-right: 25%;
  }
`

export default Home