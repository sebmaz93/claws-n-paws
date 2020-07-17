import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from 'styles/theme';
import MainLayout from 'layouts/main.layout';
import DogsPage from 'pages/dogs.page';

function App() {
  return (
    <ThemeProvider theme={Theme()}>
      <MainLayout>
        <DogsPage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
