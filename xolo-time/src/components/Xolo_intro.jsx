import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiGrid,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiSun,
} from "react-icons/fi";

import feature_1 from "../assets/XOLO_banner.png";
import feature_2 from "../assets/feartures_2.jpg";
import feature_3 from "../assets/features_3.jpg";
import feature_4 from "../assets/features_4.jpg";
import feature_5 from "../assets/features_5.jpg";

const featureList = [
  { name: "Time Tracking", icon: FiClock, image: feature_1 },
  { name: "Project Management", icon: FiGrid, image: feature_2 },
  { name: "Team Management", icon: FiUsers, image: feature_3 },
  { name: "Billing & Invoicing", icon: FiDollarSign, image: feature_4 },
  { name: "Reporting & Analytics", icon: FiBarChart2, image: feature_5 },
  { name: "Time Off Management", icon: FiSun, image: feature_1 },
];

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(featureList[0]);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 py-20 px-6 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-[-5%] w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-[-5%] w-[28rem] h-[28rem] bg-cyan-100/50 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Discover the Power of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            XoloTime
          </span>
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-600">
          From tracking time to managing projects — XoloTime gives you complete
          control over your productivity and performance.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Feature Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-sm mx-auto lg:mx-0">
          {featureList.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => setCurrentFeature(item)}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center w-[250px]  gap-3 px-5 py-3 rounded-xl font-medium text-base border transition-all duration-300 shadow-sm
                ${
                  currentFeature.name === item.name
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-blue-500 shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                }`}
            >
              <item.icon
                className={`text-lg ${
                  currentFeature.name === item.name
                    ? "text-white"
                    : "text-blue-600"
                }`}
              />
              <span>{item.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="relative w-full max-w-3xl">
          <div className="relative bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>
              <span className="text-sm text-gray-500">
                xolotime.com/dashboard
              </span>
              <div className="w-8" />
            </div>

            {/* Animated Image */}
            <div className="p-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFeature.image}
                  src={currentFeature.image}
                  alt={currentFeature.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-xl w-full h-[360px] object-cover shadow-sm"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Label */}
          <motion.div
            key={currentFeature.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm md:text-base font-semibold px-6 py-2 rounded-full shadow-lg"
          >
            {currentFeature.name}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
