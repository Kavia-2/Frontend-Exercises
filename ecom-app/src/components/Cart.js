import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} width="50" />
              <span>{item.title}</span>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
