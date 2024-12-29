import React, { useState } from "react";
import useSignUp from "../../../Hooks/useSignUp";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "ngo",
    roleName: "",
  });

  const { loading, signup } = useSignUp();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-sm w-full border border-white border-opacity-30 h-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          <span className="underline">SignUp</span>{" "}
          <span className="no-underline text-green-500">ShereBite</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">
              Username
            </label>
            <div className="flex items-center border border-gray-300 bg-gray-100 bg-opacity-20 rounded-lg overflow-hidden">
              <span className="p-2 text-gray-500">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">Email</label>
            <div className="flex items-center border border-gray-300 bg-gray-100 bg-opacity-20 rounded-lg overflow-hidden">
              <span className="p-2 text-gray-500">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 bg-gray-100 bg-opacity-20 rounded-lg overflow-hidden">
              <span className="p-2 text-gray-500">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 bg-gray-100 bg-opacity-20 rounded-lg overflow-hidden">
              <span className="p-2 text-gray-500">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="Confirm your password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Role Selection (Radio Buttons) */}
          <div className="space-y-1 mb-4">
            <label className="block text-sm font-medium text-white">Role</label>
            <div className="flex items-center space-x-6">
              <div>
                <input
                  type="radio"
                  id="ngo"
                  name="role"
                  value="ngo"
                  checked={formData.role === "ngo"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="ngo" className="text-white">
                  NGO
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="restaurant"
                  name="role"
                  value="restaurant"
                  checked={formData.role === "restaurant"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="restaurant" className="text-white">
                  Restaurant
                </label>
              </div>
            </div>
          </div>

          {/* Conditional Organization Name Input */}
          {formData.role && (
            <div className="mb-4">
              <label
                htmlFor="roleName"
                className="block text-white font-medium mb-2"
              >
                {formData.role === "ngo" ? "NGO Name" : "Restaurant Name"}
              </label>
              <div className="flex items-center border border-gray-300 bg-gray-100 bg-opacity-20 rounded-lg overflow-hidden">
                <span className="p-2 text-gray-500">
                  <i className="fas fa-building"></i>
                </span>
                <input
                  type="text"
                  id="roleName"
                  name="roleName"
                  value={formData.roleName}
                  onChange={handleChange}
                  placeholder={
                    formData.role === "ngo"
                      ? "Enter NGO name"
                      : "Enter Restaurant name"
                  }
                  className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* New Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className=" text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-9 py-3  text-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-ring loading-sm"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-4">
          <span className="text-gray-300">Already have an account?</span>{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
