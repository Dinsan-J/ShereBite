import React from "react";

import NgoSidebar from "../../Components/NgoSideBar";

const ManageRequests = () => {
  return (
    <div className="min-h-screen flex">
      <NgoSidebar />
      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-green-500 mb-8">
            Manage Requests
          </h1>
          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            Your Requests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Spaghetti Bolognese
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Quantity:</span> 5
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Request Date:</span> 2024-12-25
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Status:</span>{" "}
                <span className="text-yellow-600">Pending</span>
              </p>

              <div className="mt-4 flex justify-between">
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Delete Request
                </button>

                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                  Update Quantity
                </button>
              </div>
            </div>

            {/* Other request cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRequests;
