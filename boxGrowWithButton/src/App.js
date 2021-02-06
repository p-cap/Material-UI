import React from 'react'
import Kahon from './ui/Kahon'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/Theme'
import Title from './ui/Title';
import { Grid } from '@material-ui/core';
import Pindot from './ui/Pindot'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={7}
        >
        <Grid item>
          <Title />
        </Grid>
        
        <Grid item>
          <Pindot />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
