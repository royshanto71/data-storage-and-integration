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
