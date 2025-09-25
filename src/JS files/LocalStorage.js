// Save cart array to localStorage
export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Load cart array from localStorage
export const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Add item to cart and return updated array
export const addToCart = (cart, bottle) => {
  const newCart = [...cart, bottle];
  saveCartToLocalStorage(newCart);
  return newCart;
};

// Remove item from cart by index
export const removeFromCart = (cart, indexToRemove) => {
  const newCart = cart.filter((_, index) => index !== indexToRemove);
  saveCartToLocalStorage(newCart);
  return newCart;
};
