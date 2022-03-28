import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height='500'
          image="https://all-auto.org/wp-content/uploads/2021/04/Ferrari-599-2.jpg"
          alt="Abc"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            A
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}