import { assets } from '../assets/assets';
import Title from '../Components/Title';
import { useState } from 'react';

const stores = [
  {
    name: "EcoFuture Miami",
    address: "321 Ocean Dr, Miami, FL 33139",
    phone: "+3051234567",
    email: "miami@Ecofuture.com",
    hours: "Mon-Sun: 10 AM - 8 PM",
  },
  {
    name: "EcoFuture San Francisco",
    address: "123 Market St, San Francisco, CA 94103",
    phone: "+4151234567",
    email: "sf@Ecofuture.com",
    hours: "Mon-Fri: 10 AM - 7 PM, Sat-Sun: 11 AM - 6 PM",
  },
  {
    name: "EcoFuture New York",
    address: "456 Broadway, New York, NY 10013",
    phone: "+2121234567",
    email: "ny@Ecofuture.com",
    hours: "Mon-Sat: 10 AM - 8 PM, Sun: 11 AM - 5 PM",
  },
  {
    name: "EcoFuture Chicago",
    address: "789 State St, Chicago, IL 60605",
    phone: "+3121234567",
    email: "chicago@Ecofuture.com",
    hours: "Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 5 PM, Sun: Closed",
  },
];

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setFeedback(""); // Reset feedback input
      setModalOpen(true); // Open modal upon feedback submission
    }
  };

  const closeModal = () => {
    setModalOpen(false); // Close modal
  };

  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Store Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
        {stores.map((store, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md bg-white">
            <p className="font-semibold text-gray-600">{store.name}</p>
            <p className="text-gray-500">{store.address}</p>
            <p className="text-gray-800">
              Tel: <span className="text-gray-500">{store.phone}</span>
            </p>
            <p className="text-gray-800">
              Email: <span className="text-gray-500">{store.email}</span>
            </p>
            <p className="text-gray-800">Hours: <span className="text-gray-500">{store.hours}</span></p>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt="Contact Us"
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-gray-600">Contact Us</p>
          <p className="text-gray-500">
            Be the first to know about new arrivals, sales & promos!
          </p>

          {/* Long Beach Store Information */}
          <div className="border p-4 rounded-md shadow-md bg-white w-full">
            <p className="font-semibold text-gray-600">EcoFuture Long Beach</p>
            <p className="text-gray-500">5050 E Garford St, Long Beach, CA 90815</p>
            <p className="text-gray-800">
              Tel: <span className="text-gray-500">+5625809442</span>
            </p>
            <p className="text-gray-800">
              Email: <span className="text-gray-500">admin@Ecofuture.com</span>
            </p>
            <p className="text-gray-800">
              Hours: <span className="text-gray-500">Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 5 PM, Sun: Closed</span>
            </p>
          </div>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
            onClick={scrollToTop}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="my-10 px-4">
        <h2 className="text-xl font-bold text-center">We Value Your Feedback!</h2>
        <form onSubmit={handleFeedbackSubmit} className="flex flex-col items-center mt-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            placeholder="Share your thoughts..."
            className="w-full max-w-md p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Modal for Feedback Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold">Thank you for your feedback!</h2>
            <button 
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md" 
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Newsletter Box */}
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
