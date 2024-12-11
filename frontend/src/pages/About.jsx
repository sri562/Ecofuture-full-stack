import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

// Importing new images
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

const About = () => {
  return (
    <div className="about-section">
      {/* About EcoFuture Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"ECOFUTURE"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img} // Ensure this path is correct
          alt="EcoFuture"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At EcoFuture, we envisioned a space where sustainability meets
            simplicity. Our mission is to transform eco-friendly shopping into
            an effortless and fulfilling experience, providing environmentally
            conscious choices to everyone who seeks a sustainable lifestyle.
          </p>
          <p>
            Since inception, we’ve been passionately working to curate a diverse
            collection of eco-conscious products, ranging from sustainable
            fashion to zero-waste essentials. Each item is carefully sourced
            from trusted brands committed to environmental preservation.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            We aim to empower individuals to make environmentally positive
            decisions with ease. By offering sustainable alternatives, we’re
            striving to reduce the ecological impact of consumer habits while
            promoting practices that prioritize our planet and its people.
          </p>
        </div>
      </div>

      {/* Why Choose EcoFuture Section */}
      <div className="py-4 text-2xl">
        <Title text1={"WHY"} text2={"CHOOSE ECOFUTURE?"} />
      </div>
      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Eco-Friendly Solutions</b>
          <p className="text-gray-600">
            Every product in our store adheres to strict environmental and
            ethical standards, helping you reduce your ecological footprint
            effortlessly.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Effortless Shopping Experience</b>
          <p className="text-gray-600">
            Explore a seamless and engaging shopping experience on a platform
            designed to make sustainable living more accessible and enjoyable.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Commitment Beyond Products</b>
          <p className="text-gray-600">
            At EcoFuture, sustainability runs through every facet of our
            operations. From sourcing to shipping, we integrate eco-conscious
            practices across all aspects of our business.
          </p>
        </div>
      </div>

      {/* New Section with b1, b2, b3 Images */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4">
          <img
            src={b1}
            alt="Sustainable Product 1"
            className="w-48 h-48 object-cover rounded-full"
          />
          <h3 className="text-xl font-bold">Sustainable Choices</h3>
          <p className="text-gray-600 text-center">
            Explore our carefully curated eco-friendly products designed to
            promote a greener lifestyle.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={b2}
            alt="Sustainable Product 2"
            className="w-48 h-48 object-cover rounded-full"
          />
          <h3 className="text-xl font-bold">Eco-Friendly Packaging</h3>
          <p className="text-gray-600 text-center">
            All our products come with sustainable packaging to reduce waste and
            protect the environment.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={b3}
            alt="Sustainable Product 3"
            className="w-48 h-48 object-cover rounded-full"
          />
          <h3 className="text-xl font-bold">Impactful Initiatives</h3>
          <p className="text-gray-600 text-center">
            Every purchase contributes to meaningful initiatives such as tree
            planting and carbon offset programs.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default About;
