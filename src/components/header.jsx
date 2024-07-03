import React from "react";

function Navbar() {
  return (
    <header className="d-flex flex-wrap justify-content-center  border-bottom navbar">
      <a
        href="/"
        className="d-flex align-items-center mb-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img
          src="https://zerodha.com/static/images/logo.svg"
          width="150"
          height="20"
          alt="Zerodha Logo"
        />
      </a>
      <ul className="nav nav-pills navbar">
        <li className="nav-item">
          <a href="/signup" className="nav-link">
            Signup
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/product" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="/pricing" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="/support" className="nav-link">
            Support
          </a>
        </li>    
      </ul>
    </header>
  );
}

export default Navbar;
