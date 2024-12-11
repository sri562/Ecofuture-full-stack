import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = ({ couponDiscount = 0 }) => {
  const { currency, delivery_fee, cartItems, products } = useContext(ShopContext);

  // Calculate the subtotal using discounted prices
  const getCartAmount = () => {
    const discount = 0.15; // 15% discount
    return Object.keys(cartItems).reduce((total, itemId) => {
      const product = products.find((p) => p._id === itemId);
      if (!product) return total;

      const discountedPrice = product.price * (1 - discount);
      const productTotal = Object.keys(cartItems[itemId]).reduce((sizeTotal, size) => {
        const quantity = cartItems[itemId][size];
        return sizeTotal + quantity * discountedPrice;
      }, 0);

      return total + productTotal;
    }, 0);
  };

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : Math.max(subtotal + delivery_fee - couponDiscount, 0);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {subtotal.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee.toFixed(2)}
          </p>
        </div>
        {couponDiscount > 0 && (
          <div className="flex justify-between text-green-600">
            <p>Coupon Discount</p>
            <p>
              -{currency} {couponDiscount.toFixed(2)}
            </p>
          </div>
        )}
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>
            {currency} {total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
