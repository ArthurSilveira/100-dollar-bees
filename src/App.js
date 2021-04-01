
import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'

import GlobalStyles from './Styles/GlobalStyles'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Main'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFF',
    foreground: '#FAFAFC',
    primary: '#000',
    contrast: '#FFF',
    accent: '#f8cf00',
  }
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#0E1118',
    foreground: '#26292F',
    primary: '#FFF',
    contrast: '#000',
    accent: '#f8cf00',
  } 
}

function App() {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.dark ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme}/>
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
