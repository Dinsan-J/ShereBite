import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../Hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-sm w-full border border-white border-opacity-30">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          <span className="underline">Login</span>{" "}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-9 py-3 text-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-ring loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-4">
          <span className="text-gray-300">Don’t have an account?</span>{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
