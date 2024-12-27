import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-0 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-50">
        <h1 className="text-3xl font-bold text-center text-white">
          <span className="underline">Login</span>{" "}
          <span className="no-underline text-green-500 text-3xl font-bold text-center">
            ShereBite
          </span>
        </h1>

        <form className="space-y-4">
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
              placeholder="Enter your username"
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
              placeholder="Enter your password"
              className="w-full mt-1 p-3 bg-gray-50 bg-opacity-60 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </form>

        {/* Login Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-1/2 py-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>

        {/* Additional Links */}
        <div className="text-center text-sm text-white mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
