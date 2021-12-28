import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import "../../assets/styles/page1.css";
import logo from "../../assets/images/logo.svg";
import swap from "../../assets/sidebar/swap.png";
import bridge from "../../assets/sidebar/bridge.png";
import staking from "../../assets/sidebar/staking.png";
import more from "../../assets/sidebar/more.png";
import burgerMenu from "../../assets/images/slider-icon.png";
import bsc from  '../../assets/images/bsc.png'
import Swap from './Swap';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="toolBar d-flex justify-content-between bg-app">
            <div className="d-flex">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className="d-md-none">
                <img src={logo} height={50} width={160} alt='OmniDEX logo' />
            </div> 
            
          </Typography>
          </div>
          <div>
          <button className="btn btn-trans mr-3">
                <img src={bsc} width={30} alt="bsc" className="mr-2"/>
                BSC
            </button>
          <button className="btn btn-primary px-md-5">Action Button</button>
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#0f1d36',
            color: 'white'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
            <img className="mr-3" src={burgerMenu} width={30} alt='menu' />
          </IconButton>
          <div className="d-none d-md-block">
                <img src={logo} height={50} width={160} alt='OmniDEX logo' />
            </div>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Swap', 'Bridge', 'Multi-Chain', 'Staking'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
           <ListItem button>
              <ListItemIcon>
                <img className="mr-2" src={swap} width={25} alt='swap' />
              </ListItemIcon>
              <ListItemText primary='Swap' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <img className="mr-2" src={bridge} width={25} alt='bridge' />
              </ListItemIcon>
              <ListItemText primary='Bridge' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='Multi-Chain' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <img className="mr-2" src={staking} width={25} alt='staking' />
              </ListItemIcon>
              <ListItemText primary='Staking' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='Farming' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='NFT' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <img className="mr-2" src={more} width={25} alt='more' />
              </ListItemIcon>
              <ListItemText primary='More' />
            </ListItem>
        </List>
      </Drawer>
      <Main open={open} className="p-0">
        <DrawerHeader />
        <Swap />
      </Main>
    </Box>
  );
}
