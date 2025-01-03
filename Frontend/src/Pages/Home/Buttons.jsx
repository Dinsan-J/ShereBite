import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-1 ">
      <Link
        to="/Login"
        className="w-40 h-20 flex items-center justify-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl"
      >
        Restaurant
      </Link>
      <span className="text-xl font-semibold text-gray-700">|</span>
      <Link
        to="/Login"
        className="w-40 h-20 flex items-center justify-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl"
      >
        NGO
      </Link>
    </div>
  );
};

export default Buttons;
