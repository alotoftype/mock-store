import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

import HeaderTop from './HeaderTop';

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=8');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#edf7f6', color: '#56351e' }}>
     <HeaderTop />
     <img src="men.png" alt="Logo" className="list_logo" />
      <div className="productListPage">
      
    </div>
      <div className="products-grid">
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      
      </div>
      <footer className="footer">
       
      </footer>
    </div>
  );
};

export default ProductList;