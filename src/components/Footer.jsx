import React from 'react';
import { Link } from 'react-router-dom';
import { shop } from '../data/shop';
import { getCallUrl, getEmailUrl } from '../utils/phone';
import { getWhatsAppUrl } from '../utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Offers', path: '/offers' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const topCategories = [
    { name: 'Electrical & Electronics', path: '/products?category=electrical-electronics', icon: 'bi-lightning-charge' },
    { name: 'CCTV Surveillance', path: '/products?category=cctv-surveillance', icon: 'bi-camera-video' },
    { name: 'Plumbing Services', path: '/products?category=plumbing-services', icon: 'bi-tools' },
    { name: 'Inverter, Battery & Solar', path: '/products?category=inverter-battery-solar', icon: 'bi-battery-charging' }
  ];

  return (
    <footer className="jv-footer pt-5 pb-4 mt-auto">
      <div className="jv-footer-container">
        
        {/* Brand Showcase Header */}
        <div className="jv-footer-brand-section pb-4 mb-4">
          <div className="row align-items-center justify-content-between g-3">
            <div className="col-12 col-lg-8 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <span className="jv-footer-lightning me-2" aria-hidden="true">⚡</span>
                <h5 className="jv-footer-brand-title mb-0">{shop.name.toUpperCase()}</h5>
              </div>
              <p className="jv-footer-description mb-3">
                {shop.description}
              </p>
              <div className="jv-footer-tagline-badge">
                <i className="bi bi-shield-check me-2"></i>
                <span>Certified Electrical • Plumbing • CCTV Solutions</span>
              </div>
            </div>

            <div className="col-12 col-lg-4 text-center text-md-start text-lg-end mt-3 mt-lg-0">
              <div className="d-inline-flex flex-column align-items-center align-items-md-start align-items-lg-end">
                <span className="text-secondary small text-uppercase fw-semibold mb-2" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>
                  Doorstep Service Available in {shop.city}
                </span>
                <a 
                  href={getWhatsAppUrl(`Hi ${shop.name}, I would like to consult with an electrical/plumbing/CCTV expert.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jv-footer-cta-btn"
                >
                  <i className="bi bi-whatsapp me-2 fs-5"></i>
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="jv-footer-divider mb-4" />

        {/* Main Content Columns:
            - Mobile (320px–767px): Single-column stack
            - Tablet (768px–1199px): Intelligent 2-column layout
            - Laptop/Desktop (1200px+): Balanced 3-column layout
        */}
        <div className="row g-4 g-lg-5 jv-footer-columns-row">
          
          {/* Column 1: QUICK LINKS */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="jv-footer-heading">
              <span>Quick Links</span>
            </h6>
            <ul className="jv-footer-nav-list">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="jv-footer-link">
                    <i className="bi bi-chevron-right"></i>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: TOP CATEGORIES */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="jv-footer-heading">
              <span>Top Categories</span>
            </h6>
            <ul className="jv-footer-nav-list">
              {topCategories.map((cat) => (
                <li key={cat.name}>
                  <Link to={cat.path} className="jv-footer-link">
                    <i className={`bi ${cat.icon}`}></i>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONTACT */}
          <div className="col-12 col-md-12 col-lg-4 jv-footer-contact-col">
            <h6 className="jv-footer-heading">
              <span>Contact</span>
            </h6>
            <div className="jv-footer-contact-list">
              {/* Address */}
              <div className="jv-footer-contact-item">
                <span className="jv-footer-icon-box location">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <div className="jv-footer-contact-text">
                  <span className="jv-footer-contact-label">Location</span>
                  <a 
                    href={shop.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="jv-footer-contact-link"
                    title="Open in Google Maps"
                  >
                    {shop.address}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="jv-footer-contact-item">
                <span className="jv-footer-icon-box email">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <div className="jv-footer-contact-text">
                  <span className="jv-footer-contact-label">Email</span>
                  <a 
                    href={getEmailUrl()} 
                    className="jv-footer-contact-link text-break"
                  >
                    {shop.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="jv-footer-contact-item">
                <span className="jv-footer-icon-box phone">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <div className="jv-footer-contact-text">
                  <span className="jv-footer-contact-label">Phone</span>
                  <a 
                    href={getCallUrl()} 
                    className="jv-footer-contact-link fw-semibold"
                  >
                    {shop.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <hr className="jv-footer-divider my-4" />

        {/* Footer Bottom Bar */}
        <div className="jv-footer-bottom">
          <p className="jv-footer-bottom-copy mb-0">
            © {currentYear} <strong>{shop.name}</strong>. All rights reserved.
          </p>

          <div className="jv-footer-social-wrapper">
            <span className="small text-secondary me-2 d-none d-sm-inline">Quick Connect:</span>
            <div className="jv-footer-social-list">
              <a 
                href={getWhatsAppUrl(`Hi ${shop.name}, I would like to connect with your team.`)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="jv-footer-social-btn whatsapp"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a 
                href={getCallUrl()} 
                className="jv-footer-social-btn call"
                aria-label="Call Us"
                title={`Call ${shop.phone}`}
              >
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a 
                href={getEmailUrl()} 
                className="jv-footer-social-btn email"
                aria-label="Email Us"
                title={`Email ${shop.email}`}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a 
                href={shop.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="jv-footer-social-btn maps"
                aria-label="Google Maps Location"
                title="View on Google Maps"
              >
                <i className="bi bi-geo-alt-fill"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
