import Buttons from "../Home/Buttons";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className="p-h h-screen flex flex-col items-center justify-center">
      {/* Glass Effect Box with Shine Line Animation */}
      <div className="w-3/4 md:w-3/4 lg:w-2/3 bg-white bg-opacity-0 backdrop-blur-lg rounded-lg shadow-lg p-8 text-center mb-8 relative border border-white border-opacity-50">
        {/* Shine line on the top edge */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-line"></div>

        {/* Shine line on the right edge */}
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-shine-line"></div>

        {/* Shine line on the bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-line"></div>

        {/* Shine line on the left edge */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-shine-line"></div>

        <h1 className="text-5xl font-bold text-center text-white pt-10">
          Welcome To ShereBite{" "}
        </h1>

        {/* Logo */}
        <div className="pt-4">
          <img
            src={logo}
            alt="ShereBite Logo"
            className="w-32 h-auto mx-auto"
          />
        </div>

        <p className="text-lg text-gray-300 mt-4">
          Join us to help share food and spread love . . .
          <span className="animate-blink">❤️</span>
        </p>

        <h2 className="text-3xl font-bold text-center text-blue-700 pt-4">
          Register As
        </h2>
        <div className="pt-16">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Home;
