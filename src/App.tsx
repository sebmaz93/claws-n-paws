import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from 'styles/theme';
import MainLayout from 'layouts/main.layout';
import DogsPage from 'pages/dogs.page';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import QRPage from 'pages/qr.page';
import FormPage from 'pages/form.page';

function App() {
  return (
    <ThemeProvider theme={Theme()}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" render={() => <div>HOME</div>} />
            <Route exact path="/dogs" component={DogsPage} />
            <Route exact path="/dogs/:dogId" render={() => <div>DOG ID</div>} />
            <Route exact path="/add" component={FormPage} />
            <Route exact path="/qr" component={QRPage} />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
