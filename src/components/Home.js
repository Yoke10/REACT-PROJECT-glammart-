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
import Footer from './Footer';
import {  useNavigate } from 'react-router-dom';
// import Centrecomponent from './Centrecomponent';
// import ActionAreaCard from './ActionAreaCard';
import { user } from './Usercontext';
const categories = ['Face Care', 'Hair Care', 'Skin Care', 'Personal Hygiene', 'Cosmetics','Lip Care','Eye Care','Foot Care','Accessories'];

const additionalItems = ['Daily Deals', 'Brands', 'New Release', 'Styling Tips', 'Special Day Wear'];

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const navigate=useNavigate();
  const handleLoginClick = () => {
    navigate('/login')
  };

  const handleContactClick = () => {
    console.log('Clicked on contact');
  };

  const handleCategoryClick = (category) => {
    console.log(`Clicked on category: ${category}`);
    // Add logic to handle category click
  };

  const handleAdditionalItemClick = (item) => {
    console.log(`Clicked on additional item: ${item}`);
    // Add logic to handle additional item click
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',backgroundRepeat:'no-repeat' ,background: `url(https://www.itl.cat/pngfile/big/193-1931048_fashion-wear-background-fashion-powerpoint-backgrounds.jpg` }}>
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
          <div style={{ display: 'flex', alignItems: 'centre' }}>
            <div>
              <SearchIcon />
            </div>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="filled"
                InputProps={{ 'aria-label': 'search' ,style: { color: 'white' }}}
                InputLabelProps={{
                  style: { color: 'white' } // Change 'green' to the desired label color
                }}
              />
          </div>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
          <Button color="inherit" onClick={handleContactClick}>
            Help
          </Button>
     
        </Toolbar>
      </AppBar>

      {/* Navigation Bar */}
      <AppBar position="relative" color="default" gap ='10px'>
        <Toolbar>
          {categories.map((category, index) => (
            <Button key={index} onClick={() => handleCategoryClick(category)}>
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
        {/* <Centrecomponent/>
        <div style={{marginLeft:'20px'}}>
        <ActionAreaCard/> }
          </div>*/}
          <br></br>
          <p style={{fontSize:'55px',paddingLeft:'600px',motion:''}}>Welcome to Glam Mart, <br></br><strong>your FASHION DESTINATION !</strong></p>
          <p style={{fontSize:'55px',paddingLeft:'700px',fontFamily:'Brush Script MT'}}>... Brush up your shine ...</p>
      </div> 
            
      {/* Footer */}
      <Footer onClick={() => {}} />
    </div>
  );
};

export default App;

