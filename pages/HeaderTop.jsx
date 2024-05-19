import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <FontAwesomeIcon icon={faShoppingCart} className="header-top__cart" />
    </div>
  );
};

export default HeaderTop;