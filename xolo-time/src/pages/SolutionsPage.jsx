// src/pages/SolutionsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiBriefcase, FiZap, FiTarget, FiActivity, FiSettings } from "react-icons/fi"; // Example icons
import { FiCheck } from 'react-icons/fi';


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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="mx-auto px-4 relative z-10 max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Solutions Tailored for Your Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
          >
            Xolo Time helps teams of all sizes and industries overcome
            productivity challenges with intelligent time tracking and management.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#explore-solutions"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explore Our Solutions
          </motion.a>
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