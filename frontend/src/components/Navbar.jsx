import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="EcoFuture Logo" className="w-36" />
        </Link>

        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          {['COLLECTION', 'ABOUT', 'CONTACT', 'IMPACT TRACKER', 'EVENTS', 'BLOG'].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-green-600 transition duration-300"
            >
              {item}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate('/collection');
            }}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search Icon"
          />
          <div className="relative group">
            <img
              onClick={() => (!token ? navigate('/login') : null)}
              src={assets.profile_icon}
              className="w-6 cursor-pointer"
              alt="Profile Icon"
            />
            {token && (
              <div className="dropdown-menu hidden group-hover:block absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                <div
                  className="dropdown-item hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer px-4 py-2 rounded-t"
                  onClick={() => navigate('/orders')}
                >
                  My Orders
                </div>
                <div
                  className="dropdown-item hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer px-4 py-2 rounded-b"
                  onClick={logout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-6 cursor-pointer" alt="Cart Icon" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-6 cursor-pointer sm:hidden"
            alt="Menu Icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
