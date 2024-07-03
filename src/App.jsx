import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Signup from "./pages/signup";
import Support from "./pages/support";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Front from "./pages/front";
import "../src/index.css";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />      
          <Route path="/support" element={<Support />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
