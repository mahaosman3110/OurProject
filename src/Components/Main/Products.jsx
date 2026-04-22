import React, { useState,useEffect } from 'react'
import Product from './Product'
const Products = ({cart,setCart}) => {
  const api = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api).then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: '40px 0' }}>
<div className='container'>
<div className="text-center mb-5">
<h2 style={{ color: "#ff1493", fontWeight: 'bold' }}>You Can See Products Here</h2>
    <div style={{ width: '80px', height: '4px', backgroundColor: '#ff69b4', margin: '10px auto', borderRadius: '2px' }}></div>
        </div>

 <div className='row g-4'> 
  {products.map((item) => (
   <div className='col-12 col-md-4 col-lg-3' key={item.id}>
 <Product product={item} showButton={true} cart={cart} setCart={setCart}/>
 </div>
    ))}
      </div>
      </div>
    </div>
  );
}
export default Products
