import React from 'react'
import ContentLoader from 'react-content-loader'

export const CardLoader = props => {
  const loader =
    <ContentLoader {...props} style={{ minHeight: '230px', width: '100%', height: '100%', display: 'flex' }}>
      <rect x="0" y="8" rx="0" ry="0" width="100%" height="136" />
      <rect x="0" y="160" rx="0" ry="0" width="50%" height="18" />
      <rect x="0" y="190" rx="0" ry="0" width="80%" height="14" />
    </ContentLoader>

  const loaderArray = []

  if (props.repeat) {
    for (let i = 0; i < props.repeat; i++) {
      loaderArray.push(loader)
    }

    return loaderArray.map(loader => loader)
  } else {
    return loader
  }
  
}