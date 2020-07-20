import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clawsNpawsLogo from 'assets/claws_paws_yellow.png';
import Sidebar from 'components/Sidebar.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      overflowY: 'hidden',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 8,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      fontFamily: 'Airfool',
      flexGrow: 1,
      textShadow: `#FC0 1px 0 10px`,
      paddingLeft: 4,
      [theme.breakpoints.down(330)]: {
        fontSize: 22,
      },
    },
    logo: {
      height: '45px',
      width: '45px',
      marginRight: 10,
      backgroundImage: `url(${clawsNpawsLogo})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down(330)]: {
        height: '35px',
        width: '35px',
        marginRight: 5,
      },
    },
  })
);

const MiniDrawer: React.FC = ({children}) => {
  const classes = useStyles();
  const lg = window.innerWidth > 600;
  const [open, setOpen] = React.useState(lg);
  const [auth] = React.useState(true);
  // prettier-ignore
  const [anchorEl, setAnchorEl] = React.useState<null|HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setOpen((val) => !val);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo} />
          <Typography variant="h4" noWrap className={classes.title}>
            Claws'n'Paws
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={menuOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Sidebar open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="xl" disableGutters>
          <>{children}</>
        </Container>
      </main>
    </div>
  );
};

export default MiniDrawer;

// google-site-verification=qhg0Tzuzi0k8oEAG0dMGCq0LImnypkmAj4bsPKGWNTw
