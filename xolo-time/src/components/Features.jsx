import React from "react";
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
      { name: "Shift scheduling" },
    ],
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-sky-100/50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10 px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block px-8 py-3 bg-white/80 backdrop-blur-xl rounded-full mb-16 shadow-sm border border-blue-100"
        >
          <span className="text-blue-700 font-semibold text-lg tracking-wide">
             Xolotime Features
          </span>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              className="group relative [perspective:1200px] h-[520px] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.85,0.4,1.1)] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-between p-6 [backface-visibility:hidden]">
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-2xl w-[280px] h-[180px] object-cover mb-4 shadow-md"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h5>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {card.description_front}
                  </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-6 flex flex-col items-start justify-start [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="p-3 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md mb-5">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h5>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {card.description_back}
                  </p>
                  <ul className="flex flex-col gap-3 mb-6">
                    {card.list_back.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-sm"
                      >
                        <span className="p-1.5 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 shadow-sm">
                          <FaCheck className="text-white text-xs" />
                        </span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => window.open("/contact", "_self")}
                  >
                    Schedule a Call
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
