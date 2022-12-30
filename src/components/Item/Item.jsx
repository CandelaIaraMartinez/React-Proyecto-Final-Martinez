import { Link } from "react-router-dom";
import React from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Item({producto}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={producto.img}
      />
      <CardContent>
        <Link to={`/item/${producto.id}`}>
        <Typography gutterBottom variant="h5" component="div">
        {producto.name}
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
        ${producto.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Item;