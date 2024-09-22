import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart"
import Nav from "./components/NavBar/Nav";
import Home from "./Home";
import { useEffect, useState } from "react";

const cartFromLocalStorage= JSON.parse(localStorage.getItem("cart") || "[]")


function App() {
  const [cart, setCart] = useState(cartFromLocalStorage)


  useEffect(() =>{
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart])
  const handleAddToCart = (item) => {
    let notInCart = true;
    cart.forEach((product) =>{
      if (item.id === product.id){
        notInCart = false
      }
    })
    // handle item that is already in cart
    if (notInCart){
      setCart([...cart, item]);
    }else if (!notInCart){
      window.alert('alreay in cart');
    }
  };
  // handle quantity of item
  const [query, setQuery] = useState("");
  return (
    <>
    <BrowserRouter>
      <Nav cartQuantity={cart.length} setQuery={setQuery}/>
      <Routes >
        <Route  path='/' element={<Home handleAddToCart={handleAddToCart} query={query} setQuery={setQuery}/>}>
        </Route>
        <Route path='/cart' element={<Cart cartQuantity={cart.length} cart={cart} setCart={setCart} />}> 
        {/* handleChange={handleChange} */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
