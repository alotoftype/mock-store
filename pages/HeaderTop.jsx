import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const HeaderTop = () => {

  const router = useRouter();

  const handleCartClick = () => {
    router.push('/cart');
  };


  return (
    <div className="header-top">
      <FontAwesomeIcon icon={faShoppingCart} className="header-top__cart" onClick={handleCartClick}   />
    </div>
  );
};

export default HeaderTop;