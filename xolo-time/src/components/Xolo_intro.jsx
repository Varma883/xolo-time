import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feature_1 from "../assets/XOLO_banner.png";
import feature_2 from "../assets/feartures_2.jpg";
import feature_3 from "../assets/features_3.jpg";
import feature_4 from "../assets/features_4.jpg";
import feature_5 from "../assets/features_5.jpg";

const featureList = [
  { name: "Time Tracking", image: feature_1 },
  { name: "Project Management", image: feature_2 },
  { name: "Team Management", image: feature_3 },
  { name: "Billing Management", image: feature_4 },
  { name: "Reporting", image: feature_5 },
  { name: "Time Off", image: feature_1 },
];

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(featureList[0]);

  return (
    <section className="relative bg-[#f8fbfd] text-gray-700 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_70%)]"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          What makes{" "}
          <span className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent">
            Xolotime
          </span>{" "}
          your best business companion
        </h1>
        <h2 className="text-lg md:text-xl mt-4 text-gray-600">
          Everything you need to{" "}
          <span className="font-semibold text-gray-900">
            manage your team efficiently
          </span>
        </h2>
      </motion.div>

      {/* Layout */}
      <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Feature Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-4"
        >
          {featureList.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => setCurrentFeature(item)}
              type="button"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full text-left px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 border
                ${
                  currentFeature.name === item.name
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                }`}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Right - Feature Image */}
        <motion.div
          key={currentFeature.image}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative w-full max-w-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentFeature.image}
                src={currentFeature.image}
                alt={currentFeature.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl w-full shadow-2xl"
              />
            </AnimatePresence>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/50 px-3 py-1 rounded-lg">
              {currentFeature.name}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
