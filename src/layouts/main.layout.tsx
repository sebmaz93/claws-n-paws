import React from 'react';
import clsx from 'clsx';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {HEADER_DATA, HEADER_DATA_2} from 'static/header.data';
import {DRAWER_WIDTH} from 'constants/sizes';
import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clawsNpawsLogo from 'assets/claws_paws_yellow.png';

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
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 18,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) + 1,
      },
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
    listItem: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 20,
      },
    },
    listItemText: {
      textTransform: 'capitalize',
      '& span': {
        fontFamily: 'Roboto !important',
      },
    },
    title: {
      fontFamily: 'Airfool',
      flexGrow: 1,
      textShadow: `#FC0 1px 0 10px`,
      paddingLeft: 4,
    },
    logo: {
      height: '45px',
      width: '45px',
      marginRight: 10,
      backgroundImage: `url(${clawsNpawsLogo})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    listLogo: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    listLogoItem: {width: 'auto'},
    listLogoItemClosed: {width: '100%'},
    logoLg: {
      backgroundImage: `url(${clawsNpawsLogo})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      height: '126px',
      width: '126px',
    },
    logoClosed: {
      height: '30px',
      width: '30px',
    },
    textHidden: {
      display: 'none',
    },
  })
);

const MiniDrawer: React.FC = ({children}) => {
  const classes = useStyles();
  const lg = window.innerWidth > 100;
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
          <Button color="inherit">Login</Button>
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
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {HEADER_DATA.map((el) => (
            <ListItem className={classes.listItem} button key={el.id}>
              <ListItemIcon>
                {el.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={el.name}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {HEADER_DATA_2.map((el) => (
            <ListItem className={classes.listItem} button key={el.id}>
              <ListItemIcon>
                {el.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={el.name}
              />
            </ListItem>
          ))}
        </List>
        <List className={classes.listLogo}>
          <ListItem
            className={clsx(classes.listLogoItem, {
              [classes.listLogoItemClosed]: !open,
            })}
          >
            <ListItemIcon>
              <div
                className={clsx(classes.logoLg, {
                  [classes.logoClosed]: !open,
                })}
              />
            </ListItemIcon>
          </ListItem>
          <Typography variant="caption">
            <span className={open ? '' : classes.textHidden}>
              All Right Received{' '}
            </span>
            SebMaz
          </Typography>
        </List>
      </Drawer>
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
