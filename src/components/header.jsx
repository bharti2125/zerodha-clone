import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navbar() {
   return (
     <header className="d-flex flex-wrap justify-content-center  border-bottom navbar">
       <a href="/" className="d-flex align-items-center mb-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
         {/* <svg className="bi me-2" width="40" height="32">
            <use xlink:href="https://zerodha.com/static/images/logo.svg"></use> 
         </svg> */}
         <img src="https://zerodha.com/static/images/logo.svg"  width="150" height="20" alt="Zerodha Logo" />
       </a>
       <ul className="nav nav-pills navbar">
         <li className="nav-item"><a href="/signup" className="nav-link">Signup</a></li>
         <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
         <li className="nav-item"><a href="/product" className="nav-link">Products</a></li>
         <li className="nav-item"><a href="/pricing" className="nav-link">Pricing</a></li>
         <li className="nav-item"><a href="/support" className="nav-link">Support</a></li>
         <NavDropdown title={<i className="nav-dropdown"></i>} id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Dropdown Link 1</NavDropdown.Item>
          <NavDropdown.Item href="#">Dropdown Link 2</NavDropdown.Item>
          <NavDropdown.Item href="#">Dropdown Link 3</NavDropdown.Item>
         </NavDropdown>  
         {/* <li className="nav-links"><a href="https://signup.zerodha.com" className="nav-link">Signup</a></li>
         <li className="nav-links"><a href="https://zerodha.com/open-account/" className="nav-link">Open account</a></li>
         <li className="nav-links" ><a href="https://zerodha.com/about/" className="nav-link">About</a></li>
         <li className="nav-links"><a href="https://zerodha.com/products/" className="nav-link">Products</a></li>
         <li className="nav-links"><a href="https://zerodha.com/pricing/" className="nav-link">Pricing</a></li>
         <li className="nav-links" ><a href="https://support.zerodha.com" className="nav-link">Support</a></li> */}
        </ul>  
    </header>
  );
}

export default Navbar;
