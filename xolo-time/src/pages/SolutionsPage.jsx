// src/pages/SolutionsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiBriefcase, FiZap, FiTarget, FiActivity, FiSettings } from "react-icons/fi"; // Example icons
import { FiCheck } from 'react-icons/fi';
import  solutionImg from "../assets/demo_feature_3.jpeg"   


const solutions = [
  {
    icon: FiBriefcase,
    title: "For Remote & Hybrid Teams",
    description: "Seamless time tracking and activity monitoring to keep distributed teams connected and productive.",
    link: "#",
    color: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600"
  },
  {
    icon: FiUsers,
    title: "For Agencies & Consultants",
    description: "Accurate client billing, project profitability tracking, and easy team workload management.",
    link: "#",
    color: "from-cyan-100 to-cyan-200",
    iconColor: "text-cyan-600"
  },
  {
    icon: FiTarget,
    title: "For HR & Operations",
    description: "Streamline payroll, ensure compliance, and gain insights into employee engagement and efficiency.",
    link: "#",
    color: "from-indigo-100 to-indigo-200",
    iconColor: "text-indigo-600"
  },
  {
    icon: FiZap,
    title: "For Small Businesses",
    description: "Simple, affordable tools to track employee time, manage tasks, and grow your business.",
    link: "#",
    color: "from-green-100 to-green-200",
    iconColor: "text-green-600"
  },
  {
    icon: FiActivity,
    title: "For Project Managers",
    description: "Monitor project progress, allocate resources efficiently, and stay on budget with detailed reporting.",
    link: "#",
    color: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600"
  },
  {
    icon: FiSettings,
    title: "For Enterprise Solutions",
    description: "Scalable solutions with custom integrations, dedicated support, and advanced security for large organizations.",
    link: "#",
    color: "from-pink-100 to-pink-200",
    iconColor: "text-pink-600"
  },
];

const benefits = [
  { icon: FiZap, title: "Boost Productivity", description: "Identify bottlenecks and optimize workflows." },
  { icon: FiActivity, title: "Improve Transparency", description: "Gain clear insights into team activity." },
  { icon: FiUsers, title: "Simplify Management", description: "Effortlessly manage schedules and tasks." },
  { icon: FiCheck, title: "Accurate Billing", description: "Ensure clients are billed precisely for work." },
];

const SolutionsPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Banner Section */}
      <section
  className="relative py-24 px-6 lg:px-20 overflow-hidden"
  style={{
    background:
      "radial-gradient(1000px 600px at 80% 10%, rgba(6,182,212,0.15), transparent 60%), radial-gradient(1000px 600px at 10% 40%, rgba(37,99,235,0.18), transparent 55%), linear-gradient(180deg, #f8fbff 0%, #ffffff 40%, rgba(219,234,254,0.2) 100%)",
  }}
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="space-y-8"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
        Solutions Tailored for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Your Success
        </span>
      </h1>

      <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
        Empower teams across all industries with intelligent time tracking,
        workforce management, and productivity optimization—crafted to help you
        achieve measurable results faster.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <a
          href="#explore-solutions"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300"
        >
          Explore Solutions →
        </a>
      </motion.div>
    </motion.div>

    {/* RIGHT ILLUSTRATION */}
    <motion.div
      className="relative flex justify-center lg:justify-end items-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <motion.div
        className="relative w-full max-w-md"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Image Placeholder */}
        <img
          src={solutionImg} // import your image here
          alt="Solutions Dashboard"
          className="relative z-10 rounded-3xl shadow-[0_20px_60px_rgba(37,99,235,0.25)] w-full hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        {/* Glowing Backgrounds */}
        <div className="absolute -inset-14 bg-gradient-to-r from-blue-500/30 via-cyan-400/25 to-purple-400/25 blur-3xl rounded-full -z-10"></div>
        <div className="absolute -top-10 right-0 w-28 h-28 bg-cyan-300/20 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 -left-10 w-24 h-24 bg-blue-400/15 blur-2xl rounded-full animate-pulse delay-500"></div>

        {/* Rotating Halo */}
        <motion.div
          className="absolute -inset-14 -z-20 rounded-full overflow-hidden"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-[conic-gradient(from_0deg,rgba(34,211,238,0.4),rgba(59,130,246,0.35),rgba(147,51,234,0.3),rgba(34,211,238,0.4))] blur-[80px] opacity-90 rounded-full"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Solutions Grid */}
      <section className="py-20 bg-white" id="explore-solutions">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Solutions for Modern Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Discover how Xolo Time addresses the unique needs of various teams and roles.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                href={solution.link}
                className={`flex flex-col items-center p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer text-center bg-gradient-to-br ${solution.color}`}
              >
                <div className={`p-4 rounded-full bg-white shadow-md mb-6 ${solution.iconColor}`}>
                  <solution.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Unlock Key Advantages with Xolo Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Experience the transformative power of intelligent time and productivity management.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md border border-gray-100 text-center"
              >
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <div className="mx-auto px-4 max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Find the Perfect Solution for Your Business
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90"
          >
            Get a personalized demo to see how Xolo Time can specifically address your team's needs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Request a Demo
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;