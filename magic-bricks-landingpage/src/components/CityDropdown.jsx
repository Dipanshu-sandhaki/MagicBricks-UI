import React from "react";
import { Globe, MapPin } from "lucide-react";

const CityDropdown = () => {
  return (
    <div className="relative group">
      {/* Trigger */}
      <div className="text-sm cursor-pointer hover:text-yellow-300 flex items-center gap-1">
        <MapPin className="w-4 h-4 text-white" />
        Dehradun ▼
      </div>

      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg z-50 w-[1000px] p-6 flex border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {/* Left Section - India Cities */}
        <div className="w-4/5 pr-6 border-r border-gray-200 grid grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-red-500" /> INDIA
            </h4>
            <h5 className="font-bold mb-1">Nearby Cities</h5>
            <ul className="space-y-1">
              <li>Bangalore - East</li>
              <li>Bangalore - South</li>
              <li>Bangalore - West</li>
              <li>Bangalore - Central</li>
              <li>Bangalore - North</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-1">Popular Cities</h5>
            <ul className="space-y-1">
              <li>Ahmedabad</li>
              <li>Hyderabad</li>
              <li>Mumbai</li>
              <li>Thane</li>
              <li>Bangalore</li>
              <li>Indore</li>
              <li>Navi Mumbai</li>
              <li>Beyond Thane</li>
              <li>Jaipur</li>
              <li>New Delhi</li>
              <li>Chennai</li>
              <li>Kolkata</li>
              <li>Noida</li>
              <li>Gurgaon</li>
              <li>Lucknow</li>
              <li>Pune</li>
            </ul>
          </div>

          <div className="col-span-2 max-h-[300px] overflow-y-auto">
            <h5 className="font-bold mb-1">Other Cities</h5>
            <div className="columns-2 space-y-1">
              {[
                "Agra", "Ahmadnagar", "Allahabad", "Aluva", "Amritsar", "Aurangabad", "Badlapur", "Bareilly", "Belgaum", "Bhiwadi", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bokaro Steel City", "Chandigarh", "Chengalpattu", "Coimbatore", "Dehradun", "Durgapur", "Ernakulam", "Erode", "Faridabad", "Ghaziabad", "Goa", "Gorakhpur", "Greater Noida", "Guntur", "Guwahati", "Gwalior", "Haridwar", "Hosur", "Hubli", "Jabalpur", "Jalandhar", "Jammu", "Jamshedpur", "Jodhpur", "Kalyan", "Kannur", "Kanpur", "Khopoli", "Kochi", "Kodaikanal", "Kottayam", "Kozhikode", "Lonavala", "Ludhiana", "Madurai", "Mangalore", "Mohali", "Mysore", "Nagpur", "Nainital", "Nanded", "Nashik", "Navsari", "Nellore", "Newtown", "Ooty", "Palakkad", "Palghar", "Panchkula", "Patiala", "Patna", "Pondicherry", "Raipur", "Rajahmundry", "Ranchi", "Salem", "Satara", "Shimla", "Siliguri", "Solapur", "Sonipat", "Surat", "Thanjavur", "Thrissur", "Tirunelveli", "Tirupati", "Tirupur", "Trichy", "Trivandrum", "Tumkur", "Udaipur", "Udupi", "Vadodara", "Vapi", "Varanasi", "Vijayawada", "Visakhapatnam", "Vrindavan", "Zirakpur"
              ].map((city) => (
                <div key={city}>{city}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - International */}
        <div className="w-1/5 pl-6">
          <h4 className="font-semibold mb-2 flex items-center gap-1">
            <Globe className="w-4 h-4 text-red-500" /> International
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-5 h-3" /> US
            </li>
            <li className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-5 h-3" /> UAE
            </li>
            <li className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-5 h-3" /> Canada
            </li>
            <li className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-5 h-3" /> Australia
            </li>
            <li className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="w-5 h-3" /> Singapore
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityDropdown;