import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//import ExFooter from '../ExFooter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContentPage1 from './ContentPagee';
//import MyImageCarousel from '../MyImageCarousel';
//import MultiActionAreaCard from './MultiActionArea';
// import {  useNavigate } from 'react-router-dom';
// import Centrecomponent from './Centrecomponent';
// import ActionAreaCard from './ActionAreaCard';
import Logout from './Logout'
const categories = ['Face Care', 'Hair Care', 'Skin Care', 'Personal Hygiene', 'Cosmetics','Lip Care','Eye Care','Foot Care',<a href='/products'>Products</a>,<Logout></Logout>];

const additionalItems = ['Daily Deals', 'Brands', 'New Release', 'Styling Tips', 'Special Day Wear'];

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
//   const navigate=useNavigate();

//   const handleLoginClick = () => {
//     navigate('/login')
//   };

  const handleContactClick = () => {
    console.log('Clicked on contact');
  };

  const handleCategoryClick = (category) => {
    console.log(`Clicked on category: ${category}`);
    // Add logic to handle category click
  };

  const handleProfileClick=()=>{

  }
  const handleCartClick=()=>{

  }

  const handleAdditionalItemClick = (item) => {
    console.log(`Clicked on additional item: ${item}`);
    // Add logic to handle additional item click
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: ``}}>
      {/* Header */}
      <AppBar position="static" style={{backgroundColor:'	#004d4d'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1,fontFamily:'caveat'}}>
            GLAM MART
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1,fontFamily:'brush script'}}>
            ...YOUR FASHION STATEMENT...
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <SearchIcon />
            </div>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="filled"
                InputProps={{ 'aria-label': 'search' }}
            style={{paddingRight: '112px'}}
              />
          </div>
            <IconButton onClick={handleProfileClick}>
             <AccountCircleIcon style={{width:'40px',height:'30px'}}/>
            </IconButton>
            <IconButton onClick={handleCartClick}>
              <ShoppingCartIcon/>
            </IconButton>
          <Button color="inherit" onClick={handleContactClick}>
             Orders
          </Button>
        </Toolbar>
      </AppBar>

      {/* Navigation Bar */}
      <AppBar position="relative" color="default" style={{backgroundColor:''}}>
        <Toolbar>
          {categories.map((category, index) => (
            <Button key={index} onClick={() => handleCategoryClick(category)} style={{marginLeft:'50px'}}>
              {category}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      

      {/* Side Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose} width={300}>
        <List>
          {additionalItems.map((item, index) => (
            <ListItem button key={index} onClick={() => handleAdditionalItemClick(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
       <div>
        {/* Your main content goes here */}
         <div>
            <ContentPage1/>
        </div> 
        {/* <div>
          <MyImageCarousel/>
        </div> */}
        {/* <div>
            <MultiActionAreaCard/>

        </div> */}
        
      </div> 
            
      {/* Footer */}
      {/* <ExFooter onClick={() => {}} /> */}
    </div>
  );
};

export default App;

