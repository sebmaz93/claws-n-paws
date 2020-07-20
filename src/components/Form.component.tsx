import React from 'react';
import {Form, Formik, FormikProps, useField} from 'formik';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

// @ts-ignore
const MyTextField = ({label, ...props}) => {
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <TextField
      fullWidth
      error={meta.touched && meta.error}
      helperText={meta.error}
      label={label}
      variant="outlined"
      inputProps={{...field}}
      {...props}
    />
  );
};

const FormComponent = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{name: 'jax'}}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props: FormikProps<any>) => {
        console.log(props);
        return (
          <Form>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <MyTextField label="name" name="name" />
              <MyTextField label="breed" name="breed" />
              <MyTextField label="breed type" name="breed type" />
              <MyTextField label="gender" name="gender" />
              <MyTextField label="size" name="size" />
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
              <MyTextField label="type" name="type" />
              <MyTextField label="age" name="age" />
              <MyTextField label="contacts" name="contacts" />
              <MyTextField label="team" name="team" />
            </Grid>
            <button>SUBMIT</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
