import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    const db = getFirestore();
    const orderDoc = doc(db, 'productos', id);
    getDoc(orderDoc).then((result) => {
      if (result.exists()) {
        setProducto({ ...result.data() });
      }
    });
  }, []);

  console.log(producto);
  return producto ? <ItemDetail producto={producto} /> : <h1>Cargando</h1>;
};

export default ItemDetailContainer;
