import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetFoodDetails = () => {
  const [loading, setLoading] = useState(false);
  const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    const getFoodDetails = async () => {
      setLoading(true);
      try {
        // const res = await fetch("/api/food/getFood");
        const res = await fetch("http://localhost:3000/api/food/getFood");

        console.log(res);
        const data = await res.json();
        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setFoodDetails(data.food);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getFoodDetails();
  }, []);

  return { loading, foodDetails };
};
export default useGetFoodDetails;
