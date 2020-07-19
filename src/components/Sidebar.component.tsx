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
import {NavLink} from 'react-router-dom';
import GalleryIcon from '@material-ui/icons/PhotoLibraryOutlined';
import TeamIcon from '@material-ui/icons/PeopleOutline';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ContactsIcon from '@material-ui/icons/ContactsOutlined';
import DonateIcon from '@material-ui/icons/MonetizationOnOutlined';
import ServicesIcon from '@material-ui/icons/BallotOutlined';
import MobileIcon from '@material-ui/icons/PhonelinkRingOutlined';

interface HeaderDataInterface {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

const SIDEBAR_DATA: HeaderDataInterface[] = [
  {
    id: 1,
    name: 'home',
    path: '/',
    icon: <HomeIcon />,
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
    icon: <TeamIcon />,
    disabled: true,
  },
  {
    id: 5,
    name: 'gallery',
    path: '/gallery',
    icon: <GalleryIcon />,
    disabled: true,
  },
];

const SIDEBAR_DATA_2 = [
  {
    id: 1,
    name: 'services',
    path: '/services',
    icon: <ServicesIcon />,
    disabled: true,
  },
  {
    id: 2,
    name: 'donate',
    path: '/donate',
    icon: <DonateIcon />,
    disabled: true,
  },
  {
    id: 3,
    name: 'contacts',
    path: '/contacts',
    icon: <ContactsIcon />,
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
      '&.active': {
        backgroundColor: `${theme.palette.secondary.main}55`,
      },
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
    copyright: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      whiteSpace: 'normal',
    },
    pcOnly: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
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
          <ListItem
            className={classes.listItem}
            exact={el.path === '/'}
            button
            key={el.id}
            component={NavLink}
            to={el.path}
            disabled={el.disabled}
          >
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText className={classes.listItemText} primary={el.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SIDEBAR_DATA_2.map((el) => (
          <ListItem
            className={classes.listItem}
            button
            key={el.id}
            component={NavLink}
            to={el.path}
            disabled={el.disabled}
          >
            <ListItemIcon>
              <ListItemIcon>{el.icon}</ListItemIcon>
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary={el.name} />
          </ListItem>
        ))}
        <ListItem
          className={`${classes.listItem} ${classes.pcOnly}`}
          button
          key="qr"
          component={NavLink}
          to="/qr"
        >
          <ListItemIcon>
            <ListItemIcon>
              <MobileIcon />
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="to mobile" />
        </ListItem>
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
        <Typography className={classes.copyright} variant="caption">
          SebMaz © 2020
        </Typography>
      </List>
    </Drawer>
  );
};

export default Sidebar;
