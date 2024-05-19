import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'
import Header from './Header'
import HeaderTop from './HeaderTop'

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white', color: '#c47335' }}>
     <HeaderTop />
     <Header />
     <div className="background-section">
     <div className="background-section__text">Free your wardrobe</div>
        <button className="background-section__button"><span className="background-section__button-text">Shop</span>
          <span className="background-section__button-text">Now</span></button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <footer >
       
      </footer>
    </div>
  );
};

export default Home;