import React from "react";
import Image from "next/image";
import { SfButton, SfBadge } from "@storefront-ui/react";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Head from "next/head";
import ProductCardDetails from "../components/ProductCardDetails";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) return;

    fetch(`https://fakestoreapi.com/products/${router.query.id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [router.query.id]);

  return (
    <main>
      <Head>
        <title>Bob's Super Spectacular Wonderful Amazing Store</title>
        <meta
          name="description"
          content="A super spectacular wonderful amazing store for clothing "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="product-page">
        <div className="product-image-container">
          <img
            className="main-image"
            src={products.image}
            alt={products.title}
          ></img>

          <div className="product-gallery">
            <img src={products.image} alt="Product Image" />
            <img src={products.image} alt="Product Image" />
            <img src={products.image} alt="Product Image" />
          </div>
        </div>
        <ProductCardDetails productDetails={products}/>
      </div>
      <Footer />
    </main>
  );
}
