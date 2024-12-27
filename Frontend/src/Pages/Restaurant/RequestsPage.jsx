import React from "react";
import RestSidebar from "../../Components/RestSideBar";

const RequestsPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <RestSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        <div className="max-w-7xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-green-500 mb-8">
            Food Requests
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Vegetable Rice Packets
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Quantity:</span> 50 packets
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Requested By:</span> NGO Name 1
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Date:</span> 2024-12-25
              </p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-yellow-200 text-yellow-800">
                  Pending
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Decline
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Chicken Curry
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Quantity:</span> 10 trays
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Requested By:</span> NGO Name 2
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Date:</span> 2024-12-26
              </p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-200 text-green-800">
                  Approved
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Decline
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Bread and Jam
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Quantity:</span> 30 packs
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Requested By:</span> NGO Name 3
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Date:</span> 2024-12-27
              </p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-red-200 text-red-800">
                  Declined
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
