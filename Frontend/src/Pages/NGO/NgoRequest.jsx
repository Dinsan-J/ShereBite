import React from "react";
import NgoSidebar from "../../Components/NgoSideBar";

const NgoRequest = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar with fixed size */}
      <NgoSidebar /> {/* Sidebar component here */}
      {/* Main Content */}
      <div className="flex-1 p-6 ml-5">
        {" "}
        {/* Adjust ml-16 to add space for Sidebar */}
        <div className="max-w-7xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-yellow-500 mb-8">
            <span className="animate-blink">
              Available Posts from Nearest Restaurants
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Food Post 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Spaghetti Bolognese
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Food Type:</span> Main Course
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Quantity Available:</span> 20
                servings
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Pickup Time:</span> 2024-12-30 12:00
                PM
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Expiry Date:</span> 2024-12-31
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Location:</span> Downtown, City
                Center
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Restaurant:</span> Italian Bistro
              </p>
              <div className="mt-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Request Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter quantity"
                />
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 w-full">
                  Request Food
                </button>
              </div>
            </div>

            {/* Food Post 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Chicken Caesar Salad
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Food Type:</span> Salad
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Quantity Available:</span> 15
                servings
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Pickup Time:</span> 2024-12-30 1:00
                PM
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Expiry Date:</span> 2024-12-31
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Location:</span> Uptown, Green Park
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Restaurant:</span> Healthy Eats
              </p>
              <div className="mt-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Request Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter quantity"
                />
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 w-full">
                  Request Food
                </button>
              </div>
            </div>

            {/* Food Post 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Margherita Pizza
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Food Type:</span> Pizza
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Quantity Available:</span> 10 pizzas
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Pickup Time:</span> 2024-12-30 2:00
                PM
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Expiry Date:</span> 2024-12-31
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Location:</span> Main Street, City
                Square
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Restaurant:</span> Pizzeria Bella
              </p>
              <div className="mt-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Request Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter quantity"
                />
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 w-full">
                  Request Food
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoRequest;
