import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import HeaderTop from '../../components/HeaderTop';

const ProductCategory = () => {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/products/${category}`);
  };

  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#edf7f6', color: '#56351e' }}>
      <HeaderTop />
      <Header />
      <div className="background-section">
        <button className="background-section__button" onClick={() => handleCategoryClick("men's clothing")}>
          <span className="background-section__button-text">Men's Clothing</span>
        </button>
        <button className="background-section__button" onClick={() => handleCategoryClick("women's clothing")}>
          <span className="background-section__button-text">Women's Clothing</span>
        </button>
      </div>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
};

export default ProductCategory;