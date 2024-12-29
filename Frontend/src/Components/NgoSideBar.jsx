import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../Hooks/useLogout.js";

const NgoSidebar = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="w-1/6 bg-gray-900 text-white p-6 flex flex-col items-center pt-32">
      <div className="mb-8">
        <Link to="/Ngodash">
          <img src={logo} alt="NGO Logo" className="w-32 h-auto" />
        </Link>
      </div>
      <nav className="flex flex-col items-center space-y-6">
        <Link
          to="/NgoRequest"
          className="text-xl font-semibold border border-transparent hover:text-gray-900 hover:bg-white hover:border-gray-300 px-4 py-2 rounded-lg transition duration-300"
        >
          Make Request
        </Link>
        <Link
          to="/ManageRequests"
          className="text-xl font-semibold border border-transparent hover:text-gray-900 hover:bg-white hover:border-gray-300 px-4 py-2 rounded-lg transition duration-300"
        >
          Manage Requests
        </Link>
        <div>
          <button
            type="button"
            className={`flex items-center px-4 py-2 font-bold text-lg rounded-lg shadow-md transition duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
            onClick={logout}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8-8z"
                  ></path>
                </svg>
                Logging out...
              </div>
            ) : (
              <>
                <CiLogout size={24} className="mr-2" />
                Logout
              </>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NgoSidebar;
