import React from "react";
import RestSidebar from "../../Components/RestSideBar";
const ManagePostsPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar with fixed size */}
      <RestSidebar /> {/* Sidebar component here */}
      {/* Main Content */}
      <div className="flex-1 p-6 ml-4">
        {" "}
        {/* Adjust ml-16 to add space for Sidebar */}
        <div className="max-w-7xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-green-500 mb-8">
            Manage Posts
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
                <span className="font-bold">Quantity:</span> 20 servings
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
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                  Update
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Delete
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
                <span className="font-bold">Quantity:</span> 15 servings
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
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                  Update
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Delete
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
                <span className="font-bold">Quantity:</span> 10 pizzas
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
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                  Update
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePostsPage;
