import * as React from 'react';
import clsx from 'clsx';
import { Link} from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';



const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    anchor: {
      textDecoration: 'none',
      color: 'white'
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      // height: 'inherit',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',  
      height: 'inherit'  
    },
    paper: {
      background: '#000',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      background: '#e8eaf6',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0)
    },
    drawerPaperCollapsed: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(0),
      },
    },
    active: {
      background: '#fefefe'
    },
    title: {
      // padding: theme.spacing(1),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar,
    toolbar: theme.mixins.toolbar,
    toolbarTitle: {
      display: 'flex',
      alignItems: 'center',
      
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    toolbarIcon: {
      marginRight: '0px'
    },
    listIcon: {
        paddingRight: theme.spacing(1)
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
  }
})

export default function Layout({ children }) {

  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const [open, setOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
    setCollapsed(false);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setCollapsed(false);
  };

  const menuItems = [
    { 
      text: 'Sugar', 
      icon: <MusicNoteIcon color="primary" />, 
      path: '/sugar' 
    },
    { 
      text: 'Raatan Lambiyan', 
      icon: <MusicNoteIcon color="primary" />, 
      path: '/raatanLambiyan' 
    },
    { 
        text: 'Despacito', 
        icon: <MusicNoteIcon color="primary" />, 
        path: '/despacito' 
      },
  ];


  return (

    <Box sx={{ display: 'flex' }} className={classes.root}>
      <CssBaseline />
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={clsx(classes.appBar, 
          open && classes.appBarShift, collapsed && classes.appBar)}
        elevation={0}
        color="primary">

        <Toolbar className={classes.toolbar}>
          {/* The Menu icon exposes the left pane menu bar */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
              <MenuIcon />
          </IconButton>

          {/* This icon collapses the left pane enough to show menu item icons */}
          <IconButton 
            edge="start"
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose} 
            className={clsx(classes.menuButton, !open && classes.menuButtonHidden)}>
              <ChevronLeftIcon />
          </IconButton>

          <Link to="/" className={classes.anchor}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Rockstar App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        variant="persistent"
        classes={{ paper: clsx(classes.drawerPaper, 
          !open && classes.drawerPaperClose,
          collapsed && classes.drawerPaperCollapsed) 
        }}
        open={open}>

        <div className={classes.toolbarTitle}>
          <Typography variant="h5" className={classes.title}>
            <LibraryMusicIcon color="primary" className={classes.listIcon}></LibraryMusicIcon>
            Songs
          </Typography>
        </div>
        
        <Divider />

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
      
  </Box>
  );
}
