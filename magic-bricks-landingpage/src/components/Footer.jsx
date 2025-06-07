import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-100 py-4 text-center text-gray-700 mt-10">
      <p className="text-sm font-medium flex justify-center items-center gap-1">
        Developed by - <span className="font-semibold">Dipanshu Sandhaki</span>
        <span
          aria-label="love"
          role="img"
          className="text-red-500 text-base"
        >
          ❤️
        </span>
      </p>
    </footer>
  );
};

export default Footer;
