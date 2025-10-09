// src/components/Services.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiSmartphone,
  FiCheckCircle,
  FiHeadphones,
  FiUsers,
  FiGlobe,
  FiPhoneCall,
} from "react-icons/fi";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

const Highlights = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Powerful Reports",
      icon: FiMessageSquare,
      description:
        "Detailed reports and insights for executives, managers and employees.",
      color: "from-sky-50 to-sky-100",
      iconColor: "text-sky-500",
    },
    {
      id: 2,
      title: "Work-Life Balance",
      icon: FiUsers,
      description:
        "Encourage work-life balance and avoid burnout across your teams.",
      color: "from-cyan-50 to-cyan-100",
      iconColor: "text-cyan-500",
    },
    {
      id: 3,
      title: "Web & App Usage",
      icon: AiFillProduct,
      description:
        "Track program and app usage, as well as time spent on specific websites.",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-500",
    },
    {
      id: 4,
      title: "Employee Controls",
      icon: FiHeadphones,
      description:
        "Enable flexible employee controls for effective time management.",
      color: "from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-500",
    },
    {
      id: 5,
      title: "Time Use Alerts",
      icon: FiSmartphone,
      description:
        "Automated alerts keep employees focused and aware of productivity gaps.",
      color: "from-sky-50 to-sky-100",
      iconColor: "text-sky-500",
    },
    {
      id: 6,
      title: "Track Breaks",
      icon: FiCheckCircle,
      description:
        "Easily monitor breaks and time away from the workstation for accurate tracking.",
      color: "from-cyan-50 to-cyan-100",
      iconColor: "text-cyan-500",
    },
    {
      id: 7,
      title: "Screenshots",
      icon: FiPhoneCall,
      description:
        "Capture screenshots at intervals to maintain transparency and accountability.",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-500",
    },
    {
      id: 8,
      title: "Billing",
      icon: FiGlobe,
      description:
        "Automatically calculate payroll based on fixed salaries or tracked hours.",
      color: "from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
      id="services"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-sky-200/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#c5d5e3_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 bg-sky-100 rounded-full mb-4"
          >
            <span className="text-sky-700 font-medium">Xolotime Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              Employee Management
            </span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sky-700 max-w-3xl mx-auto"
          >
            Revolutionary employee management solutions designed to boost
            productivity, streamline team operations, and maximize business
            growth.
          </motion.p>
        </div>

        {/* Updated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer text-center bg-gradient-to-br ${service.color}`}
            >
              <div
                className={`p-4 rounded-full bg-white shadow-md mb-6 ${service.iconColor}`}
              >
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg">
            Take Your Workforce Productivity to the Next Level.
          </div>
          <p className="text-sky-700 mt-6 text-lg max-w-2xl mx-auto">
            Come onboard and transform the way you track, manage, and grow your
            teams.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
            to={'/signup'}>
              <motion.button
              onClick={() => (window.location.href = "/contact")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
            </Link>
            <Link
            to={'/contact'}>
            <motion.button
              onClick={() => (window.location.href = "/contact")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-sky-700 border-2 border-sky-500 px-8 py-3 rounded-xl font-medium hover:bg-sky-50"
            >
              Schedule Demo
            </motion.button>
            </Link>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
