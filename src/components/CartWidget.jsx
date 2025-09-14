import React from 'react';
import { useCart } from '../hooks/useCart'; 

const CartWidget = () => {
  const { cart, toggleCart } = useCart();
  
  return (
    <div className="cart-widget" onClick={toggleCart}>
      <i className="fas fa-shopping-cart"></i>
      {cart.length > 0 && (
        <span className="cart-badge">{cart.length}</span>
      )}
    </div>
  );
};

export default CartWidget;