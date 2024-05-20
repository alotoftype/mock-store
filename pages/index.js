import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProductCard from './ProductCard'
import Header from './Header'
import HeaderTop from './HeaderTop'

const Home = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemIds = [2, 6, 17, 19];
        const itemPromises = itemIds.map(id =>
          axios.get(`https://fakestoreapi.com/products/${id}`)
        );
        const itemResponses = await Promise.all(itemPromises);
        setItems(itemResponses.map(response => response.data));
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleShopNow = () => {
    router.push('/listpage');
  };

  
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white', color: '#c47335' }}>
     <HeaderTop />
     <Header />
     <div className="background-section">
     <div className="background-section__text">Free your wardrobe</div>
        <button className="background-section__button" onClick={handleShopNow} ><span className="background-section__button-text">Shop</span>
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