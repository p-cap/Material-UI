import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme/Theme'
import Call from './components/Call';
import Search from './components/Search';
import LoginControl from './Conditional Render/LoginControl';
import FormSubmission from './Conditional Render/FormSubmission';

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <Typography variant="h1">DShield's IP Search</Typography>
      <Search />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
