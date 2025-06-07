import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  // Delay to prevent flicker when moving from button to menu
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // slight delay for smooth UX
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Login Button */}
      <button className="flex items-center gap-1 font-semibold text-white hover:text-yellow-300 px-3 py-2 text-base">
        Login
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white text-black shadow-lg rounded-lg z-50 text-sm border border-gray-300">
          <div className="px-4 py-2 font-semibold text-gray-600">
            My Activity
          </div>
          <ul className="divide-y divide-gray-100">
            <li className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer font-semibold">
              <span className="hover:text-red-600">Requested Properties</span>
              <span className="bg-yellow-300 text-xs px-2 py-0.5 rounded-full ml-2">
                New
              </span>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer font-semibold">
              <span className="hover:text-red-600">MagicDiary</span>
              <span className="bg-yellow-300 text-xs px-2 py-0.5 rounded-full ml-2">
                New
              </span>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold hover:text-red-600">
              Contacted Properties
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold hover:text-red-600">
              Viewed Properties
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold hover:text-red-600">
              Shortlisted Properties
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold hover:text-red-600">
              Searches
            </li>
          </ul>

          <hr className="my-2 border-gray-300" />

          <ul>
            <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer font-semibold">
              Recommendations
            </li>
            <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer font-semibold">
              My Profile
            </li>
          </ul>

          <hr className="my-2 border-gray-300" />

          <div className="px-4 py-3">
            <button className="w-full bg-red-600 text-white py-2 rounded-full text-sm font-bold hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-center text-xs mt-2 text-gray-600">
              New to MagicBricks?{" "}
              <span className="text-red-600 font-semibold hover:underline cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
