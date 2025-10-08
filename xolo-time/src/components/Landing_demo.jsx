import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/XOLO_banner.png"; // keep your image path

const Landing_demo = () => {
  return (
     <section
      aria-label="Xolotime — Time tracking hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-sky-50"
    >
      {/* LEFT / RIGHT GRID */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== Left: Copy & CTAs ===== */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-cyan-600 bg-cyan-50/60 px-3 py-1 rounded-full shadow-sm">
              Time Tracking
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Track{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Effortlessly
              </span>
            </h1>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-gray-600 text-lg leading-relaxed">
              Automatic time tracking that runs while your team works — exact minutes,
              smart idle detection, and exportable reports. Less admin. More focus.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="/signup"
                role="button"
                aria-label="Get started with Xolotime"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="relative inline-flex items-center overflow-hidden px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg ring-1 ring-cyan-300/30"
              >
                Get Started →
              </motion.a>

              <motion.a
                href="#demo"
                aria-label="See demo"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center px-6 py-3 rounded-full border border-cyan-200 text-cyan-600 font-medium bg-white/60 backdrop-blur-sm"
              >
                See Demo
              </motion.a>
            </div>

            {/* Feature Badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Auto-capture
              </div>
              <div className="px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                App & URL tracking
              </div>
              <div className="px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Export reports
              </div>
            </div>
          </motion.div>

          {/* ===== Right: Mockup Card (image) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="relative w-[320px] sm:w-[420px] lg:w-[520px] rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl"
            >
              {/* small top strip to make it feel like a native window */}
              <div className="absolute top-3 left-4 flex items-center gap-2 z-10">
                <span className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></span>
              </div>

              <img
                src={heroImg}
                alt="Xolotime dashboard preview"
                className="w-full h-full object-cover"
                draggable="false"
              />

              {/* floating pill showing live minutes (small overlay) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="absolute left-4 bottom-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                Live — 03:47:12
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating gradient blobs (animated via Framer Motion — NO CSS keyframes) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.65, scale: 1 }}
        animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 -top-28 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.22), transparent 35%)",
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0.55, scale: 1 }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="pointer-events-none absolute -right-36 -bottom-36 w-[560px] h-[560px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.18), transparent 40%)",
        }}
      />
    </section>
  )
}

export default Landing_demo
