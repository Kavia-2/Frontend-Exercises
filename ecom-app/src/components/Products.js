import React, { useEffect, useState } from "react";
import axios from "axios";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(new Set());
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartItems(prev => new Set(prev).add(product.id)); 
    setPopup(product.title); 
    setTimeout(() => setPopup(null), 2000);
  };

  return (
    <div>
      <h1>Products</h1>
      {popup && <div style={{ position: "fixed", top: "10px", right: "10px", background: "green", color: "white", padding: "10px", borderRadius: "5px" }}>{popup} added to cart</div>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)} disabled={cartItems.has(product.id)}>
              {cartItems.has(product.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
