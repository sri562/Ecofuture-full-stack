import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import SustainabilityHighlights from '../components/SustainabilityHighlights'; // New Section
import WhyPlastics from '../components/WhyPlastics'; // New Section
import OurProgress from '../components/OurProgress'; // New Section

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Latest Collection Section */}
      <LatestCollection />

      {/* Best Seller Section */}
      <BestSeller />

      {/* Sustainability Highlights */}
      <SustainabilityHighlights />

      {/* Why Plastics Section */}
      <WhyPlastics />

      {/* Our Progress Section */}
      <OurProgress />

      {/* Policies Section */}
      <OurPolicy />

      {/* Newsletter Subscription Box */}
      <NewsletterBox />
    </div>
  );
};

export default Home;
