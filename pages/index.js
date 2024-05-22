import Head from "next/head";
import CollectionBanner from "./components/CollectionBanner";
import { SfButton, SfBadge } from "@storefront-ui/react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import WelcomeHeader from "./components/WelcomeHeader";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  

  useEffect(() => {
    const featuredProductsIds = [2, 6, 17, 9];

  const fetchFeaturedProducts = async (ids) => {
    console.log(ids);
    const requests = ids.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
      )
    );
    try {
      const featuredProducts = await Promise.all(requests);
      setFeaturedProducts(featuredProducts);
      console.log(featuredProducts);
    } catch {
      console.log("Error - Products not received");
    }
  };
    fetchFeaturedProducts(featuredProductsIds);

  }, []);

  return (
    <div class="">
      <Head>
        <title>Bob's Super Spectacular Wonderful Amazing Store</title>
        <meta
          name="description"
          content="A super spectacular wonderful amazing store for clothing "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WelcomeHeader />

        <Hero />
        <CollectionBanner />
        <Products productList={featuredProducts} />
        <Footer />
      </main>
    </div>
  );
}
