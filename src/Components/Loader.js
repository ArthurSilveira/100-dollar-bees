import { useTheme } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import styled from '@emotion/styled'
import { BREAKPOINTS } from '../Styles/constants'

export const CardLoader = props => {
  const theme = useTheme()

  const bgColor = theme.dark ? theme.colors.foreground : undefined
  const fgColor = theme.dark ? '#3d414a' : undefined

  const loader = key => (
    <ContentLoader
      key={key}
      backgroundColor={bgColor}
      foregroundColor={fgColor}
      style={{
        minHeight: '230px',
        width: '100%',
        height: '100%',
        display: 'flex'
      }}
      {...props}
    >
      <rect x='0' y='8' rx='0' ry='0' width='100%' height='136' />
      <rect x='0' y='160' rx='0' ry='0' width='50%' height='18' />
      <rect x='0' y='190' rx='0' ry='0' width='80%' height='14' />
    </ContentLoader>
  )

  const loaderArray = []

  if (props.repeat) {
    for (let i = 0; i < props.repeat; i++) {
      loaderArray.push(loader(i))
    }

    return loaderArray.map(loader => loader)
  } else {
    return loader
  }
}
export const AssetLoader = props => {
  const theme = useTheme()
  const [deviceWidth, setDeviceWidth] = useState(0)

  useEffect(() => {
    setDeviceWidth(window.innerWidth)
    function handleResize() {
      setDeviceWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const bgColor = theme.dark ? theme.colors.foreground : undefined
  const fgColor = theme.dark ? '#3d414a' : undefined

  const loader = (
    <>
      {deviceWidth && deviceWidth < BREAKPOINTS.mobile && (
        <StyledContentLoader
          backgroundColor={bgColor}
          foregroundColor={fgColor}
          style={{
            minHeight: '500px',
            width: '100%',
            height: '100%',
            display: 'flex'
          }}
          {...props}
        >
          <rect x='0' y='8' rx='0' ry='0' width='100%' height='286' />
          <rect x='0' y='320' rx='0' ry='0' width='48%' height='25' />
          <rect x='0' y='350' rx='0' ry='0' width='35%' height='10' />
          <rect x='0' y='370' rx='0' ry='0' width='75%' height='14' />
          <rect x='0' y='390' rx='0' ry='0' width='50%' height='14' />
          <rect x='0' y='415' rx='0' ry='0' width='100%' height='350' />
        </StyledContentLoader>
      )}
      {deviceWidth && deviceWidth > BREAKPOINTS.mobile && (
        <StyledContentLoader
          backgroundColor={bgColor}
          foregroundColor={fgColor}
          style={{
            minHeight: '448px',
            width: '100%',
            height: '100%',
            display: 'flex'
          }}
          {...props}
        >
          <rect x='0' y='8' rx='0' ry='0' width='48%' height='448' />
          <rect x='53%' y='8' rx='0' ry='0' width='35%' height='30' />
          <rect x='53%' y='40' rx='0' ry='0' width='30%' height='10' />
          <rect x='53%' y='60' rx='0' ry='0' width='15%' height='15' />
          <rect x='75%' y='60' rx='0' ry='0' width='10%' height='15' />
          <rect x='53%' y='85' rx='0' ry='0' width='20%' height='15' />
          <rect x='53%' y='115' rx='0' ry='0' width='47%' height='335' />
        </StyledContentLoader>
      )}
    </>
  )

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

export const BoxLoader = props => {
  const theme = useTheme()

  const bgColor = theme.dark ? theme.colors.foreground : undefined
  const fgColor = theme.dark ? '#3d414a' : undefined

  const loader = (
    <ContentLoader
      backgroundColor={bgColor}
      foregroundColor={fgColor}
      style={{
        minHeight: '63px',
        maxHeight: '63px',
        width: '100%',
        height: '100%',
        display: 'flex'
      }}
      {...props}
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='100%' />
    </ContentLoader>
  )

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

const StyledContentLoader = styled(ContentLoader)`
  rect {
    border-radius: 5px;
  }
`
