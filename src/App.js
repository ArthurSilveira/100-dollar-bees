import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'

import GlobalStyles from './Styles/GlobalStyles'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Main'
import useDetectTheme from './hooks/useDetectTheme'

const themes = {
  light: {
    dark: false,
    colors: {
      background: '#FFF',
      foreground: '#FAFAFC',
      primary: '#000',
      subtle: '#6b707a',
      contrast: '#FFF',
      accent: '#f8cf00'
    }
  },
  dark: {
    dark: true,
    colors: {
      background: '#0E1118',
      foreground: '#26292F',
      primary: '#FFF',
      contrast: '#000',
      accent: '#f8cf00'
    }
  }
}

function App() {
  const defaultTheme = useDetectTheme() || 'dark'
  const [theme, setTheme] = useState(themes[defaultTheme])

  useEffect(() => {
    setTheme(themes[defaultTheme])
  }, [defaultTheme])

  const toggleTheme = () => {
    setTheme(theme.dark ? themes.light : themes.dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
