import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Orders = () => {
  const { token, backendUrl, user } = useContext(ShopContext); // Access user details from ShopContext
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token, backendUrl]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {user ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome, {user.name}!
            </h1>
            <p className="text-gray-600 mb-6">
              Here are your orders. You can track your packages and see order details below.
            </p>
          </>
        ) : (
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome, Guest!
          </h1>
        )}

        {orders.length === 0 ? (
          <p className="text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-medium text-lg">Order #{order._id}</h2>
                  <p className="text-sm text-gray-600">
                    Date: {new Date(order.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Total: ${order.totalAmount.toFixed(2)}
                  </p>
                </div>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  onClick={() => alert(`Track Order #${order._id}`)}
                >
                  Track Package
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
