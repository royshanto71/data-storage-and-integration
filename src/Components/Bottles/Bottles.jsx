import React, { use, useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToCart,
  loadCartFromLocalStorage,
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
    console.log(newCart);
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>Cart Items: {cart.length}</p>
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
