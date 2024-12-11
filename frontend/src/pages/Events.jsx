import React from 'react';
import Title from '../Components/Title';
import NewsLetterBox from '../Components/NewsLetterBox';

const Events = () => {
  return (
    <div>
      {/* Events Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'OUR'} text2={'EVENTS'} />
      </div>

      {/* Introduction */}
      <div className="flex flex-col gap-6 text-gray-600 my-10 text-center">
        <p>
          At EcoFuture, we host and participate in events that focus on sustainability, eco-conscious living, and green innovation.
          Our goal is to connect people with the latest in environmentally-friendly trends, ideas, and solutions.
        </p>
        <p>
          From webinars and workshops to community events and conferences, we aim to spread awareness and provide practical tips on reducing your environmental footprint.
          Stay updated with our upcoming events to learn how you can be a part of this positive change!
        </p>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-4 text-2xl">
        <Title text1={'UPCOMING'} text2={'EVENTS'} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10 text-gray-600 text-sm">
        {/* Event 1 */}
        <div className="border p-6 rounded-md">
          <h3 className="text-xl font-bold">Eco-Conscious Living Workshop</h3>
          <p className="mt-2">Date: November 15, 2024</p>
          <p className="mt-1">Location: Online (Zoom)</p>
          <p className="mt-2">
            Join our expert speakers as they discuss practical ways to adopt an eco-conscious lifestyle, focusing on
            reducing waste, choosing sustainable products, and conserving energy.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>

        {/* Event 2 */}
        <div className="border p-6 rounded-md">
          <h3 className="text-xl font-bold">Sustainable Fashion Summit</h3>
          <p className="mt-2">Date: December 5, 2024</p>
          <p className="mt-1">Location: New York City, NY</p>
          <p className="mt-2">
            A full-day summit where fashion leaders discuss how to make fashion more sustainable, from ethical sourcing
            to reducing the environmental impact of clothing production.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>

        {/* Event 3 */}
        <div className="border p-6 rounded-md">
          <h3 className="text-xl font-bold">Zero-Waste Holiday Tips Webinar</h3>
          <p className="mt-2">Date: December 20, 2024</p>
          <p className="mt-1">Location: Online (YouTube Live)</p>
          <p className="mt-2">
            Learn how to celebrate the holiday season while reducing waste. We will cover tips for eco-friendly gifts,
            decorations, and sustainable holiday meals.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>
      </div>

      {/* Call to Action for Event Subscription */}
      <div className="text-center my-10">
        <p className="text-lg text-gray-600">
          Want to stay informed about our latest events and workshops? Subscribe to our newsletter for regular updates!
        </p>
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Events;
