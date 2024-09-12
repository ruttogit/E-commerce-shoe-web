import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart({ cartQuantity, cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0);

    // Handle price update based on the cart's quantity and price
    const handlePrice = () => {
        let initPrice = 0;
        cart.forEach((item) => {
            const itemQuantity = item.quantity || 1; // Ensure quantity is always defined
            initPrice += item.price * itemQuantity;
        });
        setPrice(initPrice);
    };

    // Remove an item from the cart
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    // Update quantity of individual items
    const handleQuantityChange = (item, operation) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                if (operation === '+') {
                    return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }; // Default to 1 if undefined
                } else if (operation === '-' && (cartItem.quantity || 1) > 1) {
                    return { ...cartItem, quantity: (cartItem.quantity || 1) - 1 };
                }
            }
            return cartItem;
        });
        setCart(updatedCart);
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    return (
        <div className='cart'>
            <h2 className='cart-title'>Your Cart ({cartQuantity} items)</h2>
            <div className="cart-items">
                <div className="headers">
                    <h3>Item</h3>
                    <h3>Quantity</h3>
                    <h3>Total Price</h3>
                </div>
                <div className="cart-item-list">
                    {cart.map((item) => {
                        const itemQuantity = item.quantity || 1; // Default quantity to 1 if undefined
                        return (
                            <div className="cart-card" key={item.id}>
                                <div className="cart-left">
                                    <div className="cart-thumnail">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-details">
                                        <div className="top">
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className="bottom">
                                            <div className="bottom-left">
                                                <h4>@${item.price.toFixed(2)}</h4>
                                            </div>
                                            <div className="bottom-right">
                                                <button className="btn delete-btn" onClick={() => handleRemove(item.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-center">
                                    <div className="cart-quantity">
                                        <div onClick={() => handleQuantityChange(item, '-')}>-</div>
                                        <div>{itemQuantity}</div>
                                        <div onClick={() => handleQuantityChange(item, '+')}>+</div>
                                    </div>
                                </div>
                                <div className="cart-right">
                                    <div className="price">
                                        <h3>{(item.price * itemQuantity).toFixed(2)}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="cart-totals">
                    <div className="cart-total-prices">
                        <div className="subtotal">
                            <h3>Sub-total</h3>
                            <p>${price.toFixed(2)}</p>
                        </div>
                        <div className="grand-total">
                            <h2>Grand Total</h2>
                            <p>${price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="button-checkout">
                        <button className='btn'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
