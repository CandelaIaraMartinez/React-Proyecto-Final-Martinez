import { useContext } from 'react';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const count = useContext(CartContext);
  
  return (
    <div className="shopping-cart">
      <ShoppingCartIcon />
      <div className="cart_count">
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Cart;
