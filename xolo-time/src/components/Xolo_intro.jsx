import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiGrid, FiUsers, FiDollarSign, FiBarChart2, FiSun } from "react-icons/fi";

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
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-700 py-12 lg:py-16 px-4 sm:px-6 md:px-6 overflow-hidden">
      {/* Background Gradients/Blobs */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative text-center max-w-3xl mx-auto mb-10 z-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-gray-900">
          Unlock the Full Power of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Xolo Time
          </span>
        </h2>
        <p className="text-base md:text-lg mt-3 text-gray-600 max-w-xl mx-auto">
          Everything you need to{" "}
          <span className="font-semibold text-gray-900">
            manage your team efficiently
          </span>{" "}
          and drive business growth.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-block px-5 py-1.5 bg-blue-50 rounded-full mt-6 shadow-sm border border-blue-200"
        >
          <span className="text-blue-700 font-semibold text-sm tracking-wide">
            Core Features
          </span>
        </motion.div>
      </motion.div>

      {/* Feature Display */}
      <div className="relative mt-8 max-w-6xl mx-auto z-10 flex flex-col items-center">
        {/* Image */}
        <motion.div
          key={currentFeature.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl mb-10 relative"
        >
          <div className="relative bg-gray-900 p-2 rounded-xl shadow-lg border border-gray-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-6 bg-gray-800 rounded-t-xl flex items-center px-3">
              <div className="flex space-x-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>
              <div className="flex-grow text-center text-gray-400 text-xs">
                xolotime.com/dashboard
              </div>
            </div>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFeature.image}
                  src={currentFeature.image}
                  alt={currentFeature.name}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="rounded-b-lg w-[500px] h-[300px] mx-auto object-cover border border-gray-700 transition-transform duration-400 group-hover:scale-[1.003]"
                />
              </AnimatePresence>
            </div>

            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-base md:text-lg font-semibold bg-black/60 px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {currentFeature.name}
            </span>
          </div>
        </motion.div>

        {/* Feature Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl"
        >
          {featureList.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => setCurrentFeature(item)}
              type="button"
              whileTap={{ scale: 0.95 }}
              whileHover={{
                y: currentFeature.name === item.name ? 0 : -2,
                boxShadow:
                  currentFeature.name === item.name
                    ? "0 8px 12px -2px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)"
                    : "0 2px 4px -1px rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)",
              }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 border
                ${
                  currentFeature.name === item.name
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md border-blue-500 scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                }`}
            >
              <item.icon className="text-lg flex-shrink-0" />
              <span>{item.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
