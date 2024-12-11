import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderNumber, amount, shippingID, deliveryDate } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-green-500 mb-4">Order Placed Successfully!</h1>
      <p className="text-lg mb-4">Thank you for your purchase. Your order has been placed successfully.</p>
      <p className="text-md mb-4"><strong>Order Number:</strong> {orderNumber}</p>
      <p className="text-md mb-4"><strong>Shipping ID:</strong> {shippingID}</p>
      <p className="text-md mb-4"><strong>Delivery Date:</strong> {deliveryDate}</p>
      <p className="text-md mb-6"><strong>Order Total:</strong> ${amount.toFixed(2)}</p>
      <button
        onClick={() => window.location.href = '/orders'}
        className="bg-black text-white px-6 py-2 rounded-md"
      >
        View My Orders
      </button>
    </div>
  );
};

export default OrderConfirmation;
