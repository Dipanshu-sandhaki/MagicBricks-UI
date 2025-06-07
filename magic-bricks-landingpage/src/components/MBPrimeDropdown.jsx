import React, { useState, useRef } from "react";
import { CheckCircle, ChevronDown, Crown } from "lucide-react";

const MBPrimeDropdown = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button className="flex items-center gap-1 font-semibold text-white hover:text-yellow-300 px-3 py-2 text-base">
        MB Prime
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Content */}
      {open && (
        <div className="absolute right-0 mt-2 w-96 bg-white text-black shadow-lg rounded-lg z-50 text-sm border border-gray-300 p-4">
          {/* Gradient Card */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-lg p-6 text-center text-white mb-4">
            {/* Premium Logo (Crown Icon) */}
            <div className="flex justify-center mb-2">
              <Crown className="w-10 h-10 text-yellow-400 drop-shadow-md" />
            </div>
            {/* Heading */}
            <p className="text-sm">Introducing</p>
            <h2 className="text-2xl font-bold">
              <span className="text-white">MB </span>
              <span className="text-yellow-400">Prime</span>
            </h2>
            {/* Tagline */}
            <p className="mt-2 text-sm text-yellow-200">
              Pay Zero Commission | Save Time & Money
            </p>
          </div>

          {/* Features */}
          <ul className="mb-4 space-y-2">
            <li className="flex items-start gap-2 font-semibold">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              Contact upto 30 Owners directly
            </li>
            <li className="flex items-start gap-2 font-semibold">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              Access to Prime Exclusive Properties
            </li>
          </ul>

          {/* Join Button */}
          <div className="text-center">
            <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
              Join Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MBPrimeDropdown;
