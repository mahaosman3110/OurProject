import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Slide1 from './Components/Carousels/Slide1';
import './App.css';
import CustomNavbar from './Components/Header/CustomNavbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Products from './Components/Main/Products';
import ProductDetails from './Components/Main/ProductDetails';
import Cart from './Components/Main/Cart';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
function App() {
  const [cart, setCart] = useState([]);
return (
  <div className="App">
    <CustomNavbar cart={cart} />
    <Routes>
      <Route path="/" element={
        <>
          <Slide1 />
          <Products cart={cart} setCart={setCart} />
        </>
      } />
      <Route path="/Product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
    <Footer/>
  </div>
);

}

export default App;
