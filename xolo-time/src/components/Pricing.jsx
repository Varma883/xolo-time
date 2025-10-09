// src/components/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 1,
    name: "Basic",
    price: 49,
    features: [
      "Time Tracking",
      "Basic Reports",
      "Email Support",
      "Not Included: Priority Support",
      "Not Included: Employee Alerts",
    ],
    color: "from-amber-500 to-orange-500",
    popular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: 99,
    features: ["All Basic Features", "Advanced Reports", "Priority Support", "Employee Alerts"],
    color: "from-green-500 to-teal-500",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 199,
    features: ["All Pro Features", "Custom Integrations", "Dedicated Manager", "Unlimited Users"],
    color: "from-blue-500 to-indigo-600",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-sky-50 to-white overflow-hidden" id="pricing">
      <div className="mx-auto px-4 relative z-10 max-w-7xl text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block px-6 py-2 bg-sky-100 rounded-full mb-4"
        >
          <span className="text-sky-700 font-medium">Xolotime Pricing & Plans</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Choose the Plan <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">That Fits Your Needs</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-sky-700 max-w-3xl mx-auto mb-16"
        >
          Flexible pricing options for teams of all sizes. Upgrade, downgrade, or cancel anytime.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative w-full max-w-sm p-6 rounded-xl shadow-lg mx-auto transition-transform transform hover:-translate-y-2 group
                bg-white hover:bg-gradient-to-r hover:bg-blue-800
                flex flex-col ${plan.popular ? "border-2 border-green-400 shadow-xl" : "border border-gray-200"}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-full text-sm z-10 shadow-md">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6 text-center">
                <h5 className="text-xl font-semibold text-gray-700 group-hover:text-white">{plan.name}</h5>
                <div className="flex items-baseline justify-center text-gray-900 group-hover:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ms-1 text-lg font-normal">/month</span>
                </div>
              </div>

              {/* Features List */}
              <ul role="list" className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 transition-colors
                      ${feature.includes("Not Included") 
                        ? "line-through decoration-gray-400 text-gray-400 group-hover:text-gray-200" 
                        : "text-gray-700 group-hover:text-white"
                      }`}
                  >
                    <FiCheck
                      className={`flex-shrink-0 transition-colors
                        ${feature.includes("Not Included")
                          ? "text-gray-400 group-hover:text-gray-200"
                          : "text-blue-600 group-hover:text-white"
                        }`}
                    />
                    <span className="text-sm text-left">{feature.replace("Not Included: ", "")}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
              to={'/pricing'}>
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 text-white font-medium rounded-lg shadow-md text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-opacity-90 hover:to-opacity-90 transition mt-auto"
                
              >
                Choose Plan
              </motion.button>
              </Link>
             
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
            Upgrade Your Team's Productivity Today
          </div>
          <p className="text-sky-700 mt-6 text-lg max-w-2xl mx-auto">
            Join thousands of businesses optimizing employee management with Xolotime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
