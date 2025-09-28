import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key from emailjs.com dashboard

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target); // Replace with your EmailJS service ID and template ID
      setStatus('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {status && <p className={`status ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
          </form>
        </div>
        <div className="contact-info">
          <h3>Our Email</h3>
          <p>mbaipartners@gmail.com</p>
          <h3>Our Location</h3>
          <p>Mind Blowing AI Partners Office, Near Millennium mall , Wakad , Pune</p>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4099814046585!2d73.7565834!3d18.6006206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9dc4ce5ac9f%3A0x7fdeb0087efc3a7f!2sPhoenix%20Mall%20of%20the%20Millennium!5e0!3m2!1sen!2sin!4v1759045225144!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;