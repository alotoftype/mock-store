import React from "react";
import Image from "next/image";
import Head from "next/head";
import { SfButton, SfBadge } from "@storefront-ui/react";
import Men from "../components/Men";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      .then((json) => setProducts(json));

  }, []);

  return (
      <main>
          <Head>
        <title>Bob's Super Spectacular Wonderful Amazing Store</title>
        <meta
          name="description"
          content="A super spectacular wonderful amazing store for clothing "
        />
      </Head>
    <div className="plpContainer">
      <Header />

      <Men />
      <Products productList={products} />
      <Products productList={products} />
    </div>
    <Footer />
    </main>
  );
}
