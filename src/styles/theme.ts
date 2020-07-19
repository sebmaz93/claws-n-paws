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
          h1: {
            fontFamily: 'Poppins',
          },
          h2: {
            fontFamily: 'Poppins',
          },
          h3: {
            fontFamily: 'Poppins',
          },
          h4: {
            fontFamily: 'Poppins',
          },
          h5: {
            fontFamily: 'Poppins',
          },
          h6: {
            fontFamily: 'Poppins',
            fontWeight: 'bold',
          },
          button: {
            fontWeight: 400,
          },
        },
        overrides: {
          MuiChip: {
            root: {
              fontSize: '0.9rem',
              margin: 2,
            },
            label: {},
            icon: {
              fill: 'currentColor',
              width: '0.9em',
              height: '0.9em',
              display: 'inline-block',
              fontSize: '1.5rem',
              transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              flexShrink: 0,
              userSelect: 'none',
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return responsiveFontSizes(theme);
}
