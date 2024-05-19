import React from 'react';


const ProductCard = ({ item }) => {
  return (
    <div style={{  padding: '10px', margin: '10px', textAlign: 'center' }}>
    <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
    <p>{item.price}</p>
  </div>
  );
};

export default ProductCard;