import React from 'react'
import { Link } from 'react-router-dom';
const Product = (props) => {
  const { product, showButton, cart, setCart } = props;
  return (
    <div className="card h-100 shadow-sm" style={{ 
border: '1px solid #ffe4e1', 
borderRadius: '15px',
overflow: 'hidden',
transition: 'transform 0.3s' 
    }}>
      <div style={{ backgroundColor: '#fff', padding: '10px' }}>
        <img 
src={product.thumbnail} 
className="card-img-top" 
alt={product.title} 
style={{ height: '200px', objectFit: 'contain' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
     <h5 className="card-title" style={{ color: '#ff1493', fontSize: '1.1rem' }}>{product.title}</h5>
     <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
   {product.description}
 </p>
    <div className="mt-auto">
<p className="fw-bold" style={{ color: '#333' }}>Price: <span style={{ color: '#ff69b4' }}>${product.price}</span></p>
<button  onClick={() => { setCart([...cart, product]); console.log('gfh7gv');}}
style={{background:'#ff69b4', 
color:'white',
borderRadius:'20px',
border:'none',
margin:'10px',
position:'relative',
zIndex:10}}>
Add To Cart</button>{showButton && (
<Link 
className='btn w-100' 
to={`/product/${product.id}`}
style={{ 
backgroundColor: '#ff69b4', 
color: 'white', 
borderRadius: '20px',
border: 'none'
}}
> 
View Details
</Link>
)}
</div>
      </div>
    </div>
  );
}
export default  Product;
