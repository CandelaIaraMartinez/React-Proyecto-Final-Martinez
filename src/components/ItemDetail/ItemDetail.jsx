import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ItemDetail({ producto }) {
  const { addCount } = useContext(CartContext);

  const handlerAddCount = (count) => {
    addCount(count, producto);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Detalle del musical{producto.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {producto.desc}
        </Typography>
        <ItemCount onChangeCount={(e) => handlerAddCount(e)} />
      </CardContent>
    </Card>
  );
}
