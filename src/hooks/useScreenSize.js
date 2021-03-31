import { useLayoutEffect, useState } from 'react'
import { debounce } from 'lodash'
import { BREAKPOINTS } from '../Styles/constants'

export const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    const updateScreenSize = debounce(() => {
      setWindowWidth(window.innerWidth)
    }, 0)
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  if (windowWidth <= BREAKPOINTS.mobile) return 'mobile'
  else if (windowWidth <= BREAKPOINTS.tablet) return 'tablet'
  else return 'desktop'
}
