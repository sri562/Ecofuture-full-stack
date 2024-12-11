import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      const response = await axios.post('http://localhost:4000/api/user/forgot-password', { email });
      setMessage(response.data.message);
      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Something went wrong!');
      toast.error(error.response ? error.response.data.message : 'Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Sending Reset Link...' : 'Send Reset Link'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
