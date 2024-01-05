import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://wallpaperaccess.com/full/1190462.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           NEW RELEASE
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Check out our new released amazing products.Enchance your shine with glam release!!!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
