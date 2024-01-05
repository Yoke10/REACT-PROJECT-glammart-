import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import "./ContentPage.css";
import MyImageCarousel from './MyImageCarousel';
import SizeAvatars from './ImageAvatars';

const ContentPage1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3004/products');
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  const handleOnClick = (id) => {
    console.log("Clicked", id);
  }

  return (
    <div className='product-page-content-container' style={{ paddingTop: '5px' }}>
      <h1 style={{textAlign:'center',fontFamily:'Segoe Script'}}>~~GO GLAM~~</h1>
      <MyImageCarousel />
      <br></br>
      <h2>Shop on Top Brands</h2>
      <div>
        <SizeAvatars />
      </div>
      <br></br>
      <br></br>
      <h2>Explore our New Release</h2>
      <Grid container spacing={2}>
        
        {productList.map((product, index) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              onClick={() => handleOnClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ boxShadow: hoveredIndex === index ? '0 0 10px rgba(0, 0, 0, 1.5)' : 'none' }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.imageUrl}
                alt={product.productName}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                  <h3>{product.productName}</h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ContentPage1;
