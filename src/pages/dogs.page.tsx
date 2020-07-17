import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from 'components/Card.component';

const DogsPage = () => {
  return (
    <Grid container spacing={1}>
      {Array(6)
        .fill(0)
        .map(() => (
          <Grid item sm={12} md={6} lg={4} xl={3}>
            <CardComponent />
          </Grid>
        ))}
    </Grid>
  );
};

export default DogsPage;
