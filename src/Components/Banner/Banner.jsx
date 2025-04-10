import React from "react";
import bannerImg from "../../../assets/Banner-min.jpg";


const Banner = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background image */}
      <img
        src={bannerImg}
        alt="Auction"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay with text */}
      <div className="relative z-10 w-full h-full flex flex-col items-start justify-center text-white px-10">
        <h1 className="text-4xl font-bold mb-4 text-left">
          Bid on Unique Items from Around the World
        </h1>
        <p className="text-lg mb-6 text-left max-w-xl">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-medium hover:bg-blue-700 transition duration-300">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
