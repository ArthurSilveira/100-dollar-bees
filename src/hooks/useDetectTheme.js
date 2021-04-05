import { useState, useEffect } from 'react'

// Define available themes
const colorSchemes = {
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'
}

export default function useDetectTheme() {
  const [scheme, setScheme] = useState(null)

  useEffect(() => {
    if (!window.matchMedia) {
      return
    }

    // The listener
    const listener = e => {
      if (!e || !e.matches) {
        return
      }
      const schemeNames = Object.keys(colorSchemes)
      for (let i = 0; i < schemeNames.length; i++) {
        const schemeName = schemeNames[i]
        if (e.media === colorSchemes[schemeName]) {
          setScheme(schemeName)
          break
        }
      }
    }

    // Add listener for all themes
    let activeMatches = []
    Object.keys(colorSchemes).forEach(schemeName => {
      const mq = window.matchMedia(colorSchemes[schemeName])
      mq.addEventListener('change', listener)
      activeMatches.push(mq)
      listener(mq)
    })

    // Remove listeners, no memory leaks
    return () => {
      activeMatches.forEach(mq => mq.removeListener(listener))
      activeMatches = []
    }
  }, [])

  return scheme
}
