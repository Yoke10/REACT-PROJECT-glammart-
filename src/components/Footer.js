// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = ({ onClick }) => {
  const footerItems = ['Terms & Conditions','Connect with us','About us'];

  return (
    <AppBar  style={{ marginTop: 'auto',backgroundColor:'	#004d4d',position:'relative' ,textAlign:'center'}}>
      <Toolbar>
        {footerItems.map((item, index) => (
          <Typography
            variant="subtitle1"
            color="inherit"
            style={{ marginRight: '16px', cursor: 'pointer' }}
            key={index}
            onClick={() => onClick(item)}
          >
            {item}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
