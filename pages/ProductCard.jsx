import React from 'react';
import { useRouter } from 'next/router';

const ProductCard = ({ item }) => {
  console.log(item);
  const router = useRouter();
  const handleClick = () => {
    if (item?.id) {
      router.push(`/${item.id}`);
    }
  };

  return (
    <div onClick={handleClick} style={{ padding: '10px', margin: '10px', textAlign: 'center' }}>
      {item?.image ? (
        <img src={item.image} alt={item.title || 'Product'} style={{ width: '100px', height: '100px' }} />
      ) : (
        <div style={{ width: '100px', height: '100px', backgroundColor: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>No Image</span>
        </div>
      )}
      <p>{item?.price ?? 'Price not available'}</p>
    </div>
  );
};

export default ProductCard;