import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestSidebar from "../../Components/RestSideBar";

const RestaurantDashBoard = () => {
  const [restaurantName, setRestaurantName] = useState("");

  // Get user details from local storage
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("User_Info"));

    if (userDetails) {
      setRestaurantName(userDetails.roleName);
    }
  }, []);

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <RestSidebar />

      {/* Main Content */}
      <div className="h-screen flex items-center justify-center p-6 ml-52">
        {/* Glass Effect Box */}
        <div
          className="bg-white bg-opacity-0 backdrop-blur-lg rounded-lg shadow-lg p-20 text-center relative border border-white border-opacity-50"
          style={{ width: "700px", minHeight: "400px" }}
        >
          {/* Shine line on the top edge */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-line"></div>
          {/* Shine line on the right edge */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-shine-line"></div>
          {/* Shine line on the bottom edge */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-line"></div>
          {/* Shine line on the left edge */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-shine-line"></div>

          {/* Welcome Message and Post Food Button */}
          <h2 className="text-4xl font-bold text-yellow-500 mb-4 ">
            WELCOME,{" "}
            <span className="animate-blink">
              {restaurantName || "Loading..."}{" "}
              {/* Show "Loading..." while fetching */}
            </span>
          </h2>
          <p className="text-lg text-white mb-6 pt-4">
            Share Food With NGOs To Feed Who Are In Hungry...
          </p>
          <div className="flex justify-center">
            <Link to="/post-food">
              <button
                type="button"
                className=" mt-11 text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-6 py-3 shadow-lg transition duration-300"
              >
                Post Food For Share
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashBoard;
