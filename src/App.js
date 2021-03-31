
import React from 'react'
import { ThemeProvider } from '@emotion/react'

import GlobalStyles from './Styles/GlobalStyles'
import Header from './Components/Header'
import Main from './Main'

const theme = {
  colors: {
    primary: '#f8cf00'
    // primary: '#ffe402'
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
