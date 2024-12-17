import React from 'react';

// Importing images
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';

const Blog = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="SUSTAINABILITY" text2="BLOG" />
      </div>

      {/* Blog Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {/* Post 1 */}
        <div className="border p-6 rounded-md shadow-md">
          <img
            src={blog1}
            alt="Living Sustainably"
            className="w-64 h-40 object-cover rounded-md mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">10 Easy Tips for Living More Sustainably</h3>
          <p className="mt-2 text-gray-600">
            Learn simple yet effective ways to reduce your carbon footprint in your daily life,
            from recycling to using eco-friendly products.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Read More
          </button>
        </div>

        {/* Post 2 */}
        <div className="border p-6 rounded-md shadow-md">
          <img
            src={blog2}
            alt="Community Impact"
            className="w-64 h-40 object-cover rounded-md mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">How Our Community is Making a Difference</h3>
          <p className="mt-2 text-gray-600">
            Hear from real users who have made significant contributions to sustainability through
            EcoFuture, and how you can join them.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Read More
          </button>
        </div>

        {/* Post 3 */}
        <div className="border p-6 rounded-md shadow-md">
          <img
            src={blog3}
            alt="Collaborations"
            className="w-64 h-40 object-cover rounded-md mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">Collaborations That Drive Change</h3>
          <p className="mt-2 text-gray-600">
            Learn about our collaborations with brands and organizations that are working towards a
            more sustainable future.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Read More
          </button>
        </div>

        {/* Post 4 */}
        <div className="border p-6 rounded-md shadow-md">
          <img
            src={blog4}
            alt="Eco-Friendly Products"
            className="w-64 h-40 object-cover rounded-md mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">Top 5 Eco-Friendly Products to Try Today</h3>
          <p className="mt-2 text-gray-600">
            Discover our top picks for eco-friendly products that can help reduce your
            environmental impact while enhancing your lifestyle.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Read More
          </button>
        </div>

        {/* Post 5 */}
        <div className="border p-6 rounded-md shadow-md">
          <img
            src={blog5}
            alt="Sustainable Living"
            className="w-64 h-40 object-cover rounded-md mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">The Importance of Sustainable Living</h3>
          <p className="mt-2 text-gray-600">
            Understand why sustainable living is essential for the health of our planet and future
            generations.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
