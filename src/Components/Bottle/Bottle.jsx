import React from "react";
import "./Bottle.css";

function Bottle({ bottle, handleAddToCart }) {
  return (
    <div className="bottle">
      <img src={bottle.img} alt={bottle.name} />
      <h3>{bottle.name}</h3>
      <p className="price">${bottle.price}</p>
      <p>Seller: {bottle.seller}</p>
      <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
    </div>
  );
}

export default Bottle;
