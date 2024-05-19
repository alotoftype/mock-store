import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ItemCard from '../../components/ItemCard';
import Header from '../../components/Header';
import HeaderTop from '../../components/HeaderTop';

const ProductList = () => {
  const router = useRouter();
  const { category } = router.query;
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      const fetchItems = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };

      fetchItems();
    }
  }, [category]);

  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#edf7f6', color: '#56351e' }}>
      <HeaderTop />
      <Header />
      <div className="background-section">
        {category === "men's clothing" && <img src="/images/mens.png" alt="Men's Clothing" />}
        {category === "women's clothing" && <img src="/images/womens.png" alt="Women's Clothing" />}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
};

export default ProductList;
