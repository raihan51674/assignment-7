import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles
import './App.css';
import Banner from './Components/Banner/Banner';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [mark, setMark] = useState([]);
  const [price, setPrice] = useState(0);

  const handleLoveIcon = (item) => {
    setMark([...mark, item]);
  };

  const handleRemoveItem = (id, currentBidPrice) => {
    const updatedItems = mark.filter(item => item.id !== id);
    setMark(updatedItems);
    setPrice(price - currentBidPrice); // Update total price after removing an item

    // Show a toast notification when an item is removed
    toast.success('Item removed');
  };

  const handleTotalPrice = (currentBidPrice) => {
    const TotalPrice = price + currentBidPrice;
    setPrice(TotalPrice);
  };

  return (
    <div className="text-1xl bg-white">
      <Navbar />
      <Banner />
      <div className="main-container flex mt-15">
        <div className="left-container w-[70%]">
          <div className='text-start ml-10'>
            <h2 className='font-semibold text-3xl text-[#0E2954]'>Active Auctions</h2>
            <p className='text-black mt-3'>Discover and bid on extraordinary items</p>
          </div>
          <Blogs handleLoveIcon={handleLoveIcon} handleTotalPrice={handleTotalPrice} />
        </div>

        {/* Right Container (Favorite Items) */}
        <div className="right-container w-full md:w-[30%] mt-16 flex gap-7 flex-col p-5 bg-white rounded-2xl shadow-lg">
          {/* Title Section */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <FaRegHeart className="text-black mt-1" size={25} />
            <h2 className="text-3xl text-black font-bold">Favorite Items</h2>
          </div>

          {/* Conditional Default Message */}
          {mark.length === 0 ? (
            <div className="text-center text-gray-600">
              <p className="text-3xl font-medium">No favorites yet</p>
              <p className="text-lg mt-2">Click the heart icon on any item to add it to your favorites</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
              {
                mark.map((marked) => (
                  <div key={marked.id} className="flex items-center gap-4 p-3 border rounded-lg bg-gray-50 shadow-sm">
                    <img
                      src={marked?.image}
                      alt={marked?.title}
                      className="w-16 h-16 rounded object-cover sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                    <div className="flex-1">
                      <p className="mb-6 font-medium text-black text-sm sm:text-base truncate">{marked.title}</p>
                      <div className="flex justify-between text-xs sm:text-sm mt-1 text-gray-700">
                        <span>${marked.currentBidPrice}</span>
                        <span>Bids: {marked.bidsCount}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(marked.id, marked.currentBidPrice)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <MdDelete size={22} />
                    </button>
                  </div>
                ))
              }
            </div>
          )}

          {/* Total Amount Section */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <h2 className="text-xl font-bold text-black">Total Bids Amount</h2>
            <p className="text-2xl font-semibold text-green-600">${price}</p>
          </div>
        </div>
      </div>
      <Footer/>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default App;
