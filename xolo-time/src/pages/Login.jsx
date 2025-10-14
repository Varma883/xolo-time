import React, { useState } from "react";
import logo from "../assets/logo-white.svg";
import xolotimeImage from "../assets/XOLO_banner.png";
import { Link } from "react-router-dom";
import { FaRegClock, FaUsers, FaChartLine, FaPuzzlePiece } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    alert("Login successful! Check console for form data.");
    setFormData({ email: "", password: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <div className="flex flex-col md:flex-row w-full max-w-7xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Left - Login Form */}
        <div className="w-full md:w-1/2 p-12 bg-white flex flex-col justify-center">
          <div className="flex justify-center md:justify-start mb-6">
            <img src={logo} alt="Company Logo" className="h-10" />
          </div>
          <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Log In to Your Account
          </h1>
          <p className="text-gray-600 mb-8 text-sm">
            Welcome back! Enter your credentials to continue tracking your time.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto md:mx-0">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
            >
              Log In
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        {/* Right - Hero / Promo */}
        <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-12 flex-col justify-center items-center overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/20 rounded-full blur-2xl"></div>

          <img
            src={xolotimeImage}
            alt="XoloTime Banner"
            className="relative z-10 mb-6 w-64 h-auto object-contain rounded-xl shadow-2xl"
          />
          <h2 className="text-4xl font-extrabold mb-4 text-center leading-snug">
            Efficient Time Tracking with XoloTime
          </h2>
          <p className="text-lg mb-8 text-center max-w-lg">
            Simplify your workflow, boost productivity, and get clear insights into your projects.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <FaRegClock className="text-2xl text-white" />
              <span>Accurate Time Logging</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-2xl text-white" />
              <span>Team Collaboration</span>
            </div>
            <div className="flex items-center gap-3">
              <FaChartLine className="text-2xl text-white" />
              <span>Detailed Reports</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPuzzlePiece className="text-2xl text-white" />
              <span>Seamless Integrations</span>
            </div>
          </div>

          <Link
            to="/"
            className="relative z-10 inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
