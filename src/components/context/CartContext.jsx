import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Load cart from localStorage or set it to an empty array if not found
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const AddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert('Item Added Succesfully')  
};

  // Remove item from cart by filtering it out
  const RemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ AddToCart, cart, RemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
