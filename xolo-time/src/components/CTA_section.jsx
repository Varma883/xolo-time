import React from 'react';
import { motion } from 'framer-motion'; // <-- Import motion
import { FiMessageSquare } from 'react-icons/fi'; // <-- Import the icon

const CTA_section = () => {
  return (
    <div>
      <section className="py-20 px-4 bg-gradient-to-r  from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Supercharge Your Team’s Productivity?
          </motion.h2>

          <motion.p 
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses using our time-tracking and productivity management tools to monitor tasks, optimize workflows, and boost performance.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => window.location.href = '/contact'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-400 text-white hover:bg--50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started
            </motion.button>

            <motion.a
              href="#demo"
              className="bg-amber-400 hover:bg-yellow-500 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMessageSquare className="h-5 w-5" />
              Request Demo
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CTA_section;
