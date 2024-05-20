import React, { useEffect, useState } from 'react';
import HeaderTop from './Header';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#edf7f6', color: '#56351e' }}>
      <HeaderTop />
      <div className="background-section" style={{ marginBottom: '20px' }}>
        <img src="/images/Hero.png" alt="Header Image" style={{ width: '100%', height: 'auto' }} />
      </div>
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item__image" />
              <div className="cart-item__details">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <button onClick={handleCheckout} className="checkout-button">Checkout</button>
      )}
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
};

export default CartPage;
