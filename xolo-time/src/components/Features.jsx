import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscOrganization } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";
import { PiUserFocus } from "react-icons/pi";
import { IoHourglassOutline } from "react-icons/io5";

import feature_1 from "../assets/Team_mgmt.jpg";
import feature_2 from "../assets/profitability.jpg";
import feature_3 from "../assets/monitoring.jpg";

const cards = [
  {
    id: 1,
    title: "Manage your team effectively",
    image: feature_1,
    icon: VscOrganization,
    description_front:
      "Boost productivity with Xolotime — automated time tracking and clear insights for managing remote and onsite teams effectively.",
    description_back:
      "Empower your business with automated time tracking and team oversight. Clear insights into productivity, project progress, and workload balance.",
    list_back: [
      { name: "Timekeeping" },
      { name: "Sites and apps monitoring" },
      { name: "Activity tracking" },
      { name: "Screenshots capturing" },
      { name: "Task management" },
    ],
  },
  {
    id: 2,
    title: "Ensure the profitability of your business",
    image: feature_2,
    icon: PiUserFocus,
    description_front:
      "Keep projects profitable with real-time cost tracking and productivity insights.",
    description_back:
      "Unlock profit potential and financial clarity with Xolotime’s integrated project and billing modules. Reduce manual overhead and build trust with clients and employees alike.",
    list_back: [
      { name: "Project management" },
      { name: "Project budgeting" },
      { name: "Billing and invoicing" },
      { name: "Accurate payrolling" },
      { name: "Detailed reports" },
    ],
  },
  {
    id: 3,
    title: "Track attendance seamlessly",
    image: feature_3,
    icon: IoHourglassOutline,
    description_front:
      "Automate attendance and ensure accurate work hour logs for remote and onsite teams.",
    description_back:
      "Xolotime helps organizations eliminate guesswork by automating attendance and time-off management, ensuring legal compliance and fair labor practices.",
    list_back: [
      { name: "Automated timekeeping" },
      { name: "Attendance Logs" },
      { name: "Absence Reports" },
      { name: "Work Hour Validation" },
      { name: "Task management" },
      { name: "Shift scheduling" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-sky-100 to-blue-100 relative overflow-hidden">
      <div className="mx-auto text-center max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-12 shadow-sm"
        >
          <span className="text-blue-700 font-semibold text-lg tracking-wide">
            Xolotime Features
          </span>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 px-6">
          {cards.map((card, idx) => {
            const isFlipped = flippedCards[card.id] || false;

            return (
              <motion.div
                key={card.id}
                className="group [perspective:1200px] h-[520px] w-full cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                onClick={() => toggleFlip(card.id)}
              >
                {/* Inner Flip */}
                <motion.div
                  className="relative w-full h-full [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  whileHover={{ rotateY: !isFlipped ? 180 : 180 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-100/60 border border-blue-100 rounded-2xl shadow-lg backdrop-blur-sm p-6 flex flex-col items-center justify-between [backface-visibility:hidden]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-xl w-[280px] h-[180px] object-cover mb-4 shadow-md"
                    />
                    <h5 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {card.description_front}
                    </p>
                    <a
                      href="#"
                      className="px-5 py-2.5 bg-yellow-400 text-gray-900 font-semibold text-sm rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Try Demo
                    </a>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex flex-col items-start justify-start [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="p-3 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md mb-5">
                      <card.icon className="w-8 h-8 text-white" />
                    </div>

                    <h5 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {card.description_back}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {card.list_back.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-700 text-sm"
                        >
                          <span className="p-1.5 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-500 shadow-sm">
                            <FaCheck className="text-white text-xs" />
                          </span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
