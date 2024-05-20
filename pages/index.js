import Head from 'next/head'
import CollectionBanner from './components/CollectionBanner'
import { SfButton,SfBadge } from '@storefront-ui/react';
import Hero from './components/Hero'
import Products from './components/Products'
import {useState, useEffect} from 'react'


export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(res=>res.json())
    .then(json=> setProducts(json))  
  }, []) 

  return (


    <div>
      <Head>

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Hero/>
        <CollectionBanner/>
        <Products productList={products}
        />
      </main>
    </div>
  )
}
