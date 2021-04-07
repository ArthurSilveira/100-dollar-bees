import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'

import { AssetLoader, BoxLoader } from '../Components/Loader'
import { FlowerBee } from '../Components/BeeAnimations'
import { BREAKPOINTS, FONT_SCALE } from '../Styles/constants'

const ETH_DIVIDER = 1e18

function OwnerAssets({ owner, collection, currentAsset }) {
  const [assets, setAssets] = useState()
  const [assetsLoading, setAssetsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        `https://api.opensea.io/api/v1/assets?owner=${owner}&collection=${collection}&order_direction=desc&offset=0&limit=6`
      )
      .then(response => {
        setAssets(response.data.assets)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        setAssetsLoading(false)
      })
  }, [owner, collection])

  return (
    <>
      {(assetsLoading && (
        <RelatedAssets>
          <div className='assets'>
            <BoxLoader repeat={6} />
          </div>
        </RelatedAssets>
      )) || (
        <>
          {assets && assets.length > 1 && (
            <RelatedAssets>
              <h3>Other bees owned by this keeper</h3>

              <div className='assets'>
                {assets.map(asset => (
                  <>
                    {currentAsset && asset.token_id !== currentAsset && (
                      <div>
                        <a href={`/asset/${asset.token_id}`} title={`Learn more about this bee`}>
                          <AspectRatioBox>
                            <img src={asset.image_thumbnail_url} alt='' />
                          </AspectRatioBox>
                        </a>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </RelatedAssets>
          )}
        </>
      )}
    </>
  )
}

function AssetDetails(props) {
  const [asset, setAsset] = useState()
  const [loading, setLoading] = useState(true)
  const [deviceWidth, setDeviceWidth] = useState(0)

  const truncateAddress = eth_address => {
    if (!eth_address) {
      return 'no address'
    }
    const length = eth_address.length
    const truncated_address =
      eth_address.slice(0, 4) + `...` + eth_address.slice(length - 4, length)
    return truncated_address
  }

  useEffect(() => {
    setDeviceWidth(window.innerWidth)
    function handleResize() {
      setDeviceWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    axios
      .get(
        `https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/${props.match.params.id}`
      )
      .then(response => {
        setAsset(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        setLoading(false)
      })
  }, [props])

  return (
    <AssetContainer>
      {(loading && (
        <>
          <AssetLoader repeat={0} />
        </>
      )) || (
        <AssetMain>
          <div>
            <AspectRatioBox>
              <img src={asset.image_url} alt={asset.name} />
            </AspectRatioBox>
            {BREAKPOINTS.tablet < deviceWidth && (
              <OwnerAssets
                owner={asset.top_ownerships[0].owner.address}
                collection={asset.collection.slug}
                currentAsset={asset.token_id}
              />
            )}
          </div>
          <div>
            <AssetHeader>
              <h2>{asset.name}</h2>
              <a className='back' href='/'>
                Back to the collection
              </a>
              {BREAKPOINTS.tablet > deviceWidth && (
                <FlowerBee timing={5} position='absolute' top='30px' right='-5px' />
              )}
              {BREAKPOINTS.mobile < deviceWidth && (
                <FlowerBee timing={5} position='absolute' top='-55px' right='-30px' />
              )}
            </AssetHeader>

            <InfoGroup>
              <span className='creator'>{asset.collection.name}</span>
              <span className='owner'>
                Owner:{' '}
                {asset.sell_orders !== 'null' ? (
                  <a
                    href={`https://opensea.io/accounts/${asset.top_ownerships[0].owner.address}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>{truncateAddress(asset.top_ownerships[0].owner.address)}</span>
                  </a>
                ) : (
                  `${asset.creator.user.username}`
                )}
              </span>
              {asset.top_bid && <span>Top bid: {asset?.top_bid}</span>}
              {asset.last_sale ? (
                <span className='price'>
                  Ξ {asset.last_sale.total_price / ETH_DIVIDER}{' '}
                  {asset.last_sale.total_price > 0 ? `(sold)` : `Private (Collab)`}
                </span>
              ) : (
                <span className='price'>
                  {asset.orders[0]
                    ? `Ξ ${asset.orders[0].current_price / ETH_DIVIDER} (for sale)`
                    : 'Private (Collab)'}
                </span>
              )}
              <a
                href={`https://opensea.io/assets/${asset.asset_contract.address}/${asset.token_id}`}
                target='_blank'
                rel='noreferrer'
              >
                View this bee on OpenSea
              </a>
            </InfoGroup>

            <ReactMarkdown linkTarget='_blank'>{asset?.description}</ReactMarkdown>

            {BREAKPOINTS.tablet > deviceWidth && (
              <OwnerAssets
                owner={asset.top_ownerships[0].owner.address}
                collection={asset.collection.slug}
                currentAsset={asset.token_id}
              />
            )}
          </div>
        </AssetMain>
      )}
    </AssetContainer>
  )
}

const AssetContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-top: 40px;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    position: relative;
  }
`

const AssetHeader = styled.div`
  position: unset;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    position: relative;
  }

  .back {
    position: absolute;
    top: -30px;
    right: 0;
    font-weight: 700;

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      top: -50px;
    }
  }
`

const AssetMain = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  font-size: ${FONT_SCALE.body.small};

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    flex-flow: row nowrap;
    font-size: ${FONT_SCALE.body.base};
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: ${FONT_SCALE.body.bigger};
  }

  & > div {
    padding: 0;
    &:first-of-type {
      flex: 0 0 100%;
    }

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      padding: 0 20px;
      &:first-of-type {
        flex: 1 0 50%;
      }
    }

    a {
      color: ${p => p.theme.colors.accent};
    }
  }
`

const InfoGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;
  margin: 0 0 15px 0;
  font-size: ${FONT_SCALE.body.tiny};

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    font-size: ${FONT_SCALE.body.small};
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: ${FONT_SCALE.body.big};
  }

  span {
    width: 33%;
    flex: 1 0 50%;
    margin-bottom: 10px;
    &:nth-of-type(odd) {
      margin-left: 0;
    }
    &.creator {
      flex: 1 0 100%;
      opacity: 0.6;
      font-size: ${FONT_SCALE.body.tiny};
      @media (min-width: ${BREAKPOINTS.mobile}px) {
        font-size: ${FONT_SCALE.body.small};
      }
    }
  }
`

const AspectRatioBox = styled.div`
  border-radius: 8px;
  position: relative;
  display: block;
  padding-top: ${(847 / 992) * 100}%;
  width: 100%;
  max-width: 530px;
  margin-bottom: 25px;
  overflow: hidden;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    margin-bottom: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`

const RelatedAssets = styled.div`
  position: relative;
  margin-top: 25px;
  h3 {
    font-size: ${FONT_SCALE.body.tiny};

    @media (min-width: ${BREAKPOINTS.mobile}px) {
      font-size: ${FONT_SCALE.body.small};
    }

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      font-size: ${FONT_SCALE.body.big};
    }
  }
  .assets {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 16px;
    margin-top: 15px;

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      grid-template-columns: repeat(6, 1fr);
    }
    div {
    }
  }
`

export default AssetDetails
