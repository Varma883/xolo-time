import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/XOLO_banner.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-wide text-blue-200"
          >
            Xolotime is a time tracking software
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Say hello to <br />
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Automatic Time Tracking
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg text-blue-100"
          >
            Xolotime is a time tracker and timesheet app that lets you track
            work hours across projects. <br />
            <span className="font-medium text-white">Unlimited users.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative group px-8 py-3 rounded-2xl font-semibold text-lg text-blue-900 
                 bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg shadow-yellow-500/40 
                 hover:from-yellow-300 hover:to-orange-300 transition-all duration-300"
            >
              <span>Get Started Free</span>
              <span className="absolute inset-0 rounded-2xl bg-yellow-400 blur-xl opacity-40 group-hover:opacity-60 transition"></span>
            </motion.a>

            <motion.a
              href="/demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-8 py-3 rounded-2xl font-medium text-lg text-white border border-blue-400/60 
                 bg-gradient-to-r from-blue-700/40 to-blue-900/30 
                 backdrop-blur-lg shadow-md hover:shadow-blue-500/30 
                 hover:bg-blue-700/60 transition-all duration-300"
            >
              Book a Demo
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -top-8 -left-8 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
          <img
            src={heroImg}
            alt="Dashboard Preview"
            className="relative z-10 w-full rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
