import React from 'react';
import {ReactComponent as QR} from 'assets/clawsnpaws_website.svg';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 500,
      maxHeight: '70vh',
      width: '100%',
    },
    qr: {
      height: 300,
      width: 300,
      [theme.breakpoints.down('sm')]: {
        height: 200,
        width: 200,
      },
    },
  })
);

const QRPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <QR className={classes.qr} />
    </div>
  );
};

export default QRPage;
