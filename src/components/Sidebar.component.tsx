import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {ReactComponent as DogIcon} from 'assets/dog.svg';
import {ReactComponent as CatIcon} from 'assets/cat.svg';
import Drawer from '@material-ui/core/Drawer';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {DRAWER_WIDTH} from 'constants/sizes';
import clawsNpawsLogo from 'assets/claws_paws_yellow.png';

interface HeaderDataInterface {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
}

const SIDEBAR_DATA: HeaderDataInterface[] = [
  {
    id: 1,
    name: 'home',
    path: '/',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
  {
    id: 2,
    name: 'dogs',
    path: '/dogs',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
  {
    id: 3,
    name: 'cats',
    path: '/cats',
    icon: <CatIcon className="MuiSvgIcon-root" />,
  },
  {
    id: 4,
    name: 'teams',
    path: '/teams',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
  {
    id: 5,
    name: 'gallery',
    path: '/gallery',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
];

const SIDEBAR_DATA_2 = [
  {
    id: 1,
    name: 'services',
    path: '/services',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
  {
    id: 2,
    name: 'donate',
    path: '/donate',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
  {
    id: 3,
    name: 'contacts',
    path: '/contacts',
    icon: <DogIcon className="MuiSvgIcon-root" />,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const Sidebar: React.FC<{open: boolean}> = ({open}) => {
  const classes = useStyles();
  return (
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
        {SIDEBAR_DATA.map((el) => (
          <ListItem className={classes.listItem} button key={el.id}>
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText className={classes.listItemText} primary={el.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SIDEBAR_DATA_2.map((el) => (
          <ListItem className={classes.listItem} button key={el.id}>
            <ListItemIcon>
              <ListItemIcon>{el.icon}</ListItemIcon>
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary={el.name} />
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
  );
};

export default Sidebar;
