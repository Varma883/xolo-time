// src/pages/ContactUsPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLifeBuoy,
  FiMessageCircle,
  FiBriefcase,
  FiZap,
} from "react-icons/fi";
import contactImg from "../assets/contact_us.jpg"

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companySize: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you shortly.");
    setFormData({
      fullName: "",
      workEmail: "",
      companySize: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-sky-50 to-blue-50 font-sans text-gray-800">
      {/* ---------------- Hero Section ---------------- */}
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
            We're Here to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Help You Connect
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Whether you have questions about pricing, partnerships, or technical
            support, our team is ready to assist you with fast, friendly help.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            {[
              { Icon: FiBriefcase, title: "Sales Inquiry", color: "text-amber-500" },
              { Icon: FiLifeBuoy, title: "Support", color: "text-blue-500" },
              { Icon: FiZap, title: "Partnerships", color: "text-cyan-500" },
            ].map(({ Icon, title, color }, idx) => (
              <motion.a
                key={idx}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 10px 30px rgba(59,130,246,0.15)",
                }}
                transition={{ duration: 0.3 }}
                href="#contact-form"
                className="flex flex-col items-center p-6 bg-white backdrop-blur-xl rounded-2xl border border-blue-100 text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md min-w-[160px]"
              >
                <Icon className={`text-3xl mb-3 ${color}`} />
                <span className="text-lg font-semibold">{title}</span>
              </motion.a>
            ))}
          </div>
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
            <img
              src={contactImg}
              alt="Contact Support"
              className="relative z-10 rounded-3xl shadow-[0_20px_60px_rgba(37,99,235,0.25)] w-full hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />

            {/* Glowing Backgrounds */}
            <div className="absolute -inset-14 bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-purple-400/20 blur-3xl rounded-full -z-10"></div>
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
      {/* ---------------- Contact Form ---------------- */}
      <section className="py-24" id="contact-form">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  id: "fullName",
                  label: "Full Name",
                  required: true,
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  id: "workEmail",
                  label: "Work Email",
                  required: true,
                  type: "email",
                  placeholder: "john@company.com",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {field.label}{" "}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}

              {/* Company size */}
              <div>
                <label
                  htmlFor="companySize"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Company Size (Optional)
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="1-10">1–10 employees</option>
                  <option value="11-50">11–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="201-500">201–500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(37,99,235,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* ---------------- Info Cards ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Other ways to connect
            </h3>

            {[
              {
                Icon: FiPhone,
                title: "Call Us",
                text1: "+1 (555) 123-4567",
                text2: "Mon–Fri, 9am–5pm EST",
              },
              {
                Icon: FiMail,
                title: "Email Us",
                text1: "support@xolotime.com",
                text2: "We respond within 24 hours",
              },
              {
                Icon: FiMapPin,
                title: "Our Office",
                text1: "123 Tech Drive, Suite 100",
                text2: "Innovation City, CA 90210",
              },
            ].map(({ Icon, title, text1, text2 }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="text-blue-600 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                  <p className="text-gray-600">{text1}</p>
                  <p className="text-gray-500 text-sm">{text2}</p>
                </div>
              </div>
            ))}

            {/* Help Center */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Knowledge Base & FAQs
              </h3>
              <motion.a
                href="/resources#faqs"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-all"
              >
                <FiMessageCircle className="text-2xl" />
                <span>Visit our Help Center</span>
              </motion.a>
              <p className="text-gray-600 text-sm mt-2">
                Find answers and guides instantly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
