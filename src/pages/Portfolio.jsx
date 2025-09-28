import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Portfolio.css';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayText}</span>;
};
import cloth1 from '../assets/img/cloth1.png';
import cloth2 from '../assets/img/cloth2.png';
import cloth3 from '../assets/img/cloth3.png';
import music1 from '../assets/img/music1.png';
import music2 from '../assets/img/music2.png';
import music3 from '../assets/img/music3.png';
import salon1 from '../assets/img/salon1.png';
import salon2 from '../assets/img/salon2.png';
import salon3 from '../assets/img/salon3.png';
import spa1 from '../assets/img/spa1.png';
import spa2 from '../assets/img/spa2.png';
import spa3 from '../assets/img/spa3.png';
import travel1 from '../assets/img/travel1.png';
import travel2 from '../assets/img/travel2.png';
import travel3 from '../assets/img/travel3.png';
import yoga1 from '../assets/img/yoga1.png';
import yoga2 from '../assets/img/yoga2.png';
import yoga3 from '../assets/img/yoga3.png';
import cl1 from '../assets/img/cl1.png';
import cl2 from '../assets/img/cl2.png';
import cl3 from '../assets/img/cl3.png';
import cl4 from '../assets/img/cl4.png';
import cl5 from '../assets/img/cl5.png';
import cl6 from '../assets/img/cl6.png';
import gym1 from '../assets/img/gym1.png';
import gym2 from '../assets/img/gym2.png';
import gym3 from '../assets/img/gym3.png';
import gym4 from '../assets/img/gym4.png';

const websites = [
  { images: [cloth1, cloth2, cloth3], title: 'Cloth Website', description: 'Trendy fashion styles for every occasion online', link: 'https://feyer-ykb8o04vr5fejxjn.builder-preview.com/', category: 'Websites' },
  { images: [music1,music2,music3], title: 'Music website', description: 'Immersive music, vibrant visuals, seamless streaming', link: 'https://niqvistlite-alp2blkeolf9ogxz.builder-preview.com/', category: 'Websites' },
  { images: [salon1,salon2,salon3], title: 'Saloon website', description: 'Stylish makeovers, relaxing care, beauty redefined',link:'https://lightgoldenrodyellow-kingfisher-128516.hostingersite.com/', category: 'Websites' },
  { images: [spa1,spa2,spa3], title: 'Spa Website', description: 'Relax, refresh, rejuvenate with serene care and relaxation',link:'https://coral-leopard-921667.hostingersite.com/', category: 'Websites' },
  { images: [travel1,travel2,travel3], title: 'Travel site', description: 'Explore new destinations, adventures await you',link:'https://poveda-mp43zwqzglhpkz26.builder-preview.com/', category: 'Websites' },
  { images: [yoga1,yoga2,yoga3], title: 'Yoga website', description: 'Balance body, mind, and soul with yoga',link:'https://indigo-snake-465528.hostingersite.com/', category: 'Websites' },
  { images: [gym1,gym2,gym3,gym4], title: 'Gym Website', description: 'Transform your body, mind, and strength daily',link:'https://coral-falcon-592667.hostingersite.com/', category: 'Websites' }
];

const webapps = [
  { images: [cl1,cl2,cl3,cl4,cl5,cl6], title: 'Clinic app', description: 'Smart healthcare solutions for better patient care',link:'https://clinic-project-ebon.vercel.app/', category: 'Webapps' }
];

const aiAgents = [];

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Slideshow"
          className="portfolio-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

const Portfolio = () => {
  const renderSection = (title, projects, startIndex) => (
    <div className="portfolio-section">
      <h2 className="section-title">{title}</h2>
      {projects.length > 0 && (
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              className="portfolio-item"
              key={startIndex + index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (startIndex + index) * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {project.images ? (
                <ImageSlideshow images={project.images} />
              ) : (
                <img src={project.image} alt={project.title} className="portfolio-image" />
              )}
              <div className="portfolio-details">
                <h3 className="portfolio-item-title">{project.title}</h3>
                <p className="portfolio-item-description"><TypingEffect text={project.description} /></p>
                <a href={project.link || '#'} className="visit-button" target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      className="portfolio-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="portfolio-title">Our Portfolio</h1>
      {renderSection('Websites', websites, 0)}
      {renderSection('Webapps', webapps, websites.length)}
      {renderSection('AI Agents', aiAgents, websites.length + webapps.length)}
    </motion.div>
  );
};

export default Portfolio;
