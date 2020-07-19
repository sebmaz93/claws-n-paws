import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from 'styles/theme';
import MainLayout from 'layouts/main.layout';
import DogsPage from 'pages/dogs.page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme()}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" render={() => <div>HOME</div>} />
            <Route exact path="/dogs" component={DogsPage} />
            <Route exact path="/dogs/:dogId" render={() => <div>DOG ID</div>} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
