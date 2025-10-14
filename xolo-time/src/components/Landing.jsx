import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import hero_img from '../assets/demo_feature_2.jpeg'

const Hero = () => {
  const gridRef = useRef(null);

  // Light shimmering animation on the grid using CSS variables only
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    let raf;
    let t = 0;
    const tick = () => {
      t += 0.5;
      el.style.setProperty("--shift", `${Math.sin(t / 60) * 8}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className=" relative overflow-hidden pt-28 lg:pt-15 pb-10 px-10">
      {/* Base radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 0%, rgba(17,205,239,0.16), transparent 60%), radial-gradient(1000px 600px at 85% 10%, rgba(28,37,132,0.18), transparent 55%), linear-gradient(180deg, #f7f9ff 0%, #ffffff 40%, rgba(17,205,239,0.08) 100%)"
        }}
      />

      {/* Conic light sweep accent */}
      <div
        className="pointer-events-none absolute -top-40 right-[-20%] h-[600px] w-[600px] blur-3xl opacity-50"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 50%, rgba(17,205,239,0) 0deg, rgba(17,205,239,.25) 90deg, rgba(28,37,132,.25) 180deg, rgba(17,205,239,0) 270deg)"
        }}
      />

      {/* Subtle grid with parallax shimmer */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          "--gap": "28px",
          "--color": "rgba(28,37,132,0.08)",
          backgroundImage:
            "linear-gradient(to right, var(--color) 1px, transparent 1px), linear-gradient(to bottom, var(--color) 1px, transparent 1px)",
          backgroundSize: "var(--gap) var(--gap)",
          transform: "translateY(var(--shift, 0px))"
        }}
      />

      {/* Animated blended blobs */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full mix-blend-multiply blur-3xl"
        style={{ background: "rgba(17,205,239,.25)" }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full mix-blend-multiply blur-3xl"
        style={{ background: "rgba(28,37,132,.22)" }}
      />

      {/* Content */}
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "rgba(17,205,239,.15)", color: "#1c2584" }}
          >
            🚀 Used by 10,000+ productive teams
          </div>
          <h1
            className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: "#374151" }}
          >
            Your Work,<span className="ml-2" style={{ color: "#1c2584" }}>Automatically</span> Measured
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stop tracking time manually. Our AI-powered platform captures work effortlessly while focus stays on impact.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4 magnetic">Start Free Trial</button>
            <button className="btn-secondary text-lg px-8 py-4">Watch Demo Video</button>
          </div> */}
          {/* <p className="text-gray-500 text-sm">Free 14-day trial • No credit card • Setup in 2 minutes</p> */}
        </motion.div>

       <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl overflow-hidden w-[90%] sm:w-[80%] md:w-[85%] lg:w-[100%] mx-auto">
  {/* MacBook top bar */}
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
    <span className="w-3 h-3 rounded-full bg-red-400"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-400"></span>
    <span className="text-gray-500 text-xs ml-3 tracking-wide">MacBook Preview</span>
  </div>

  {/* Image content */}
  <div className="relative">
    <img
      src={hero_img}
      alt="Demo preview"
      className="w-full h-auto object-cover rounded-b-3xl"
    />

    {/* Floating tag below MacBook */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1c2584] text-white text-sm px-5 py-2 rounded-xl shadow-lg animate-pulse whitespace-nowrap">
      Free 14-day trial • No credit card • Setup in 2 minutes
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;