import React from "react";
import feature_1 from "../assets/full_ft_1.jpg";
import feature_2 from "../assets/full_ft_2.jpg";
import feature_3 from "../assets/full_ft_3.jpg";
import feature_4 from "../assets/full_ft_4.jpg";
import CTA_section from "../components/CTA_section"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiStopwatch } from "react-icons/gi";
import { LuTimerReset, LuClipboardCheck } from "react-icons/lu";
import { PiMonitor, PiCalendarCheck, PiHourglass } from 'react-icons/pi';
import { RiBarChart2Line } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { FaArrowRight } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";





const cards = [
  {
    icon: LuTimerReset,
    name: "Time Tracking",
    discription:
      "Xolotime removes manual timesheets by automatically tracking work hours throughout daily tasks. It logs clock-ins, clock-outs, breaks, and work intervals with precision, ensuring accurate productivity data while users stay focused on their work.",
    path: "/time-tracking",
  },

  {
    icon: GiStopwatch,
    name: "Active & Idle Time Tracking",
    discription:
      "Xolotime monitors keyboard and mouse activity, logging time as active, idle, or away. Managers get clear productivity insights, can spot bottlenecks, optimize workflows, and encourage healthier work habits",
    path: "/active-idle-tracking",
  },

  {
    icon: PiMonitor,
    name: "Screenshot Monitoring",
    discription:
      "Screenshots can be captured at configurable intervals, providing a transparent record of work activities. This helps verify remote work, ensure compliance, and support audits, all while respecting privacy with clear notifications and data protection",
    path: "/screenshot-monitoring",
  },

{
    icon: TbUsersGroup ,
    name: "Attendance Tracking",
    description:
      "Xolotime tracks all attendance events—late arrivals, early leaves, breaks, and absences—on a unified dashboard. Custom policies, real-time alerts, and payroll integration simplify attendance management, reduce time theft, and ensure compliance.",
    path: "/attendece-tracking",
  },
  {
    icon: RiBarChart2Line,
    name: "Productivity Analysis",
    description:
      "Xolotime analyzes active time, app usage, and task completion to generate productivity scores and trends. Managers get detailed reports to identify top performers, coach employees, and optimize workflows based on real data.",
    path: "/productivity-analysis",
  },
  {
    icon: LuClipboardCheck,
    name: "Project/Task Management",
    description:
      "Integrated with time tracking, Xolotime’s project and task management lets teams create assignments, set deadlines, allocate resources, and monitor progress. Every tracked time entry links to specific tasks, enabling precise project insights and performance evaluation from a single interface",
    path: "/project-task-management",
  },
  {
    icon: TbWorld,
    name: "App/URL/File Monitoring",
    description:
      "Xolotime tracks time spent on apps, URLs, and files, allowing managers and users to categorize activities as productive, unproductive, or neutral. This enables focused coaching, accountability, and reduced time spent on non-work-related tasks",
    path: "/app-url-monitoring",
  },
  {
    icon: PiCalendarCheck,
    name: "Employee Scheduling",
    description:
      "Xolotime’s integrated scheduler lets managers assign shifts, approve time-off, and support flexible work arrangements. Employees get advance schedules and automated reminders, reducing confusion and absenteeism. Analytics provide insights for smarter workforce planning.",
    path: "/employee-scheduling",
  },
  {
    icon: LiaFileInvoiceDollarSolid,
    name: "Reports",
    description:
      "Xolotime’s reporting module provides exportable data on hours, projects, productivity, and app usage. Custom filters and widgets deliver detailed insights, streamlining audits, meetings, and strategic planning with data-driven clarity.",
    path: "/reports",
  },
 
 


 




];

const Features_full = () => {
  return (
    
    <div>
      {/* hero section */}
      <div
        className="py-20 px-6 lg:px-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 0%, rgba(17,205,239,0.16), transparent 60%), radial-gradient(1000px 600px at 85% 10%, rgba(28,37,132,0.18), transparent 55%), linear-gradient(180deg, #f7f9ff 0%, #ffffff 40%, rgba(17,205,239,0.08) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                Effortless Time Tracking and{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Workforce Productivity
                </span>{" "}
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Xolotime automates timekeeping, team management, productivity
                analysis, and more — empowering your business with actionable
                insights and complete transparency.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(17,205,239,0.4)] transition-all duration-300">
                Get Started →
              </button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main Image (CRISP) */}
              <img
                src={feature_3}
                alt="Feature"
                className="relative z-10 rounded-3xl shadow-[0_20px_60px_rgba(56,189,248,0.25)] w-full
                 hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />

              {/* Soft Cyan–Blue Halo (behind image only) */}
              <div className="absolute -inset-14 bg-gradient-to-r from-cyan-400/30 via-blue-500/25 to-purple-500/25 blur-3xl rounded-full -z-10"></div>

              {/* Decorative Floating Light Spots (background depth) */}
              <div className="absolute -top-10 right-0 w-28 h-28 bg-cyan-300/20 blur-2xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 -left-10 w-24 h-24 bg-blue-400/15 blur-2xl rounded-full animate-pulse delay-500"></div>

              {/* Outer Subtle Glow Ring */}
              <motion.div
                className="absolute -inset-14 -z-20 rounded-full overflow-hidden"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-[conic-gradient(from_0deg,rgba(34,211,238,0.4),rgba(59,130,246,0.35),rgba(147,51,234,0.3),rgba(34,211,238,0.4))] blur-[80px] opacity-90 rounded-full"></div>
              </motion.div>

              {/* Gentle Overlay Light (adds cinematic polish but keeps image visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 rounded-3xl mix-blend-soft-light pointer-events-none z-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* fetures list */}
      <div>
        <section className="py-20 bg-gradient-to-b from-blue-50 via-sky-100 to-blue-100 relative overflow-hidden">
          <div className="max-w-3xl mx-auto  px-4 lg:px-0">
            <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight text-center">
              Boost Business Productivity with{" "}
              <span className="text-cyan-500">Xolotime</span>
            </h1>
          </div>
          <div className=" mx-auto text-center px-4 lg:p-3">
            <p className="mt-6 text-gray-700 text- lg:text-lg leading-relaxed">
              <span className="font-semibold text-gray-900">Xolotime</span> is
              your all-in-one productivity platform designed to
              <span className="text-cyan-500 font-medium">
                {" "}
                supercharge business performance
              </span>
              . Automate time tracking across apps, projects, and documents,
              gain real-time insights into work patterns, and ensure accurate
              billing, payroll, and project costing. With smart analytics,
              attendance monitoring, and automated scheduling, Xolotime helps
              teams work smarter, identify top performers, and eliminate
              bottlenecks. Make data-driven decisions, foster accountability,
              and boost productivity—unlocking growth and efficiency across your
              organization.
            </p>
          </div>

          {/* cards */}

        
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 lg:p-5">
    {cards.map((item, index) => {
      const IconComponent = item.icon;
      return (
        <div
          key={index}
          className="group flex flex-col items-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
        >
          <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-cyan-100 text-cyan-500 text-5xl transition-all duration-300 group-hover:bg-cyan-200 group-hover:text-cyan-600">
            <IconComponent />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-cyan-500 transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm lg:text-base text-center mb-6 leading-relaxed">
            {item.discription || item.description}
          </p>
          <Link
            to={item.path}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-400 text-white font-medium hover:bg-cyan-500 shadow hover:shadow-lg transition-all duration-300"
          >
            Learn more <FaArrowRight />
          </Link>
        </div>
      );
    })}
  </div> 

          {/* Decorative Gradient Blobs */}
          <div className="absolute top-20 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
        </section>
      </div>

      {/* CTA secttion */}
      {/* <CTA_section/> */}
    </div>
  );
};

export default Features_full;

{
  /* <ul className="space-y-3 text-base md:text-lg">
              {[
                "Automate Time Tracking",
                "Monitor Productivity Instantly",
                "Boost Team Performance",
                "Insightful Reporting, Zero Fuss",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl transition-all duration-300"
                >
                  <div className="h-3 w-3 bg-cyan-400 rounded-full shadow-lg"></div>
                  {item}
                </li>
              ))}
            </ul> */
}
