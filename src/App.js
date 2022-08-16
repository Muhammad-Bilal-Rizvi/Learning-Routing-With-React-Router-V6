import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import { Routes, Route } from "react-router";
// import { Link } from "react-router-dom";
//Components
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductHome from './Components/ProductHome';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/NotFound';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome...!!</h1>

      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="about">About</Link> {' '}
        <Link to="products">Product</Link> {' '}
        <Link to="/products/mobile">Mobile</Link> {' '}
        <Link to="/products/laptop">Laptop</Link> {' '}
        <button onClick={() => { navigate('/about'); }}>Display About Page</button>



        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          {/* <Route path="products" element={<Product />}></Route> */}
          {/* <Route path="products/:productId" element={<Product />}></Route> */}
          <Route path="products" element={<Product />}>
            <Route path="/products" element={<ProductHome />}></Route>
            <Route path=":productId" element={<ProductDetails />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;

// <Route path="products/:productId" element={<Product />}></Route>
// Hello Product Component {productId}
// http://localhost:3000/products/abc
// Hello Product Component abc
// http://localhost:3000/products/xyz
// Hello Product Component xyz
// http://localhost:3000/products/pqr
// Hello Product Component pqr
