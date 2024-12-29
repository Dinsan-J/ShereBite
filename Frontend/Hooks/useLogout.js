import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/Context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate(); // Initialize navigate

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Clear localStorage and authentication context
      localStorage.removeItem("User_Info");
      setAuthUser(null);

      // Redirect to home page
      navigate("/"); // Use navigate to redirect
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
