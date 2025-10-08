// src/components/Services.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/RCS.png'
import { 
  FiMessageSquare, 
  FiSmartphone, 
  FiCheckCircle, 
  FiHeadphones, 
  FiUsers, 
  FiVideo,
  FiGlobe,
  FiPhoneCall
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiFillProduct } from 'react-icons/ai';

const Highlights = () => {
      const sectionRef = useRef(null);

  // Mapping service titles to their paths
  const servicePaths = {
    "Bulk SMS": "/bulk-sms",
    "WhatsApp Business API": "/whatsApp-business",
    "RCS Messaging": "/rcs-messaging",
    "Voice Broadcast": "/voice-broadcasting",
    "Two-Way Messaging Platform":"/two-way-sms",
    "Smart Links": "/smart-links",
    "Contact Center": "/contact-center-solutions",
    "Audio and Video Conferencing": "/audio-video-solutions"
  };

  const services = [
    {
      id: 1,
      title: "Powerful Reports",
      icon: <FiMessageSquare className="text-4xl text-white" />,
      description: "Detailed reports and insights for executives, managers and employees",
      color: "from-sky-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Work-Life Balance",
      icon: <FiUsers className="text-4xl text-white" />,
      description: "Encourage work-life balance and avoid burnout",
      features: ["Business Messaging", "Rich Media Support", "API Integration", "Customer Engagement"],
      color: "from-cyan-400 to-cyan-500"
    },
//     {
//   id: 3,
//   title: "RCS Messaging",
//   icon: (
//     <div className="w-16 h-16 flex items-center justify-center">
//       <img 
//         src={image} 
//         alt="RCS Messaging" 
//         className="w-full h-full object-contain"
//       />
//     </div>
//   ),
//   description: "Engage customers with rich media messages including images, videos, and interactive buttons.",
//   features: ["Rich Media", "Interactive Buttons", "Read Receipts", "Branded Experience"],
//   color: "from-blue-300 to-blue-300"
// },
    {
  id: 3,
  title: "Web & App Usage",
  icon: <AiFillProduct  className="text-4xl text-white" />,
  description: "You can track specific program/app usage, as well as time spent on specific websites.",
  color: "from-indigo-400 to-indigo-500"
},
    {
      id: 4,
      title: "Employee Controls",
      icon: <FiHeadphones className="text-4xl text-white" />,
      description: "Trust your employees to manage their time appropriately",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      id: 5,
      title: "Time Use Alerts",
      icon: <FiSmartphone className="text-4xl text-white" />,
      description: "Employees get pop-up alerts if they sit idle for too long, or if they stray onto a non-work app.",
      color: "from-sky-500 to-indigo-600"
    },
    {
      id: 6,
      title: "Track Breaks",
      icon: <FiCheckCircle className="text-4xl text-white" />,
      description: "Track breaks and time spent away from the computer",

      color: "from-cyan-400 to-cyan-500"
    },
    {
      id: 7,
      title: "Screenshots",
      icon: <FiPhoneCall className="text-4xl text-white" />,
      description: "Screenshots of employee monitors can be taken at whatever time interval you specify",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      id: 8,
      title: "Billing",
      icon: <FiGlobe className="text-4xl text-white" />,
      description: "Automatically calculate payroll, based on either fixed salaries, or on hours tracked",
      color: "from-emerald-400 to-emerald-500"
    }
  ];
 return (
    <section 
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
      id="services"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-sky-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#c5d5e3_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      <div className=" mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 bg-sky-100 rounded-full mb-4"
          >
            <span className="text-sky-700 font-medium">Xolotime Highlights</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Employee Managment</span> Solutions
          </motion.h2>

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sky-700 max-w-3xl mx-auto"
          >
            Revolutionary employee management solutions designed to boost productivity, streamline team operations, and maximize business growth
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Card Header with Gradient */}
                <div className={`h-40 bg-gradient-to-r ${service.color} flex flex-col items-center justify-center p-6`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white text-center">{service.title}</h3>
                </div>
                
                {/* Card Content */}
                <div className="p-6" >
                  <p className="text-sky-700 h-22 mb-4">{service.description}</p>
                  
                
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                   <Link
  to={servicePaths[service.title.trim()]}
  className={`block w-full py-3 px-4 bg-gradient-to-r ${service.color} text-white font-medium rounded-lg transition-all shadow-md text-center`}
>
  Learn More
</Link>

                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg">
            Take Your Workforce Productivity to the Next Level.
          </div>
          <p className="text-sky-700 mt-6 text-lg max-w-2xl mx-auto">
            Come onboard and transform the way you track, manage, and grow your teams.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.button
              onClick={() => window.location.href = '/contact'}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={() => window.location.href = '/contact'}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-sky-700 border-2 border-sky-500 px-8 py-3 rounded-xl font-medium hover:bg-sky-50"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Highlights
