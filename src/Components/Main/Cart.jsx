import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: '100px 20px', minHeight: '80vh' }}>
 <h2>Your Shopping Cart ({cart.length})</h2>
   {cart.length === 0 ? (
   <p>Your cart is empty!</p>
  ) : (
 cart.map((item) => (
 <div key={item.id} style={{ 
display: 'flex', 
  alignItems: 'center', 
 gap: '20px', 
 borderBottom: '1px solid #ddd', 
    padding: '15px' 
 }}>    <img src={item.thumbnail} width="80" alt={item.title} style={{ borderRadius: '8px' }} />
          <div style={{ flex: 1 }}>
       <h4 style={{ margin: '0' }}>{item.title}</h4>
        <p style={{ color: '#666' }}>Price: ${item.price}</p>
       </div>
       <button 
              onClick={() => removeItem(item.id)}   style={{ backgroundColor: '#f34eae', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '5px' }}
            >
   <DeleteIcon fontSize="small"/>     Remove
</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
