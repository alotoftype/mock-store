import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import HeaderTop from './HeaderTop';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#edf7f6', color: '#56351e' }}>
      <HeaderTop />

      <div className="product-detail">
        <div className="product-detail__image-container">
          <img src={product.image} alt={product.title} className="product-detail__image" />
          <div className="product-detail__thumbnails">
            <img src={product.image} alt={product.title} className="product-detail__thumbnail" />
            <img src={product.image} alt={product.title} className="product-detail__thumbnail" />
            <img src={product.image} alt={product.title} className="product-detail__thumbnail" />
          </div>
        </div>
        <div className="product-detail__info">
          <h1 className="product-detail__title">{product.title}</h1>
          <p className="product-detail__price">${product.price}</p>
          <button className="product-detail__button">Add to Cart</button>
          <p className="product-detail__description">{product.description}</p>
        </div>
        </div>
      <footer className="footer">
        Footer
      </footer>
    </div>

  );
};

export default ProductDetail;
