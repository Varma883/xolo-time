import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/XOLO_banner.png"; // keep your image path
import Landing_demo from "../components/Landing_demo";
import dashboard from "../assets/demo_feature_1.jpeg";
import time_tracking from "../assets/2724272-removebg-preview.png";
import { VscDashboard } from "react-icons/vsc";

const list = [
  {
    heading: "Automated Attendance Logging",
    discription:
      "Clock-ins, clock-outs, breaks, and absences are automatically recorded — no manual data entry or spreadsheets required.",
  },
  {
    heading: "Custom Attendance Policies",
    discription:
      "Set flexible rules for work hours, late arrivals, and breaks that fit your company’s policies and regional compliance standards.",
  },
  {
    heading: "Real-Time Notifications",
    discription:
      "Receive instant alerts for late logins, extended idle time, or early departures — helping managers respond quickly and fairly.",
  },
  {
    heading: "Seamless Payroll Integration",
    discription:
      "Connect attendance data directly with payroll to automate salary calculations, overtime adjustments, and leave deductions.",
  },
  {
    heading: "Centralized Dashboard",
    discription:
      "Get a unified view of every employee’s attendance status, trends, and exceptions through a clean, visual dashboard.",
  },
  {
    heading: "Absence & Leave Insights",
    discription:
      "Track approved leaves, holidays, and absences automatically — ensuring smooth scheduling and balanced workloads.",
  },
];


const Attendece_Tracking = () => {
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
            Attendance Tracking
          </h1>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Precision{" "}
            <span className="text-cyan-500">Attendance, Simplified</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-800 font-semibold leading-snug">
            Smarter Attendance for Smarter Teams
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Automate clock-ins, track breaks, and monitor attendance in real
            time — all from a unified dashboard that ensures accuracy,
            compliance, and transparency.
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
            Effortless Attendance Oversight
          </div>

          {/* Description + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Xolotime redefines attendance management for modern teams. Every
                check-in, break, and checkout is logged automatically,
                eliminating manual entries and timesheet errors. Whether your
                team works on-site, hybrid, or remote, Xolotime provides a
                centralized system to track presence, punctuality, and
                productivity with ease.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With real-time alerts, custom attendance rules, and seamless
                payroll integration, managers stay informed and employees stay
                empowered. No micromanagement — just clear, reliable insights
                that promote accountability and efficiency.
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
                className="group bg-white/70 border border-gray-100 hover:border-sky-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                  <VscDashboard className="text-sky-500 text-xl" />
                  {item.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.discription}
                </p>
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

export default Attendece_Tracking;
