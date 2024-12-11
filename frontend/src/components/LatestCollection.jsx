import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10)); // Fetch the latest 10 products
    }, [products]);

    return (
        <div className="text-center my-6">
        {/* Website Information Section */}
        <div className="my-6">
          <h3 className="text-2xl font-bold">Welcome to EcoFuture</h3>
          <p className="w-3/4 m-auto text-sm md:text-base text-gray-600 my-2">
            At EcoFuture, we are dedicated to promoting sustainable living and offering
            eco-friendly products that meet high environmental standards. Our mission is
            to make sustainable shopping accessible to everyone, so you can shop with a
            purpose and make a positive impact on the planet.
          </p>
          <p className="text-sm md:text-base text-gray-600 my-2">
            Join us in our journey toward a greener future. Explore our latest collections
            and discover products that not only look good but are good for the environment!
          </p>
        </div>
  
        {/* Latest Collections Section */}
        <div className="my-10">
          <div className="py-8 text-center text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
              Discover our newest arrivals that blend style and comfort. Explore the
              latest trends in fashion, curated just for you.
            </p>
          </div>
        </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
