import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = ({ handleLoveIcon, handleTotalPrice }) => {
  const [blogs, setBlogs] = useState([]);
  const [clickedItems, setClickedItems] = useState([]); // Track multiple clicked items by their ids

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleButtonClick = (item) => {
    if (!clickedItems.includes(item.id)) {
      handleLoveIcon(item);
      handleTotalPrice(item.currentBidPrice, item.id);
      setClickedItems([...clickedItems, item.id]); // Add clicked item to the list

      // Show toast using react-toastify
      toast.success("Item added to your Favorite list");
    }
  };

  return (
    <div className="overflow-x-auto p-6 min-h-screen">
      {/* Toast Container */}
      <ToastContainer />

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="text-left px-6 py-4">Items</th>
            <th className="text-left px-6 py-4">Current Bid</th>
            <th className="text-left px-6 py-4">Time Left</th>
            <th className="text-left px-6 py-4">Bid Now</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {blogs.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="flex items-center gap-4 px-6 py-4">
                <img
                  src={item.image}
                  alt={item.title || "Item"}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="text-[#0E2954] font-semibold">{item.title}</span>
              </td>
              <td className="px-6 py-4 text-[#0E2954] font-bold">
                ${item.currentBidPrice?.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-[#0E2954] font-medium">{item.timeLeft}</td>
              <td className="px-6 py-4">
                <button
                  className={`text-xl transition duration-200 ${clickedItems.includes(item.id) ? 'bg-red-600 cursor-not-allowed' : 'hover:scale-110'}`}
                  onClick={() => handleButtonClick(item)} // Only this button will trigger the click event
                  disabled={clickedItems.includes(item.id)} // Disable if clicked
                >
                  <FaRegHeart size={25} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;
