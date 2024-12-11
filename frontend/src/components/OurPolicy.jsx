import React from 'react';
import { assets } from '../assets/assets';
import Carbon from '../assets/Carbon.jpeg';
import Easy from '../assets/Easy.png';
import sustainable from '../assets/sustainable.png';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {/* Eco-Friendly Products */}
      <div>
        <img src={sustainable} className="w-12 m-auto mb-5 rounded-lg shadow-md" alt="Sustainability Icon" />
        <p className="font-semibold">Sustainable Practices</p>
        <p className="text-gray-400">
          Committed to eco-friendly products and practices that benefit the environment.
        </p>
      </div>

      
      {/* Hassle-Free Returns */}
      <div>
        <img src={Easy} className="w-12 m-auto mb-5 rounded-lg shadow-md" alt="Return Policy Icon" />
        <p className="font-semibold">Easy Returns Policy</p>
        <p className="text-gray-400">
          Enjoy hassle-free returns within 7 days for a seamless shopping experience.
        </p>
      </div>

      {/* Customer Support */}
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support Icon" />
        <p className="font-semibold">24/7 Customer Support</p>
        <p className="text-gray-400">
          Our dedicated team is here to assist you round the clock.
        </p>
      </div>

      
      {/* Carbon Neutral Shipping */}
      <div>
        <img src={Carbon} className="w-12 m-auto mb-5 rounded-lg shadow-md" alt="Carbon Neutral Shipping Icon" />
        <p className="font-semibold">Carbon Neutral Shipping</p>
        <p className="text-gray-400">
          We offset carbon emissions for every delivery to minimize environmental impact.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
