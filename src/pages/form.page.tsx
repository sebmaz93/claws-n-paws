import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// id: string;
// name: string;
// breed: string | 'mix';
// pureBreed?: ANIMAL_BREED_TYPE;
// gender: ANIMAL_GENDER;
// size: ANIMAL_SIZE;
// type: ANIMAL_TYPE;
// description?: string;
// age:string;
// contacts:string[];
// team?: string;
// images:string[];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      padding: theme.spacing(2),
      '& > *': {
        margin: '16px 0',
      },
    },
  })
);

const FormPage = () => {
  const classes = useStyles();
  return (
    <form>
      <Grid container>
        <Grid
          className={classes.gridItem}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <TextField fullWidth label="name" variant="outlined" />
          <TextField fullWidth label="breed" variant="outlined" />
          <TextField fullWidth label="breed type" variant="outlined" />
          <TextField fullWidth label="gender" variant="outlined" />
          <TextField fullWidth label="size" variant="outlined" />
        </Grid>
        <Grid
          className={classes.gridItem}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <TextField fullWidth label="type" variant="outlined" />
          <TextField fullWidth label="age" variant="outlined" />
          <TextField fullWidth label="contacts" variant="outlined" />
          <TextField fullWidth label="team" variant="outlined" />
        </Grid>
      </Grid>
    </form>
  );
};

export default FormPage;
