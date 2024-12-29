import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../src/Context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    username,
    email,
    password,
    confirmpassword,
    role,
    roleName,
  }) => {
    const success = handleInputErrors({
      username,
      email,
      password,
      confirmpassword,
      role,
      roleName,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmpassword,
          role,
          roleName,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("User_Info", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  username,
  email,
  password,
  confirmpassword,
  role,
  roleName,
}) {
  if (
    !username ||
    !email ||
    !password ||
    !confirmpassword ||
    !role ||
    !roleName
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    toast.error("Please enter a valid email address");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
