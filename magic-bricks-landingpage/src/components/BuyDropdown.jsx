import React, { useState } from "react";

const BuyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="hover:text-red-600 cursor-pointer text-red-600">
        Buy ▼
      </span>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl border border-gray-200 z-50 w-[1000px] grid grid-cols-6 gap-6 p-6 rounded">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Popular Choices</h4>
            <ul className="space-y-1 text-sm">
              <li>Ready to Move</li>
              <li>Owner Properties</li>
              <li>Budget Homes</li>
              <li>Premium Homes</li>
              <li className="flex items-center gap-1">
                New Projects
                <span className="text-[10px] border border-red-500 text-red-500 px-1 rounded">
                  magicHomes
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Property Types</h4>
            <ul className="space-y-1 text-sm">
              <li>Flats in Bangalore</li>
              <li>House for sale in Bangalore</li>
              <li>Villa in Bangalore</li>
              <li>Plot in Bangalore</li>
              <li>Office Space in Bangalore</li>
              <li>Commercial Space in Bangalore</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Budget</h4>
            <ul className="space-y-1 text-sm">
              <li>Under ₹ 50 Lac</li>
              <li>₹ 50 Lac - ₹ 1 Cr</li>
              <li>₹ 1 Cr - ₹ 1.5 Cr</li>
              <li>Above ₹ 1.5 Cr</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Explore</h4>
            <ul className="space-y-1 text-sm">
              <li>Localities in Bangalore</li>
              <li>Projects in Bangalore</li>
              <li>Investment Hotspot</li>
              <li>Find an Agent</li>
              <li>Home Interiors in Bangalore</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Buying Tools</h4>
            <ul className="space-y-1 text-sm">
              <li>PropWorth</li>
              <li>Rates & Trends</li>
              <li>Buy vs Rent</li>
              <li>Tips and Guide</li>
            </ul>
          </div>

          {/* Optional: Empty sixth column or additional section */}
          <div />
        </div>
      )}
    </div>
  );
};

export default BuyDropdown;
