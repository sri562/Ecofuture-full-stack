import React from 'react';

const SustainabilityHighlights = () => {
  return (
    <div className="py-20 px-6 sm:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        How We’re Driving Sustainability
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Materials and Environmental Programs */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Sustainable Materials & Practices
          </h3>
          <p className="text-gray-600">
            We prioritize eco-conscious materials and sustainable production
            methods to reduce waste and minimize our environmental footprint.
          </p>
        </div>

        {/* Social Responsibility Programs */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Ethical Production Standards
          </h3>
          <p className="text-gray-600">
            Our commitment ensures all our products are made under fair, safe,
            and humane working conditions, supporting ethical labor practices.
          </p>
        </div>

        {/* Transparency in Supply Chain */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Transparent Supply Chain
          </h3>
          <p className="text-gray-600">
            We provide detailed information about our suppliers and facilities,
            ensuring you know exactly where and how your clothes are made.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityHighlights;
