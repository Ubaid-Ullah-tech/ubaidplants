import { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// CartProvider to wrap around the components that need cart functionality
export const CartProvider = ({ children }) => {
  // State to hold cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to the cart
    alert('Item added succesfully to your cart')  
};

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId)); // Remove item from the cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children} {/* Render the children components */}
    </CartContext.Provider>
  );
};
