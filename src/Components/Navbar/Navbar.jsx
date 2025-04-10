import { IoMdNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-black">
        Auction<span className="text-yellow-400">Gallary</span>
      </div>

      {/* Middle - Nav Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 text-base font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Auctions</li>
        <li className="hover:text-blue-600 cursor-pointer">Categories</li>
        <li className="hover:text-blue-600 cursor-pointer">How it works</li>
      </ul>

      {/* Right - Notification & Profile */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <IoMdNotifications className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            9
          </span>
        </div>
        <img
          src="https://i.pravatar.cc/36"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
