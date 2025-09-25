import React, { use, useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToCart,
  loadCartFromLocalStorage,
  removeFromCart,
} from "../../JS files/LocalStorage";

function Bottles({ bottlesPromise }) {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    setCart(loadCartFromLocalStorage());
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = addToCart(cart, bottle);
    setCart(newCart);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = removeFromCart(cart, index);
    setCart(newCart);
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>Cart Items: {cart.length}</p>

      {/* Cart list with X button */}
      <div
        className="cart-container"
        style={{
          marginBottom: "20px",
          border: "2px dashed black",
          borderRadius: "20px",
          margin: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "500px",
          gap: "10px",
          minHeight: "200px",
        }}
      >
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
              border: "2px dashed black",
              borderRadius: "20px",
              width: "300px",
            }}
          >
            <span>{item.name}</span>
            <button
              onClick={() => handleRemoveFromCart(index)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "red",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Bottles list */}
      <div className="bottles-container">
        {bottles.map((bottle, index) => (
          <div key={bottle.id || index}>
            <Bottle bottle={bottle} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bottles;
