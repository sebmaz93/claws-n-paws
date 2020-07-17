import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from 'components/Card.component';
import DOGS_DATA from 'static/dogs.data';

const DogsPage = () => {
  return (
    <Grid container spacing={1}>
      {DOGS_DATA.map((dog) => (
        <Grid item sm={12} md={6} lg={4} xl={3}>
          <CardComponent data={dog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DogsPage;
