import React from 'react';
import Header from './components/header/header';
import Main from './main';
import Footer from './components/footer/footer';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global.js';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (

    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
