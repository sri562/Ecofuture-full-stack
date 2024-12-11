import React from 'react';
import logo from '../assets/logo.png'; // Import the logo
import communityIcon from '../assets/communityIcon.png';
import ecoGuaranteeIcon from '../assets/EcoGuarantee.png';
import ecoResponsibilityIcon from '../assets/EcoResponsibility.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-50 text-sm text-gray-600">
      {/* Main Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 px-6 sm:px-12">
        {/* Brand and Mission */}
        <div>
          <img src={logo} alt="EcoFuture Logo" className="mb-5 w-32" />
          <p className="w-full sm:w-2/3">
            Shop with EcoFuture and discover a seamless, eco-friendly shopping
            experience like never before—where sustainability meets convenience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-medium mb-5">ECOFUTURE COMPANY</p>
          <ul className="flex flex-col text-gray-600 cursor-pointer">
            <li onClick={scrollToTop} className="mb-2">
              Home
            </li>
            <li onClick={scrollToTop} className="mb-2">
              About Us
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Sustainability
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col">
            <li className="mb-2">Phone: +562-580-9442</li>
            <li className="mb-2">Email: contact@EcoFuture.com</li>
            <li className="mb-2">Address: Long Beach, CA</li>
          </ul>
        </div>
      </div>

      {/* Guarantees Section */}
      <div className="bg-gray-100 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 sm:px-12">
          <div className="text-center">
            <img
              src={ecoGuaranteeIcon}
              alt="Eco Guarantee Icon"
              className="w-12 mb-4 mx-auto"
            />
            <p className="font-medium">Ironclad Eco Guarantee</p>
            <p>We guarantee every sustainable product we make.</p>
          </div>
          <div className="text-center">
            <img
              src={ecoResponsibilityIcon}
              alt="Eco Responsibility Icon"
              className="w-12 mb-4 mx-auto"
            />
            <p className="font-medium">Eco Responsibility</p>
            <p>We take responsibility for our environmental impact.</p>
          </div>
          <div className="text-center">
            <img
              src={communityIcon}
              alt="Support Icon"
              className="w-12 mb-4 mx-auto"
            />
            <p className="font-medium">Grassroots Activism</p>
            <p>We support communities driving positive change.</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-50">
        <hr className="border-gray-200" />
        <p className="py-5 text-center">
          Copyright 2024 @ EcoFuture.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
