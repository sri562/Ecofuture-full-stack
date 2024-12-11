import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        if (!token) {
          setError("You are not logged in.");
          setLoading(false);
          return;
        }

        // Fetch user profile and orders from the backend
        const profileResponse = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        });

        if (profileResponse.data.success) {
          setUser(profileResponse.data.user); // Set user data in state
        } else {
          setError(profileResponse.data.message || "Failed to fetch profile.");
          return;
        }

        const ordersResponse = await axios.get("/api/user/orders", {
          headers: {
            Authorization: `Bearer ${token}`, // Fetch orders for the user
          },
        });

        if (ordersResponse.data.success) {
          setOrders(ordersResponse.data.orders); // Set orders in state
        } else {
          setError(ordersResponse.data.message || "Failed to fetch orders.");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching your profile or orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>

      {/* Display Orders */}
      <div className="orders-container">
        <h2>Your Orders</h2>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li key={order.orderNumber} className="order-item">
                <p>Order Number: {order.orderNumber}</p>
                <p>Amount: ${order.amount}</p>
                <p>Shipping ID: {order.shippingID}</p>
                <p>Delivery Date: {order.deliveryDate}</p>
                <p>Status: {order.status}</p>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
