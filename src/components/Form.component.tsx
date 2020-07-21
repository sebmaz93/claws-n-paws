import React from 'react';
import {Form, Formik, FormikProps, useField} from 'formik';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {BREED_TYPE, GENDER, SIZE, TYPE} from 'constants/form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      padding: theme.spacing(2),
      '& > *': {
        margin: '16px 0',
      },
    },
    button: {
      margin: theme.spacing(2),
    },
    radioGroup: {
      flexDirection: 'row',
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

const MyTextField = ({label, ...props}: any) => {
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

const RadioButtons = ({label, items, ...props}: any) => {
  const [field, meta] = useField(props);
  const classes = useStyles();

  return (
    <FormControl
      fullWidth
      component="fieldset"
      variant="outlined"
      required={props.required}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        className={classes.radioGroup}
        aria-label={label}
        name={label}
        {...field}
      >
        {items.map((item: {value: string, label: string}) => (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const FormComponent = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{age: ''}}
      onSubmit={(values, actions) => {
        const modifiedValues = {...values, ageISO: Date.parse(values.age)};
        alert(JSON.stringify(modifiedValues, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props: FormikProps<any>) => {
        console.log(props);
        return (
          <Form>
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
                <MyTextField label="name" name="name" />
                <MyTextField label="breed" name="breed" />
                <MyTextField
                  label="age"
                  type="month"
                  name="age"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <MyTextField label="contacts" name="contacts" />
                <MyTextField label="team" name="team" />
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
                <RadioButtons label="type" name="type" items={TYPE} required />
                <RadioButtons
                  label="breed type"
                  name="breedType"
                  items={BREED_TYPE}
                  required
                />
                <RadioButtons
                  label="gender"
                  name="gender"
                  items={GENDER}
                  required
                />
                <RadioButtons label="size" name="size" items={SIZE} required />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Add
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
