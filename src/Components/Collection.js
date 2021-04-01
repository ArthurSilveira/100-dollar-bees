import React from 'react'
import styled from '@emotion/styled'

import { BREAKPOINTS } from '../Styles/constants'

function Collection({ collection = [] }) {

  console.log(collection)

  return (
    <CollectionGrid>
      <Header>
        <h2>
          Hexel Collection
        </h2>
        <a href='https://opensea.io/collection/100-bees-hexel-collection'>View on OpenSea</a>
      </Header>
      <Body>
        {collection.map((asset) => (
          <a href={asset.permalink} target='blank'>
            <AssetCard>
              <img src={asset.image_url} alt='asset thumbnail'/>
              <div className='card-copy'>
                {asset.last_sale ?
                  <span className='price'>
                    Ξ {Number.parseFloat(asset.last_sale.payment_token.eth_price).toFixed(1)} (sold)
                  </span>
                :
                  <span className='price'>For Sale</span>
                }
                <span>{asset.name}</span>
              </div>
            </AssetCard>
          </a>
        ))}
      </Body>
    </CollectionGrid>
  )
}

const CollectionGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  a {
    font-weight: 700;
    color: ${p => p.theme.colors.accent}
  }
`

const Body = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: 46% 46%;
  column-gap: 8%;
  row-gap: 16px;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding-top: 32px;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 32px;
    row-gap: 32px;
  }
`

const AssetCard = styled.div`
  padding: 8px 0;
  height: 100%;
  flex-direction: column;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, .05);

  .card-copy {
    padding: var(--space-inset--xs);
    display: flex;
    flex-direction: column;
    
    .price {
      font-weight: 600;
      padding: 4px 0;
    }
  }

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding: 16px 0;
  }
`
export default Collection