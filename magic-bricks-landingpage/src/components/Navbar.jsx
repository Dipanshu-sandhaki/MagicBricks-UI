import React from "react";
import LoginDropdown from "./LoginDropdown";
import MBPrimeDropdown from "./MBPrimeDropdown";
import CityDropdown from "./CityDropdown";
import BuyDropdown from "./BuyDropdown";
import { Tag } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      {/* Top Red Navbar */}
      <nav className="bg-red-600 text-white pl-6 pr-4 py-3 flex justify-between items-center">
        {/* Left: Logo & Location */}
        <div className="flex items-center gap-6 pl-25">
          <h1 className="text-3xl font-bold">magicbricks</h1>
          <span className="text-sm cursor-pointer hover:text-yellow-300">
            <CityDropdown />
          </span>
        </div>

        {/* Right: MB Prime, Login, Post Property */}
        <div className="flex items-center gap-4">
          <MBPrimeDropdown />
          <LoginDropdown />
          <button className="bg-white text-red-600 px-4 py-1 rounded-md font-medium flex items-center gap-2 hover:bg-gray-100 transition">
            Post Property
            <span className="bg-yellow-300 text-black text-xs px-2 py-0.5 rounded-full font-bold">
              FREE
            </span>
          </button>
        </div>
      </nav>

      {/* Bottom White Navigation Bar */}
      <nav className="bg-white text-black py-2 pl-[150px] pr-6 flex justify-start gap-8 text-sm font-medium border-b border-gray-200">
        <span className="hover:text-red-600 cursor-pointer"><BuyDropdown /></span>
        <span className="hover:text-red-600 cursor-pointer">Rent ▼</span>
        <span className="hover:text-red-600 cursor-pointer">Sell ▼</span>
        <span className="hover:text-red-600 cursor-pointer">Home Loans ▼</span>
        <span className="hover:text-red-600 cursor-pointer">
          Home Interiors ▼
        </span>
        <span className="hover:text-red-600 cursor-pointer flex items-center gap-1">
          MB Advice ▼{" "}
          <span className="bg-yellow-400 text-xs text-black px-1 py-0.5 rounded font-bold">
            NEW
          </span>
        </span>
        <span className="hover:text-red-600 cursor-pointer">Help ▼</span>
      </nav>
    </header>
  );
};

export default Navbar;
