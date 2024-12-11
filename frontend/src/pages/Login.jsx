import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext'; // Assuming you have a ShopContext for managing token
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // For navigation

const Login = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const [currentState, setCurrentState] = useState('Login'); // Track current state
  const { token, setToken, backendUrl } = useContext(ShopContext); // Assuming you're using ShopContext for token management

  const [name, setName] = useState(''); // State for sign up name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); // Address field for sign-up
  const [phone, setPhone] = useState(''); // Phone field for sign-up
  const [resetEmail, setResetEmail] = useState(''); // State for reset password email
  const [message, setMessage] = useState(''); // To display reset message

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === 'Sign Up') {
        // Sign Up
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password, address, phone });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Account created successfully!');
          navigate('/'); // Navigate to home after successful registration
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === 'Login') {
        // Login
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Logged in successfully!');
          navigate('/'); // Navigate to home after successful login
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === 'Forgot Password') {
        // Forgot Password
        const response = await axios.post(`${backendUrl}/api/user/forgot-password`, { email: resetEmail });
        if (response.data.success) {
          setMessage('Password reset link sent to your email!');
        } else {
          setMessage(response.data.message || 'Error occurred!');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Something went wrong!');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/'); // Navigate to home page if the user is logged in
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      {/* Login Form */}
      {currentState === 'Login' && (
        <form onSubmit={onSubmitHandler} className="w-full">
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">Login</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required />
          <button className="bg-black text-white font-light px-8 py-2 mt-4">Sign In</button>
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer mt-4 text-sm">Create an account</p>
        </form>
      )}

      {/* Forgot Password */}
      {currentState === 'Forgot Password' && (
        <form onSubmit={onSubmitHandler} className="w-full">
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">Forgot Password</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          <input onChange={(e) => setResetEmail(e.target.value)} value={resetEmail} type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Enter your email" required />
          <button className="bg-black text-white font-light px-8 py-2 mt-4">Send Reset Link</button>
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer mt-4 text-sm">Back to Login</p>
        </form>
      )}

      {/* Sign Up Form */}
      {currentState === 'Sign Up' && (
        <form onSubmit={onSubmitHandler} className="w-full">
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">Sign Up</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required />
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required />
          <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Address" required />
          <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Phone" required />
          <button className="bg-black text-white font-light px-8 py-2 mt-4">Sign Up</button>
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer mt-4 text-sm">Already have an account? Login here</p>
        </form>
      )}
    </div>
  );
};

export default Login;
