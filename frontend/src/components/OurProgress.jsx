import React from 'react';

const OurProgress = () => {
  return (
    <div className="py-20 px-6 sm:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Impact This Season
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            50% Recycled Fabrics
          </h3>
          <p className="text-gray-600">
            Half of our materials are made from recycled or upcycled fabrics,
            helping to reduce landfill waste and conserve natural resources.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Zero-Waste Packaging
          </h3>
          <p className="text-gray-600">
            We've transitioned to 100% biodegradable packaging, ensuring every
            order is delivered sustainably.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Community Outreach
          </h3>
          <p className="text-gray-600">
            We’ve partnered with local organizations to plant 10,000 trees this
            season, offsetting our carbon footprint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProgress;
