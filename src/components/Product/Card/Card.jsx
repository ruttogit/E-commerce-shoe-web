import React from 'react'
import heartUnliked from "../../../icons/heart.svg"
import heartliked from "../../../icons/like.svg"
import { useState } from 'react';

function Card({item, handleAddToCart}) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeBtn = (index) => {
        setIsLiked(!isLiked);
    }

  return (
    <>
                <img src={isLiked ? heartliked : heartUnliked} alt="" className='heart-img' onClick={handleLikeBtn}/>
                <div className="product-img-cont">
                    <img src={item.image} alt="" className='product-img'/>
                </div>
                <div className="ratings">
                    {item.ratings.map((star) =>{
                        return <img src={star} alt="" />
                    })}

                </div>
                <p>{item.name}</p>
                <h2>${item.price.toFixed(2)}</h2>
                <button className='btn add-to-cart-btn' onClick={ () => {handleAddToCart(item)}}>Add To Cart</button> 
    </>
  )
}

export default Card