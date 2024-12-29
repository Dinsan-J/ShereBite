import React from "react";

const GlowingButton = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <button className="relative group px-6 py-3 text-white font-medium rounded-lg transition-all duration-300">
          <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-gray-800 rounded-lg"></span>
          <span className="relative">Glowing Button</span>
        </button>
      </div>
    </div>
  );
};

export default GlowingButton;
