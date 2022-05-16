import React from 'react';
import Home from './Pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;