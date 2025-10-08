import React from "react";
import { motion } from "framer-motion";
import icon_1 from "../assets/track-icon-01.png";
import icon_2 from "../assets/track-icon-02.png";
import icon_3 from "../assets/track-icon-03.png";
import icon_4 from "../assets/track-icon-04.png";

const cards = [
  {
    id: 1,
    title: "Track Teams",
    image: icon_1,
    description:
      "Gain complete visibility into how much time your team spends on specific projects and tasks. With Xolotime, you can easily allocate hours, identify bottlenecks, and ensure projects are delivered on time and on budget.",
  },
  {
    id: 2,
    title: "Track Projects",
    image: icon_2,
    description:
      "Monitor team productivity without micromanaging. Xolotime provides transparent insights into workload distribution, collaboration patterns, and activity trends, helping you balance responsibilities and support your employees effectively.",
  },
  {
    id: 3,
    title: "Boost Productivity",
    image: icon_3,
    description:
      "Identify distractions and wasted effort, and empower employees with clear usage reports to optimize their workflow. By understanding work habits, managers and individuals can focus more on high-impact activities, improving overall efficiency.",
  },
  {
    id: 4,
    title: "Insights & Reports",
    image: icon_4,
    description:
      "Turn raw time data into actionable insights with Xolotime's powerful analytics dashboard. Generate custom reports to evaluate performance, measure ROI, and make informed business decisions based on real data in real time.",
  },
];

const blobVariants = {
  animate: {
    x: ["0px", "30px", "-20px", "0px"],
    y: ["0px", "-50px", "20px", "0px"],
    scale: [1, 1.1, 0.9, 1],
    transition: { duration: 7, repeat: Infinity },
  },
};

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero_2 = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Why Choose Xolotime
              </span>
              <h1 className="text-5xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 font-sans">
                Transform How You{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Track Time
                </span>
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Forget timers, note-taking, and manual input. XOLO Time tracks all your web and desktop activities automatically, providing precise daily records for documents, meetings, emails, websites, and video calls — effortlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Try Free Demo</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-gray-300 hover:border-cyan-400 text-gray-700 hover:text-cyan-600 font-semibold rounded-xl px-8 py-4 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Watch Demo Video</span>
              </button>
            </div>
          </div>

          {/* Right Section - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover:border-cyan-100/50"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-20 h-20 object-contain filter group-hover:brightness-110 transition-all duration-300" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100/50">
                    <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_2;
