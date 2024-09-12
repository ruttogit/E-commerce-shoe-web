import React from 'react'
import search from "../../icons/search.svg"
import cart from "../../icons/shopping-bag.svg"
import user from "../../icons/user.svg"
import "./Nav.css"
import { Link, useLocation } from 'react-router-dom'


function Nav({cartQuantity}) {
    const location = useLocation();
  return (
    <div className='Nav-bar'>
        <div className="left-nav">
            <Link to='./'>
                <h1 >DenCode</h1>
            </Link>
        </div>
        <div className="center-nav">
            <input type="search" className='sarch-input'/>
            <img src={search} alt="" className='search-icon'/>
        </div>
        <div className="right-nav">
            {location.pathname === '/' &&
            <div className="cart-nav">
                <div className="quantity-cart">{cartQuantity}</div>
                <Link to='/cart'>
                    <img src={cart} alt="cart-icon" />  
                </Link>
                
            </div>
             }
            <img src={user} alt="user-icon" />
        </div>
    </div>
  )
}

export default Nav