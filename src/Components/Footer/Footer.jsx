import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
    <footer className=" text-dark pt-5 mt-5"
      style={{backgroundColor:'#f853a0'}}>
      <div className="container text-center text-md-start">
     <div className="row">
          
     <div className="col-md-4 mb-3">
    <h5>E-commerce</h5>
    
    <p>E-Commerce Website Using React </p>
 </div>

  <div className="col-md-4 mb-3">
       <h6>Links</h6>
      <ul className="list-unstyled">
     <li><a href="/" className="text-dark">Home</a></li>
        <li><a href="/cart" className="text-dark">Cart</a></li>
            </ul>
          </div>

     <div className="col-md-4 mb-3">
   <h6>Contact</h6>
    <p>Email: @email.com</p>
  </div>

     </div>
      </div>

     <div className="text-center p-3 "
          style={{backgroundColor:'#f853a0'}}>

  © 2026 All Rights Reserved
 </div>
    </footer>
    </div>
  );
}

export default Footer
