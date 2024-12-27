import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiLogout } from "react-icons/ci"; // If you need this icon for the logout button

const RestSidebar = () => {
  return (
    <div className="w-1/6 bg-gray-900 text-white p-6 flex flex-col items-center pt-32">
      <div className="mb-8">
        <img src={logo} alt="NGO Logo" className="w-32 h-auto" />
      </div>
      <nav className="flex flex-col items-center space-y-6">
        <Link
          to="/dashboard"
          className="text-xl font-semibold border border-transparent hover:text-gray-900 hover:bg-white hover:border-gray-300 px-4 py-2 rounded-lg transition duration-300"
        >
          Requests
        </Link>
        <Link
          to="/manage-requests"
          className="text-xl font-semibold border border-transparent hover:text-gray-900 hover:bg-white hover:border-gray-300 px-4 py-2 rounded-lg transition duration-300"
        >
          Manage Posts
        </Link>
        <div>
          <button
            type="button"
            className="flex items-center px-4 py-2 text-white bg-red-600 hover:bg-red-700 font-bold text-lg rounded-lg shadow-md transition duration-300"
          >
            <CiLogout size={24} className="mr-2" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default RestSidebar;
