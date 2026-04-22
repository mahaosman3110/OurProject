import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product.jsx';

function ProductDetails ({cart,setCart}) {
    const api="https://dummyjson.com/products";
    const [productData,setProductData]= useState({})
    const params = useParams();
    useEffect(()=>{
fetch(`${api}/${params.id}`)
.then((res)=> res.json()).then((data)=> setProductData(data))
},[params.id])
  return (
<div>
{productData.id && <Product product={productData} showButton={false} cart={cart} setCart={setCart}/>}
        
</div>
  )
}
export default ProductDetails

