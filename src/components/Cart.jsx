import React from "react";
import { useCart } from '../hooks/useCart.jsx';
import '../css/Cart.css';

const Cart = () => {
  const {
    cartItems,
    total,
    isCartOpen,
    removeFromCart,
    updateQuantity,
    toggleCart,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>🛒 Carrito de Compras</h2>
          <button className="close-btn" onClick={toggleCart}>×</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Tu carrito está vacío</p>
            <button onClick={toggleCart}>Seguir comprando</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>
              <div className="cart-actions">
                <button className="clear-btn" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="checkout-btn">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
