import React from "react";
import useGetFoodDetails from "../../Hooks/useGetFoodDetails";
// import MapComponent from "../Components/Map";

const FoodDetails = () => {
  const { loading, foodDetails } = useGetFoodDetails();

  if (loading) {
    return (
      <div className="py-2 flex flex-col items-center">
        <span className="loading loading-spinner mx-auto"></span>
      </div>
    );
  }

  if (foodDetails.length === 0) {
    return (
      <div className="py-2 flex flex-col items-center">
        <p>No food details available.</p>
      </div>
    );
  }

  return (
    <div
      className="py-2 flex flex-col overflow-auto"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      {foodDetails.map((food, idx) => {
        const hasLocation = food?.location && food.location.coordinates;

        return (
          <div
            key={idx}
            className="border p-4 mb-4 rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-bold text-lg">{food.foodType}</h3>
            <p className="text-sm">
              <span className="font-semibold">Quantity:</span> {food.quantity}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Restaurant:</span>{" "}
              {food.restaurant}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Pickup Time:</span>{" "}
              {new Date(food.pickupTime).toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Expiry Date:</span>{" "}
              {new Date(food.expiryDate).toLocaleString()}
            </p>

            {/* location features have to be add */}

            <h4 className="font-semibold mt-2">Location:</h4>
            {hasLocation ? (
              food.location.coordinates
            ) : (
              <p className="text-sm">Location not available</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FoodDetails;
