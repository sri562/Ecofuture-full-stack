import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems, setCartItems, backendUrl, token } = useContext(ShopContext);
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/orders/place`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();

      if (data.success) {
        // Clear the cart
        setCartItems({});
        // Navigate to Order Confirmation page
        navigate('/order-confirmation', { state: { orderNumber: data.orderNumber } });
      } else {
        console.error('Failed to place order:', data.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="place-order">
      <h1>Place Your Order</h1>
      <button onClick={handlePlaceOrder} className="bg-green-600 text-white p-4 rounded">
        Confirm Order
      </button>
    </div>
  );
};

export default PlaceOrder;
