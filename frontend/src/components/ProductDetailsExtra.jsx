import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import w1 from '../assets/w1.png';
import w2 from '../assets/w2.png';
import w3 from '../assets/w3.jpg';

const ProductDetailsExtra = () => {
  return (
    <div className="product-details-extra">
      <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
        {/* Section 1 */}
        <SwiperSlide>
          <div className="section flex flex-col items-center text-center">
            <h2 className="text-xl font-bold">01 Every Item Gives Back</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Happy Earth is a social enterprise built around protecting our planet.
              With every item purchased, you can choose how to make a positive impact
              on the planet: plant trees, clean up trash, or fight climate change.
            </p>
            <img
              src={w1}
              alt="Every Item Gives Back"
              className="mt-6 w-[300px] h-auto"
            />
          </div>
        </SwiperSlide>

        {/* Section 2 */}
        <SwiperSlide>
          <div className="section flex flex-col items-center text-center">
            <h2 className="text-xl font-bold">02 Earth-First Materials</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              From the farming of raw materials to the environmentally responsible
              manufacturing, our organic cotton maintains the highest of social and
              sustainable standards.
            </p>
            <img
              src={w2}
              alt="Earth-First Materials"
              className="mt-6 w-[300px] h-auto"
            />
          </div>
        </SwiperSlide>

        {/* Section 3 */}
        <SwiperSlide>
          <div className="section flex flex-col items-center text-center">
            <h2 className="text-xl font-bold">03 Value the Makers</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Our factory partners are Fair Trade or WRAP certified. The tailors who cut
              and sew Happy Earth garments are paid fair wages, work reasonable hours,
              and are protected from discrimination.
            </p>
            <img
              src={w3}
              alt="Value the Makers"
              className="mt-6 w-[300px] h-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductDetailsExtra;
