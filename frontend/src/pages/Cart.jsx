import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, delivery_fee } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [removeDeliveryFee, setRemoveDeliveryFee] = useState(false); // Tracks if delivery fee is removed
  const [error, setError] = useState('');

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const product = products.find((p) => p._id === items);
            const discount = 0.15; // 15% discount
            const discountedPrice = product
              ? (product.price * (1 - discount)).toFixed(2)
              : null;

            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
              discountedPrice: discountedPrice,
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  // Function to validate and apply coupon code
  const applyCoupon = () => {
    const couponMapping = {
      EcoSri10: 10,
      EcoSri20: 20,
      EcoSri30: 30,
      EcoSri40: 40,
      EcoSri50: 50,
      EcoSri60: 60,
      EcoSri70: 70, // Remove delivery fee for this coupon and above
      EcoSri80: 80,
      EcoSri90: 90,
      EcoSri100: 100,
    };

    if (couponMapping[couponCode]) {
      setCouponDiscount(couponMapping[couponCode]);
      setError('');

      // Remove delivery fee for specific coupons
      if (couponCode === 'EcoSri70' || couponCode === 'EcoSri80' || couponCode === 'EcoSri90' || couponCode === 'EcoSri100') {
        setRemoveDeliveryFee(true);
      } else {
        setRemoveDeliveryFee(false);
      }
    } else {
      setError('Invalid coupon code.');
      setCouponDiscount(0);
      setRemoveDeliveryFee(false);
    }
  };

  // Calculate total discounted price
  const calculateTotal = () => {
    const subtotal = cartData.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
    const finalDeliveryFee = removeDeliveryFee ? 0 : delivery_fee;
    return Math.max(subtotal + finalDeliveryFee - couponDiscount, 0).toFixed(2);
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p>Your cart is empty.</p>
            <button
              onClick={() => navigate('/collection')}
              className="mt-4 px-6 py-2 bg-green-600 text-white"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData?.image[0]}
                    alt={productData?.name || 'Product'}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData?.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {item.discountedPrice}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            );
          })
        )}
      </div>

      {cartData.length > 0 && (
        <div className="flex flex-col items-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal cartData={cartData} currency={currency} />
            <div className="mt-6">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
                className="border px-4 py-2 rounded w-full mb-2"
              />
              <button
                onClick={applyCoupon}
                className="bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                Apply Coupon
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {couponDiscount > 0 && (
                <p className="text-green-600 mt-2">
                  Coupon Applied! Discount: ${couponDiscount}
                </p>
              )}
              {removeDeliveryFee && (
                <p className="text-green-600 mt-2">Delivery Fee Removed!</p>
              )}
            </div>
            <div className="text-right mt-6">
              <p className="text-lg font-bold">
                Total: {currency}
                {calculateTotal()}
              </p>
            </div>
            <div className="w-full text-end">
              <button
                onClick={() => navigate('/place-order')}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
