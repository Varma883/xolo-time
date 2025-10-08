// src/pages/ResourcesPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiBookOpen, FiPlayCircle, FiDownload, FiExternalLink } from "react-icons/fi"; // Example icons

// Dummy data for resources
const allResources = [
  {
    id: 1,
    type: "Blog",
    category: "Productivity",
    title: "Mastering Time Blocking for Maximum Efficiency",
    description: "Learn how to use time blocking techniques to boost your daily output and focus.",
    link: "#",
    image: "https://via.placeholder.com/400x200/81C7D4/FFFFFF?text=Time+Blocking", // Placeholder image
  },
  {
    id: 2,
    type: "Guide",
    category: "Remote Work",
    title: "The Ultimate Remote Team Playbook",
    description: "A comprehensive guide to managing and motivating your distributed workforce.",
    link: "#", // Could be a download link
    image: "https://via.placeholder.com/400x200/64B5F6/FFFFFF?text=Remote+Work",
  },
  {
    id: 3,
    type: "Integration",
    category: "Integrations",
    title: "Xolo Time + Asana: Seamless Project Management",
    description: "Connect Xolo Time with Asana for integrated project tracking and time logging.",
    link: "#",
    image: "https://via.placeholder.com/400x200/4DD0E1/FFFFFF?text=Asana+Integration",
  },
  {
    id: 4,
    type: "Webinar",
    category: "Tutorials",
    title: "Getting Started with Xolo Time: A Live Demo",
    description: "Watch our webinar to learn the basics and advanced features of Xolo Time.",
    link: "#",
    image: "https://via.placeholder.com/400x200/29B6F6/FFFFFF?text=Webinar",
  },
  {
    id: 5,
    type: "Blog",
    category: "Productivity",
    title: "10 Habits of Highly Productive Employees",
    description: "Discover simple habits that can significantly improve your team's output.",
    link: "#",
    image: "https://via.placeholder.com/400x200/00BCD4/FFFFFF?text=Productive+Habits",
  },
  {
    id: 6,
    type: "FAQ",
    category: "Support",
    title: "Frequently Asked Questions",
    description: "Find quick answers to the most common questions about Xolo Time.",
    link: "#",
    image: "https://via.placeholder.com/400x200/00ACC1/FFFFFF?text=FAQ",
  },
];

const resourceCategories = ["All", "Blog", "Guides", "Webinars", "Integrations", "FAQs"];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = allResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || resource.type === activeCategory || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Banner Section with Search & Categories */}
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
            Your Hub for Productivity & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
          >
            Explore articles, guides, webinars, and tools to master time management and boost team efficiency.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-xl mx-auto mb-8"
          >
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {resourceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-lg font-medium transition-colors duration-300
                  ${activeCategory === category
                    ? "bg-white text-blue-700 shadow-md"
                    : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50" id="resources-grid">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
          >
            All Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center"
          >
            Browse our extensive library of articles, guides, and more to help you succeed.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <motion.a
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  href={resource.link}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {resource.image && (
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-6">
                    <span className="text-sm font-semibold text-blue-600 uppercase mb-2 block">
                      {resource.type}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:underline">
                      {resource.type === "Webinar" ? <FiPlayCircle className="mr-2" /> :
                       resource.type === "Guide" ? <FiDownload className="mr-2" /> :
                       <FiExternalLink className="mr-2" />}
                      {resource.type === "Guide" ? "Download Guide" :
                       resource.type === "Webinar" ? "Watch Webinar" : "Read More"}
                    </div>
                  </div>
                </motion.a>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg">No resources found matching your criteria.</p>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <div className="mx-auto px-4 max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Stay Ahead. Get the Latest Insights.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90"
          >
            Subscribe to our newsletter for exclusive tips, product updates, and industry trends.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-full text-gray-800 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;