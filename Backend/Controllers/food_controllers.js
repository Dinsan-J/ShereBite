import Food from "../Models/food_Model.js";

// Posting Food Items Logic
export const postFood = async (req, res) => {
  try {
    const { foodType, quantity, pickupTime, expiryDate, location, restaurant } =
      req.body;

    // Validate required fields
    if (
      !foodType ||
      !quantity ||
      !pickupTime ||
      !expiryDate ||
      !location ||
      !location.coordinates ||
      !restaurant
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Ensure coordinates are valid
    if (location.coordinates.length !== 2) {
      return res.status(400).json({ error: "Invalid location coordinates" });
    }

    // Ensure expiry date is after pickup time
    if (new Date(expiryDate) <= new Date(pickupTime)) {
      return res
        .status(400)
        .json({ error: "Expiry date must be after the pickup time" });
    }

    // Create a new food item
    const newFood = new Food({
      foodType,
      quantity,
      pickupTime,
      expiryDate,
      location,
      restaurant,
    });

    // Save the food item to the database
    await newFood.save();

    res.status(201).json({
      message: "Food item successfully posted",
      food: newFood,
    });
  } catch (error) {
    console.error("Error in postFood controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Getting Food Items Logic Goes Here

export const getFood = async (req, res) => {
  try {
    // Fetch all food items from the database without any filters
    const foodItems = await Food.find();

    console.log("Hello I'm from GetFood Hook");

    res.status(200).json({
      message: "Food items fetched successfully",
      food: foodItems,
    });
  } catch (error) {
    console.error("Error in getFood controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
