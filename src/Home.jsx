import React from 'react'
import Hero from './components/hero/Hero'
import Product from './components/Product/Product'
import Subscribe from './components/subscribe/Subscribe'

function Home({handleAddToCart}) {
  return (
    <>
        <Hero/>
        <Product handleAddToCart={handleAddToCart}/>
        <Subscribe/>
    </>
  )
}

export default Home