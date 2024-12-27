import React from "react";

import RestSidebar from "../../Components/RestSideBar";

const RestaurantFoodPost = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <RestSidebar />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-11/12 md:w-3/4 lg:w-1/2 p-8 bg-white bg-opacity-0 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-50">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
            Post Food For Share
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Type */}
            <div>
              <label
                htmlFor="foodType"
                className="block text-lg font-medium text-white"
              >
                Food Type
              </label>
              <input
                type="text"
                id="foodType"
                name="foodType"
                placeholder="Enter the type of food (e.g., Vegetarian, Non-Veg)"
                className="mt-2 p-3 w-full bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Quantity */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-lg font-medium text-white"
              >
                Quantity (e.g., servings, weight)
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                placeholder="Enter the quantity"
                className="mt-2 p-3 w-full bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pickup Time */}
            <div>
              <label
                htmlFor="pickupTime"
                className="block text-lg font-medium text-white"
              >
                Pickup Time
              </label>
              <input
                type="time"
                id="pickupTime"
                name="pickupTime"
                className="mt-2 p-3 w-full bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-lg font-medium text-white"
              >
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                className="mt-2 p-3 w-full bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-lg font-medium text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your restaurant's location"
                className="mt-2 p-3 w-full bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-lg font-medium text-white"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your contact number"
                className="mt-2 p-3 w-full bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Post Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFoodPost;
