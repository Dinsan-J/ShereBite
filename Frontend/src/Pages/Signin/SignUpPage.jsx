import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin", // Default role is 'admin'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-0 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-50">
        <h1 className="text-3xl font-bold text-center text-white">
          <span className="underline">SignUp</span>{" "}
          <span className="no-underline text-green-500 text-3xl font-bold text-center">
            ShereBite
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full mt-1 p-3 bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full mt-1 p-3 bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Role Selection (Radio Buttons) */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Role</label>
            <div className="flex items-center space-x-6">
              <div>
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="admin" className="text-white">
                  Admin
                </label>
              </div>

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

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-1/2 py-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center text-sm text-white mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
          >
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
