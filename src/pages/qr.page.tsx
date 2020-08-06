import React from 'react';
import {ReactComponent as QR} from 'assets/clawsnpaws_website.svg';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
      position: 'relative',
      border: `12px solid ${theme.palette.secondary.main}`,
      boxShadow: `0 16px 0 0 ${theme.palette.secondary.light}`,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '12px 12px 0 0',
      height: 300,
      width: 300,
      [theme.breakpoints.down('sm')]: {
        height: 200,
        width: 200,
      },
      '& > svg': {
        height: '100%',
        width: '100%',
        borderRadius: 10,
      },
    },
    scanText: {
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '125%',
      borderRadius: 12,
      position: 'absolute',
      left: '50%',
      bottom: -20,
      transform: 'translate(-50%,100%)',
      height: 75,
      fontSize: 42,
      '& > h4': {
        userSelect: 'none',
      },
    },
  })
);

const QRPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.qr}>
        <QR />
        <div className={classes.scanText}>
          <Typography variant="h4">SCAN ME</Typography>
        </div>
      </div>
    </div>
  );
};

export default QRPage;
