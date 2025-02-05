import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Browse our latest products and add them to your cart.</p>
      <Link to="/products">Go to Products</Link>
    </div>
  );
}

export default Home;
