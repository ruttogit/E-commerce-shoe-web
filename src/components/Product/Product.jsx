import React from 'react'
import "./Product.css"
import { products } from '../../data'
import Card from './Card/Card'



function Product({handleAddToCart, query}) {

  return (
    <div className='product' id='products'>
        <h2>Featured Product</h2>
        <div className="products-container">

            {products.filter(product => product.name.toLowerCase().includes(query)).map((item) => {
                return                           <div className="card" key={item.id}>
                        <Card item={item} handleAddToCart={handleAddToCart}  />
            </div>
            })}
        </div>
    </div>
  )
}

export default Product