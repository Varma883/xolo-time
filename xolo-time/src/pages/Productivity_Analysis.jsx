import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/XOLO_banner.png"; // keep your image path
import Landing_demo from "../components/Landing_demo";
import dashboard from "../assets/demo_feature_1.jpeg";
import time_tracking from "../assets/2724272-removebg-preview.png";
import { VscDashboard } from "react-icons/vsc";

const list = [
  {
    heading: "Comprehensive Productivity Scores",
    discription:
      "Measure productivity based on real-time activity, app usage, and task completion — giving a clear picture of how efficiently teams work.",
  },
  {
    heading: "Application & Website Usage Insights",
    discription:
      "Understand which tools drive focus and which cause distractions. Xolotime breaks down active vs. idle app time for precise efficiency tracking.",
  },
  {
    heading: "Performance Trends & Comparisons",
    discription:
      "Visualize productivity trends over days, weeks, and months to identify improvement areas and recognize consistent top performers.",
  },
  {
    heading: "Goal-Oriented Dashboards",
    discription:
      "Set custom productivity goals, track progress in real time, and receive automated summaries to support better team performance management.",
  },
  {
    heading: "Data-Driven Coaching",
    discription:
      "Use insights from activity and performance reports to guide employees, balance workloads, and enhance overall team efficiency.",
  },
  {
    heading: "Customizable Reporting",
    discription:
      "Generate detailed, exportable reports filtered by team, department, or timeframe — perfect for performance reviews and strategic decisions.",
  },
];

const Productivity_Analysis = () => {
  return (
    <>
      <section className="mt-5 relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-200 to-cyan-200 px-6 lg:px-10 text-center">
        {/* Subtle floating background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[160px]" />
        </div>

        {/* Tagline */}
        <div className="mb-6 inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-200/40">
          <h1 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
            Productivity Analysis
          </h1>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Smart Productivity{" "}
            <span className="text-cyan-500"> Analysis with Xolotime</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-800 font-semibold leading-snug">
            Turn Work Data Into Actionable Insights
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Analyze activity patterns, app usage, and task outcomes to uncover
            what drives performance — empowering teams with real, measurable
            productivity intelligence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <button className="relative group px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_8px_30px_rgba(17,205,239,0.35)] hover:shadow-[0_10px_35px_rgba(17,205,239,0.55)] transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Try Free Demo</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition duration-300"></div>
          </button>

          <button className="relative px-10 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-200 rounded-full hover:border-cyan-400 hover:text-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-white/80">
            Watch Demo Video
          </button>
        </div>

        <motion.div
          className="relative mt-14 mb-10 max-w-6xl w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* ✨ Glowing blue gradient background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-200/70 to-blue-200/40 blur-[90px] -z-10"></div>

          {/* 🧊 Frosted glass container with lighting border */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border-4 border-sky-300/70 bg-white/80 shadow-[0_10px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            transition={{ duration: 0.6 }}
          >
            <img
              src={dashboard}
              alt="Xolotime Dashboard Preview"
              className="w-full object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative bg-gradient-to-b from-white via-sky-50/70 to-sky-100/40 py-20 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Tagline */}
          <div className="w-fit px-5 py-2 mx-auto rounded-full bg-sky-200/60 text-sky-800 text-sm font-medium mb-10 shadow-sm backdrop-blur-sm">
            Seamless Productivity Intelligence
          </div>

          {/* Description + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Xolotime transforms everyday work data into meaningful insights.
                By tracking active time, application usage, and task completion,
                it generates accurate productivity scores that reflect true
                performance — not just time spent online.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With detailed dashboards, visual reports, and trend analytics,
                managers can easily identify top performers, detect burnout
                risks, and optimize workflows across teams. 
                Whether for remote,
                hybrid, or in-office setups, Xolotime delivers clarity,
                fairness, and focus — helping businesses build data-informed
                productivity cultures.
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={time_tracking}
                alt="Time Tracking Illustration"
                className="w-[480px] max-w-full rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between bg-white/80 border border-gray-100 hover:border-sky-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm h-full"
              >
                <div>
                  <h3
                    className="flex items-start gap-2 text-lg font-semibold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300 leading-snug min-h-[48px] line-clamp-2"
                    title={item.heading}
                  >
                    <VscDashboard className="text-sky-500 text-xl shrink-0 mt-0.5" />
                    <span className="break-words">{item.heading}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.discription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative blurred gradients */}
        <div className="absolute -z-10 top-[-150px] left-[-100px] w-[400px] h-[400px] bg-sky-200/40 blur-[100px] rounded-full" />
        <div className="absolute -z-10 bottom-[-120px] right-[-80px] w-[380px] h-[380px] bg-cyan-300/40 blur-[110px] rounded-full" />
      </section>
    </>
  );
};

export default Productivity_Analysis;
