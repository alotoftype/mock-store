import React from 'react';
import { useRouter } from 'next/router';



const ProductCard = ({ item }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${item.id}`);;
  };

  return (
    <div onClick={handleClick} style={{  padding: '10px', margin: '10px', textAlign: 'center' }}>
    <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
    <p>{item.price}</p>
  </div>
  );
};

export default ProductCard;