// src/pages/PricingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi"; // Added FiX for "Not Included" features

// Data for pricing plans (remains mostly the same, adjusted for comparison table)
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
      "Not Included: Advanced Reports", // Added for comparison table accuracy
      "Not Included: Custom Integrations",
      "Not Included: Dedicated Manager",
      "Not Included: Unlimited Users",
    ],
    color: "from-amber-500 to-orange-500", // Will be less prominent with the new theme
    popular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: 99,
    features: [
      "All Basic Features",
      "Advanced Reports",
      "Priority Support",
      "Employee Alerts",
      "Not Included: Custom Integrations",
      "Not Included: Dedicated Manager",
      "Not Included: Unlimited Users",
    ],
    color: "from-green-500 to-teal-500",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 199,
    features: [
      "All Pro Features",
      "Custom Integrations",
      "Dedicated Manager",
      "Unlimited Users",
    ],
    color: "from-blue-500 to-indigo-600",
    popular: false,
  },
];

// Data for detailed feature comparison table
const allFeatures = [
  { name: "Time Tracking", basic: true, pro: true, enterprise: true },
  { name: "Basic Reports", basic: true, pro: true, enterprise: true },
  { name: "Advanced Reports", basic: false, pro: true, enterprise: true },
  { name: "Activity Monitoring", basic: false, pro: true, enterprise: true }, // Example new feature
  { name: "Employee Alerts", basic: false, pro: true, enterprise: true },
  { name: "Email Support", basic: true, pro: true, enterprise: true },
  { name: "Priority Support", basic: false, pro: true, enterprise: true },
  { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
  { name: "Dedicated Manager", basic: false, pro: false, enterprise: true },
  { name: "Unlimited Users", basic: false, pro: false, enterprise: true },
  { name: "API Access", basic: false, pro: false, enterprise: true }, // Another example new feature
];


const PricingPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Banner Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div> {/* Optional background pattern */}
        <div className="mx-auto px-4 relative z-10 max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Flexible Pricing for Every Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
          >
            Xolo Time helps you track time, monitor productivity, and manage
            your team with ease. Choose a plan that scales with your business.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#pricing-cards"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            View Our Plans
          </motion.a>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-gray-50" id="pricing-cards">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Choose the Perfect Plan for Your Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Whether you're a small startup or a large enterprise, Xolo Time has a
            solution designed to boost your team's efficiency.
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
                className={`relative w-full max-w-sm p-8 rounded-xl shadow-lg mx-auto transition-transform transform hover:-translate-y-2 group
                  bg-white border-2 hover:shadow-2xl
                  flex flex-col
                  ${plan.popular ? "border-cyan-500 shadow-xl" : "border-gray-100"}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full text-sm z-10 shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6 text-center">
                  <h5 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h5>
                  <div className="flex items-baseline justify-center text-gray-900">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-6xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="ms-1 text-lg font-normal">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">per user, billed annually</p> {/* Example */}
                </div>

                {/* Features List */}
                <ul role="list" className="space-y-3 mb-8 flex-grow">
                  {plan.features.slice(0, 5).map((feature, i) => ( // Show top 5 features on card
                    <li
                      key={i}
                      className={`flex items-center gap-3 transition-colors text-left
                        ${feature.includes("Not Included")
                          ? "line-through decoration-gray-400 text-gray-400"
                          : "text-gray-700"
                        }`}
                    >
                      <FiCheck
                        className={`flex-shrink-0 text-lg
                          ${feature.includes("Not Included")
                            ? "text-gray-400"
                            : "text-blue-500"
                          }`}
                      />
                      <span className="text-base">{feature.replace("Not Included: ", "")}</span>
                    </li>
                  ))}
                  <li className="text-left text-blue-500 hover:underline cursor-pointer text-sm mt-3">
                    See all features
                  </li>
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-4 text-white font-medium rounded-lg shadow-md text-center transition mt-auto
                    ${plan.popular ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600" : "bg-gray-800 hover:bg-gray-900"}
                  `}
                >
                  Choose {plan.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison Section */}
      <section className="py-20 bg-white" id="feature-comparison">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
          >
            Comprehensive Feature Comparison
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center"
          >
            Understand the capabilities of each Xolo Time plan at a glance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto shadow-lg rounded-xl border border-gray-100"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold tracking-wider rounded-tl-xl">
                    Features
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold tracking-wider">
                    Basic
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold tracking-wider bg-cyan-600">
                    Pro
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold tracking-wider rounded-tr-xl">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {feature.basic ? (
                        <FiCheck className="h-5 w-5 text-blue-500 mx-auto" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {feature.pro ? (
                        <FiCheck className="h-5 w-5 text-blue-500 mx-auto" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {feature.enterprise ? (
                        <FiCheck className="h-5 w-5 text-blue-500 mx-auto" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section (Optional, can be at bottom) */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <div className="mx-auto px-4 max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Boost Your Team's Productivity?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90"
          >
            Join thousands of businesses streamlining employee management with Xolo Time. Start your free trial today!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Start Your Free Trial
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;