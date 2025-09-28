import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import s1 from '../assets/img/s1.jpg';
import s2 from '../assets/img/s2.jpg';
import s3 from '../assets/img/s3.jpg';
import '../styles/Home.css';

const Home = () => {
  const images = [s1, s2, s3];
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const fullText = 'We Build The Future of Intelligence';
  const fullSubtitle = 'Stunning Websites, Powerful AI Agents, and Intelligent Bots.';

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const bgColor = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['#000000', '#1a1a2e', '#1a1a2e', '#16213e']);

  const [introH2Text, setIntroH2Text] = useState('');
  const [introPText, setIntroPText] = useState('');
  const [introInView, setIntroInView] = useState(false);
  const [ctaH2Text, setCtaH2Text] = useState('');
  const [ctaPText, setCtaPText] = useState('');
  const [ctaInView, setCtaInView] = useState(false);

  const fullIntroH2 = 'Empowering Businesses with Digital Solutions';
  const fullIntroP = 'At MBAI, we transform ideas into reality by building stunning websites, powerful AI agents, and innovative web applications tailored to your needs.';
  const fullCtaH2 = 'Ready to Build the Future?';
  const fullCtaP = 'Let\'s discuss your project and bring your vision to life with cutting-edge technology.';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const delay = fullText.length * 100 + 500;
    const timer = setTimeout(() => {
      let i = 0;
      const subtitleTimer = setInterval(() => {
        if (i < fullSubtitle.length) {
          setDisplayedSubtitle(fullSubtitle.slice(0, i + 1));
          i++;
        } else {
          clearInterval(subtitleTimer);
        }
      }, 100);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (introInView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullIntroH2.length) {
          setIntroH2Text(fullIntroH2.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [introInView]);

  useEffect(() => {
    if (introInView) {
      const delay = fullIntroH2.length * 50 + 500;
      const timer = setTimeout(() => {
        let i = 0;
        const pTimer = setInterval(() => {
          if (i < fullIntroP.length) {
            setIntroPText(fullIntroP.slice(0, i + 1));
            i++;
          } else {
            clearInterval(pTimer);
          }
        }, 50);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [introInView]);

  useEffect(() => {
    if (ctaInView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullCtaH2.length) {
          setCtaH2Text(fullCtaH2.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [ctaInView]);

  useEffect(() => {
    if (ctaInView) {
      const delay = fullCtaH2.length * 50 + 500;
      const timer = setTimeout(() => {
        let i = 0;
        const pTimer = setInterval(() => {
          if (i < fullCtaP.length) {
            setCtaPText(fullCtaP.slice(0, i + 1));
            i++;
          } else {
            clearInterval(pTimer);
          }
        }, 50);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [ctaInView]);

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-section">
        <motion.h1
          className="hero-tagline"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          {displayedText}<span className="cursor">|</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          {displayedSubtitle}<span className="cursor">|</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/portfolio" className="btn btn-primary">Our Work</a>
          <a href="/services" className="btn">Our Services</a>
        </motion.div>
      </div>
      <div className="background-animation">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="hero background"
            className="hero-bg-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <motion.div className="scroll-bg" style={{ backgroundColor: bgColor }} />

      <section className="intro-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIntroInView(true)}
        >
          {introH2Text}<span className="cursor">|</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {introPText}<span className="cursor">|</span>
        </motion.p>
      </section>

      <section className="services-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="service-cards">
          <motion.div
            className="service-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3>Websites</h3>
            <p>Custom, responsive websites that captivate and convert.</p>
          </motion.div>
          <motion.div
            className="service-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3>AI Agents</h3>
            <p>Intelligent agents that automate and enhance your operations.</p>
          </motion.div>
          <motion.div
            className="service-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3>Web Apps</h3>
            <p>Robust web applications for seamless user experiences.</p>
          </motion.div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="benefits">
          <motion.div
            className="benefit"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ rotateX: 10, scale: 1.1 }}
            viewport={{ once: true }}
          >
            Innovation
          </motion.div>
          <motion.div
            className="benefit"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotateX: 10, scale: 1.1 }}
            viewport={{ once: true }}
          >
            Expertise
          </motion.div>
          <motion.div
            className="benefit"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ rotateX: 10, scale: 1.1 }}
            viewport={{ once: true }}
          >
            Reliability
          </motion.div>
        </div>
      </section>

      <section className="testimonials-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="testimonial-cards">
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            viewport={{ once: true }}
          >
            <p>"MBAI transformed our online presence with a stunning website that boosted our conversions by 40%."</p>
            <cite>- John Doe, CEO of TechCorp</cite>
          </motion.div>
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            viewport={{ once: true }}
          >
            <p>"Their AI agents streamlined our customer service, saving us hours every day."</p>
            <cite>- Jane Smith, Manager at Innovate Ltd</cite>
          </motion.div>
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            viewport={{ once: true }}
          >
            <p>"Professional, reliable, and innovative. Highly recommend MBAI for any digital project."</p>
            <cite>- Alex Johnson, Founder of StartupXYZ</cite>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setCtaInView(true)}
        >
          {ctaH2Text}<span className="cursor">|</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {ctaPText}<span className="cursor">|</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="/contact" className="btn btn-primary">Get Started</a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;