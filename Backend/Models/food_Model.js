import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    foodType: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    pickupTime: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
    restaurant: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
export default Food;
