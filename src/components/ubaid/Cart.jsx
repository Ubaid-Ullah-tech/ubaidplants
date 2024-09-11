import React, { useContext } from 'react';
import { CartContext } from '../contextt/Context'; // Import CartContext, not CartProvider

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Access cart and removeFromCart from context

  return (
    <div className="p-5 pt-24">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {/* If cart is empty, show a message */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {/* Loop over each item in the cart */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-3 shadow-md"
            >
              <div className="flex items-center space-x-4">
                {/* Display the image of the item */}
                <img
                  src={item.image || 'https://via.placeholder.com/150'}
                  alt={item.title}
                  className="w-40 h-40 object-cover"
                />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>

              {/* Button to remove the item from the cart */}
              <button
                className="btn btn-error"
                onClick={() => removeFromCart(item.id)} // Call removeFromCart with item ID
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Link to go back to the home page */}
      <a href='/'>
        <button className='btn btn-success mt-5'>Back to Home</button>
      </a>
    </div>
  );
};

export default Cart;
