import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from 'src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>hi</div>
    </ThemeProvider>
  );
}

export default App;
