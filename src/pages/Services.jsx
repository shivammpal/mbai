import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaComments, FaMobileAlt, FaChartBar, FaTools } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    icon: <FaCode />,
    title: 'Website Creation',
    description: 'We build stunning, responsive, and optimized websites that drive results. From static sites to complex web applications, we have you covered.'
  },
  {
    icon: <FaRobot />,
    title: 'AI Agents',
    description: 'Harness the power of AI with our custom-built agents. We create intelligent systems that can automate tasks, analyze data, and provide insights.'
  },
  {
    icon: <FaComments />,
    title: 'Web Apps',
    description: 'Build dynamic and interactive web applications tailored to your needs. We create scalable, secure, and high-performance apps that enhance user experience and functionality.'
  }
];

const Services = () => {
  return (
    <motion.div 
      className="services-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="services-title">Our Services</h1>
      <motion.p
        className="services-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Discover our comprehensive range of digital solutions designed to empower your business in the modern world.
      </motion.p>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            className="service-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px #9f7aea' }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;