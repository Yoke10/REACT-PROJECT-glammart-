// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const ExFooter = ({ onClick }) => {
  const footerItems = ['About Us','Connect','Customer care','Terms & Condition','All rights reserved'];

  return (
    <AppBar style={{ marginTop: 'auto',backgroundColor:'pink',position:"sticky",bottom:"0px" }}>
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

export default ExFooter;
