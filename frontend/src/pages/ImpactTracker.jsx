import React, { useState, useEffect } from 'react';
import Title from '../Components/Title';
import imp1 from '../assets/imp1.jpeg';
import imp2 from '../assets/imp2.jpg';
import imp3 from '../assets/imp3.jpg';


const ImpactTracker = () => {
  const [userName, setUserName] = useState(() => {
    const savedName = localStorage.getItem('userName');
    return savedName ? savedName : ''; // Default to saved name or empty
  });
  const [contributions, setContributions] = useState(() => {
    const savedContributions = localStorage.getItem('contributions');
    return savedContributions ? JSON.parse(savedContributions) : 50; // Default starting contributions
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false); // Donation modal visibility
  const [donatedItems, setDonatedItems] = useState([]); // Array to hold donated items
  const [itemToDonate, setItemToDonate] = useState(''); // Item to be donated
  const [rewardMessage, setRewardMessage] = useState(''); // Reward message after donation
  const [isSignUp, setIsSignUp] = useState(!userName); // Determine if sign-up is required
  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false); // Modal to show redeemed coupon
  const [randomCouponCode, setRandomCouponCode] = useState(''); // Generated coupon code
  const [couponAmount, setCouponAmount] = useState(0); // Amount of the coupon
  const [pointsToRedeem, setPointsToRedeem] = useState(''); // Input for points to redeem
  const [dollarValue, setDollarValue] = useState(0); // Value in dollars from contributions

  // Sample data representing sustainability metrics
  const [metrics, setMetrics] = useState([
    { id: 1, metric: 'Carbon Footprint Reduction', value: 250, unit: 'tonnes' },
    { id: 2, metric: 'Waste Reduction', value: 150, unit: 'tonnes' },
    { id: 3, metric: 'Energy Savings', value: 3000, unit: 'kWh' },
    { id: 4, metric: 'Water Usage Reduction', value: 5000, unit: 'liters' },
    { id: 5, metric: 'Number of Sustainability Projects', value: 10, unit: 'projects' },
  ]);

  // Sample sustainable items for donation
  const sustainableItems = [
    'Reusable Bags',
    'Bamboo Toothbrushes',
    'Stainless Steel Straws',
    'Glass Water Bottles',
    'Compostable Plates',
    'Organic Cotton T-Shirts',
  ];

  // Function to generate a random coupon code
  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';
    for (let i = 0; i < 8; i++) { // Create an 8-character coupon code
      couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return couponCode;
  };

  // Function to handle donation of items
  const handleDonateItem = () => {
    if (itemToDonate) {
      setDonatedItems([...donatedItems, itemToDonate]); // Add item to donated items
      const contributionIncrease = 500; // Each item contributes 500 points
      const newContributions = contributions + contributionIncrease; // Calculate new contributions
      setContributions(newContributions); // Update contributions
      localStorage.setItem('contributions', newContributions); // Save to local storage

      setRewardMessage(`Thank you, ${userName}, for your donation! You've earned 500 extra contributions! 🎉`);
      setItemToDonate(''); // Clear the input
    }
  };

  // Function to handle sign-up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (userName) {
      localStorage.setItem('userName', userName); // Save user name to local storage
      setIsSignUp(false); // Hide sign-up form
    }
  };

  // Close modals
  const closeModal = () => setIsModalOpen(false);
  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
    setRewardMessage(''); // Clear reward message when modal is closed
  };

  // Close redeem modal
  const closeRedeemModal = () => {
    setIsRedeemModalOpen(false);
    setRandomCouponCode(''); // Clear coupon code when modal is closed
    setCouponAmount(0); // Reset coupon amount
  };

  // Effect to save contributions and user name to local storage
  useEffect(() => {
    localStorage.setItem('contributions', contributions);
  }, [contributions]);

  // Function to calculate dollar value based on contributions
  const calculateDollarValue = () => {
    const value = Math.floor(contributions / 500); // $1 for every 500 points
    setDollarValue(value);
  };

  // Function to handle redeeming points
const handleRedeemPoints = () => {
  const points = parseInt(pointsToRedeem, 10);
  if (points >= 5000 && points <= contributions) {
    const coupon = generateCouponCode(points); // Generate coupon based on points

    if (coupon) {
      setContributions((prev) => prev - points); // Deduct points from contributions
      localStorage.setItem('contributions', contributions - points); // Save updated contributions to local storage
      setRandomCouponCode(coupon.code); // Set the coupon code
      setCouponAmount(coupon.value); // Set the coupon value
      setIsRedeemModalOpen(true); // Open redeem modal
      setPointsToRedeem(''); // Clear input
    } else {
      alert("You cannot redeem points for more than $100.");
    }
  } else {
    alert("You must redeem at least 5000 points and not exceed your total contributions!");
  }
};


  // Call calculateDollarValue when contributions change
  useEffect(() => {
    calculateDollarValue();
  }, [contributions]);

  return (
    <div>
      

      {/* Page Title */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="IMPACT" text2="TRACKER" />
      </div>

      {/* Contribution Dashboard */}
      <div className="flex flex-col items-center gap-6 text-gray-600 my-10">
        <p className="text-lg">Your Contributions: <span className="font-bold">{contributions}</span> items</p>
        <p className="text-lg">You've earned: <span className="font-bold">${dollarValue}</span></p> {/* Dollar value display */}
        <button 
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsDonationModalOpen(true)} // Open donation modal
        >
          Donate Items
        </button>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Share Your Achievements
        </button>

       {/* Redeem Coupon Modal */}
{isRedeemModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Redeem Your Coupon</h2>
      <p className="text-gray-700 mb-2">
        Your coupon code is: <strong className="text-green-600">{randomCouponCode}</strong>
      </p>
      <p className="text-gray-700 mb-6">
        Coupon Amount: <strong className="text-green-600">${couponAmount}</strong>
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={() => {
            navigator.clipboard.writeText(randomCouponCode); // Copy coupon code to clipboard
            alert('Coupon code copied to clipboard!'); // Notify user
          }}
        >
          Copy Coupon Code
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => alert(`Coupon ${randomCouponCode} redeemed successfully!`)} // Redeem logic
        >
          Redeem
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={closeRedeemModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}



        {/* Contributions Metrics Table */}
        <table className="border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Metric</th>
              <th className="border px-4 py-2">Value</th>
              <th className="border px-4 py-2">Unit</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.metric}</td>
                <td className="border px-4 py-2">{item.value}</td>
                <td className="border px-4 py-2">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>

       {/* How It Works Section */}
<div className="text-center my-10">
  <h2 className="text-xl font-bold">How It Works</h2>
  <p className="my-4">
    The Impact Tracker allows you to track and visualize your contributions to sustainability. 
    As you engage in eco-friendly practices, you can log your contributions to see the positive impact you’re making on the environment.
  </p>
  <p className="my-4">
    Each item you contribute represents a step towards a healthier planet. 
    Whether it’s recycling, reducing waste, or making sustainable purchases, every action counts! 
    You can inspire others to join the movement!
  </p>
  <div className="flex justify-center gap-4">
    {/* Sustainable Living */}
    <div className="flex flex-col items-center">
      <img src={imp1} alt="Sustainable Living" className="w-48 h-48 object-cover rounded-lg shadow-md" />
      <p className="mt-2 font-semibold">Sustainable Living</p>
      <p className="text-gray-500 text-sm">Sustainable living promotes environmental health.</p>
    </div>
    
    {/* Eco-Friendly Products */}
    <div className="flex flex-col items-center">
      <img src={imp2} alt="Eco-Friendly Products" className="w-48 h-48 object-cover rounded-lg shadow-md" />
      <p className="mt-2 font-semibold">Eco-Friendly Products</p>
      <p className="text-gray-500 text-sm">Using eco-friendly products makes a difference.</p>
    </div>
    
    {/* Conservation Efforts */}
    <div className="flex flex-col items-center">
      <img src={imp3} alt="Conservation Efforts" className="w-48 h-48 object-cover rounded-lg shadow-md" />
      <p className="mt-2 font-semibold">Conservation Efforts</p>
      <p className="text-gray-500 text-sm">Every action helps conserve our planet's resources.</p>
    </div>
  </div>
  <p className="text-gray-600 my-4">
    Start tracking your contributions today and see the positive impact you are making!
  </p>
</div>


        {/* Donation Modal */}
        {isDonationModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg text-center">
              <h2 className="text-xl font-bold">Donate an Item</h2>
              <p className="mt-2 text-gray-600">Select an item to donate:</p>
              <select
                className="mt-4 border border-gray-300 rounded-md p-2"
                value={itemToDonate}
                onChange={(e) => setItemToDonate(e.target.value)}
              >
                <option value="">Select an item...</option>
                {sustainableItems.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleDonateItem}
              >
                Donate
              </button>
              {rewardMessage && (
                <p className="mt-2 text-green-500">{rewardMessage}</p>
              )}
              <button 
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={closeDonationModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Achievement Share Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg text-center">
              <h2 className="text-xl font-bold">Share Your Achievement!</h2>
              <p className="mt-2 text-gray-600">Congratulations, {userName}! You have made a positive impact on the environment!</p>
              <p className="mt-2 text-blue-600">You've earned a coupon! Redeem it below!</p>
              <button 
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        
    {isRedeemModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-lg text-center">
          <h2 className="text-xl font-bold">Redeem Your Coupon</h2>
          <p>Your coupon code is: <strong>{randomCouponCode}</strong></p>
          <p>Coupon Amount: <strong>${couponAmount}</strong></p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => navigator.clipboard.writeText(randomCouponCode)}
          >
            Copy Coupon Code
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={closeRedeemModal}
          >
            Close
          </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactTracker;
