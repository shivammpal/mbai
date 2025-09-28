import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <motion.div 
      className="privacy-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="privacy-title">Privacy & Policy</h1>
      <div className="privacy-content">
        <h2>1. Introduction</h2>
        <p>Welcome to MBAI (Modern Business AI Solutions). We are a leading provider of digital solutions, specializing in the creation and sale of stunning, responsive websites, powerful AI agents, and innovative web applications. Our mission is to empower businesses by building the future of intelligence through cutting-edge technology that drives growth and efficiency.</p>
        <p>This Privacy Policy explains how MBAI collects, uses, shares, and protects your personal information when you visit our website (mbai-website.com), inquire about our services, or engage with our offerings. By using our services, you agree to the practices described in this policy. We are committed to protecting your privacy and handling your data responsibly.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information to provide and improve our services, such as custom website development, AI agent integration, and web app solutions. This includes data from potential clients interested in purchasing our digital products.</p>

        <h3>2.1. Information You Provide to Us</h3>
        <p>When you contact us via our website's contact form, sign up for newsletters, or request a quote for website sales or AI services, we collect:</p>
        <ul>
          <li>Name, email address, phone number, and company details.</li>
          <li>Project requirements, such as website features, AI functionalities, or web app specifications.</li>
          <li>Payment information if you purchase services (processed securely via third-party providers).</li>
        </ul>
        <p>For example, if you're interested in buying a custom website, we'll gather details to tailor a proposal that meets your business needs.</p>

        <h3>2.2. Information We Collect Automatically</h3>
        <p>As you navigate our site, we collect usage data to enhance user experience:</p>
        <ul>
          <li>IP address, browser type, device information, and pages visited.</li>
          <li>Cookies and similar technologies to track preferences and analyze site performance.</li>
          <li>Analytics data (e.g., via Google Analytics) to understand how visitors interact with our portfolio of sold websites and services.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Respond to inquiries and deliver services, such as developing and selling customized websites or AI agents.</li>
          <li>Process transactions for website purchases or service contracts.</li>
          <li>Improve our offerings based on feedback from clients who have bought our digital solutions.</li>
          <li>Send marketing communications about new website templates, AI updates, or promotions (with opt-out options).</li>
          <li>Comply with legal obligations and prevent fraud.</li>
        </ul>

        <h2>4. How We Share Your Information</h2>
        <p>We do not sell your personal data. We may share it with:</p>
        <ul>
          <li>Service providers (e.g., hosting for websites we sell, payment processors) who assist in delivering our services.</li>
          <li>Business partners for collaborative projects, such as integrating AI agents into client websites.</li>
          <li>Legal authorities if required by law.</li>
        </ul>
        <p>When selling websites, we ensure client data is not shared without consent during the handover process.</p>

        <h2>5. Security of Your Information</h2>
        <p>We implement robust security measures, including encryption, secure servers, and access controls, to protect your data. For websites we develop and sell, we incorporate best practices like HTTPS and regular security audits. However, no system is completely secure, so we encourage you to use strong passwords and monitor your accounts.</p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>We may update this policy to reflect changes in our services, such as new AI features or website sales processes. We'll notify you via email or a site notice. Continued use of our services after changes constitutes acceptance.</p>

        <h2>7. Contact Us</h2>
        <p>If you have questions about this policy, our website sales, AI agents, or data practices, contact us at:</p>
        <ul>
          <li>Email: mbaipartners@gmail.com</li>
          <li>Address: Mind Blowing AI Partners Office, Near Millennium mall , Wakad , Pune</li>
        </ul>
        <p>We're here to help you build and sell digital solutions with confidence in your privacy.</p>
      </div>
    </motion.div>
  );
};

export default Privacy;