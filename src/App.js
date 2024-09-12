import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { Link } from "react-router-dom";

import Footer from "./components/Footer/Footer";
// import Hero from "./components/hero/Hero";
import Cart from "./components/Cart/Cart"
import Nav from "./components/NavBar/Nav";
import Home from "./Home";
import { useState } from "react";




function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    let notInCart = true;
    cart.forEach((product) =>{
      if (item.id === product.id){
        notInCart = false
      }
    })
    if (notInCart){
      setCart([...cart, item]);
      // console.log(cart);
    }else if (!notInCart){
      window.alert('alreay in cart');
    }
  };

  const handleChange = (item, d) => {
    console.log(item);
  }



  return (
    <>
    <BrowserRouter>
      <Nav cartQuantity={cart.length}/>
      <Routes >
        <Route  path='/' element={<Home handleAddToCart={handleAddToCart}/>}>
        </Route>
        <Route path='/cart' element={<Cart cartQuantity={cart.length} cart={cart} setCart={setCart} handleChange={handleChange}/>}>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
