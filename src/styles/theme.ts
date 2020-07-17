import React from 'react';
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';

export default function Theme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#ff5f42',
          },
          secondary: {
            main: '#019eaa',
          },
        },
        typography: {
          body1: {
            fontFamily: 'Poppins',
          },
          body2: {
            fontFamily: 'Poppins',
          },
          button: {
            fontWeight: 400,
          },
        },
      }),
    [prefersDarkMode]
  );

  return responsiveFontSizes(theme);
}

// ORANGE
// #ff5f42
