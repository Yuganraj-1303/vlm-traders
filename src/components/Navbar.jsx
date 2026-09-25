import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { shop } from '../data/shop';
import { useTheme, DOMAINS } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { getCallUrl } from '../utils/phone';
import { getDefaultEnquiry } from '../utils/whatsapp';

const navLinks = [
  { name: 'Home', path: '/', icon: 'bi-house-door-fill' },
  { name: 'Products', path: '/products', icon: 'bi-box-seam-fill' },
  { name: 'Services', path: '/services', icon: 'bi-tools' },
  { name: 'Offers', path: '/offers', icon: 'bi-tags-fill', badge: 'Special' },
  { name: 'About Us', path: '/about', icon: 'bi-info-circle-fill' },
  { name: 'Contact', path: '/contact', icon: 'bi-telephone-fill' },
];

const domainOptions = [
  { id: DOMAINS.ALL, label: 'All Services', icon: 'bi-grid-3x3-gap-fill' },
  { id: DOMAINS.ELECTRICAL, label: 'Electrical', icon: 'bi-lightning-charge-fill' },
  { id: DOMAINS.PUMPS, label: 'Pumps & Plumbing', icon: 'bi-droplet-half' },
  { id: DOMAINS.CCTV, label: 'CCTV', icon: 'bi-camera-video-fill' },
];

const drawerVariants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      damping: 28,
      stiffness: 280,
      mass: 0.8
    }
  },
  exit: {
    x: '-100%',
    transition: {
      ease: [0.32, 0.72, 0, 1],
      duration: 0.26
    }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -22 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 24
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeDomain, setActiveDomain } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => setIsOpen(prev => !prev);
  const closeNavbar = () => setIsOpen(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeNavbar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDomainSelect = (domain) => {
    setActiveDomain(domain);
    closeNavbar();
    if (location.pathname === '/products') {
      if (domain === DOMAINS.ELECTRICAL) {
        navigate('/products?category=electrical-electronics');
      } else if (domain === DOMAINS.PUMPS) {
        navigate('/products?category=plumbing-services');
      } else if (domain === DOMAINS.CCTV) {
        navigate('/products?category=cctv-surveillance');
      } else {
        navigate('/products');
      }
    }
  };

  const getDomainIcon = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL: return 'bi-lightning-charge-fill text-accent';
      case DOMAINS.PUMPS: return 'bi-droplet-fill text-accent';
      case DOMAINS.CCTV: return 'bi-camera-video-fill text-accent';
      default: return 'bi-grid-3x3-gap-fill text-accent';
    }
  };

  const getDomainName = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL: return ' - Electrical';
      case DOMAINS.PUMPS: return ' - Pumps & Plumbing';
      case DOMAINS.CCTV: return ' - CCTV';
      default: return '';
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          background: 'var(--bg-dark)',
          borderBottom: '1px solid rgba(229, 217, 184, 0.15)',
          transition: 'background-color 0.4s ease',
          boxShadow: '0 4px 20px rgba(11, 37, 69, 0.25)',
          zIndex: 1030
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Brand Logo on Left */}
          <Link
            className="navbar-brand fw-bold d-flex align-items-center me-2 me-xl-3 flex-shrink-0"
            style={{ color: 'var(--text-white)' }}
            to="/"
            onClick={() => { setActiveDomain(DOMAINS.ALL); closeNavbar(); }}
          >
            <div 
              className="brand-logo-badge d-flex align-items-center justify-content-center me-2 shadow-sm position-relative overflow-hidden"
              style={{
                width: '38px',
                height: '38px',
                background: 'linear-gradient(135deg, #1769E0 0%, #0B2545 100%)',
                border: '1.5px solid rgba(245, 232, 197, 0.45)',
                borderRadius: '10px',
                fontWeight: '900',
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                color: '#FFFFFF'
              }}
            >
              VLM
            </div>
            <div className="d-flex flex-column text-start" style={{ lineHeight: '1.15' }}>
              <span className="fw-bolder" style={{ color: 'var(--text-white)', fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
                VLM <span style={{ color: 'var(--bg-primary)', fontWeight: '600' }}>Traders &amp; Services</span>
              </span>
            </div>
            <span className="d-none d-md-inline opacity-75 ms-2 fs-6" style={{ color: '#DCE8F5' }}>{getDomainName()}</span>
          </Link>

          {/* Desktop Navigation (>= 992px) - Right-aligned */}
          <div className="d-none d-lg-flex align-items-center justify-content-end flex-grow-1">
            <ul className="navbar-nav mb-0 fw-medium align-items-center flex-nowrap">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle cursor-pointer"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Switch Domain
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><button className="dropdown-item" onClick={() => handleDomainSelect(DOMAINS.ALL)}>All Services</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={() => handleDomainSelect(DOMAINS.ELECTRICAL)}><i className="bi bi-lightning-charge me-2"></i>Electrical</button></li>
                  <li><button className="dropdown-item" onClick={() => handleDomainSelect(DOMAINS.PUMPS)}><i className="bi bi-droplet-half me-2"></i>Pumps & Plumbing</button></li>
                  <li><button className="dropdown-item" onClick={() => handleDomainSelect(DOMAINS.CCTV)}><i className="bi bi-camera-video me-2"></i>CCTV</button></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={() => setActiveDomain(DOMAINS.ALL)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/offers">Offers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile hamburger menu toggle button (Right side trigger) */}
          <button
            className="mobile-nav-toggle d-lg-none ms-auto"
            type="button"
            onClick={toggleNavbar}
            aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={isOpen}
          >
            <div className={`hamburger-box ${isOpen ? 'active' : ''}`}>
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Animated Left-Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={closeNavbar}
            />

            {/* Left Drawer Panel */}
            <motion.div
              className="mobile-drawer-panel"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Drawer Header */}
              <div className="mobile-drawer-header">
                <div className="d-flex align-items-center">
                  <div
                    className="me-2 d-flex align-items-center justify-content-center rounded-3 shadow-sm fw-bold"
                    style={{
                      width: '38px',
                      height: '38px',
                      background: 'linear-gradient(135deg, #1769E0 0%, #0B2545 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      letterSpacing: '0.04em',
                      border: '1px solid rgba(255,255,255,0.25)'
                    }}
                  >
                    VLM
                  </div>
                  <div>
                    <div className="fw-bold fs-6 lh-1" style={{ color: 'var(--text-color)' }}>{shop.name}</div>
                    <span className="text-muted" style={{ fontSize: '0.72rem' }}>
                      {activeDomain === DOMAINS.ALL ? 'Electrical, CCTV & Pumps' : getDomainName().replace(' - ', '')}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  className="mobile-drawer-close-btn"
                  onClick={closeNavbar}
                  aria-label="Close menu"
                >
                  <i className="bi bi-x-lg"></i>
                </motion.button>
              </div>

              {/* Drawer Body */}
              <div className="mobile-drawer-body">
                {/* Domain Selector Section */}
                <div>
                  <div className="drawer-section-title">
                    <i className="bi bi-sliders me-1"></i> Switch Domain
                  </div>
                  <div className="drawer-domain-grid">
                    {domainOptions.map((opt) => {
                      const isActive = activeDomain === opt.id;
                      return (
                        <button
                          key={opt.id}
                          className={`drawer-domain-chip ${isActive ? 'active' : ''}`}
                          onClick={() => handleDomainSelect(opt.id)}
                          type="button"
                        >
                          <i className={`bi ${opt.icon}`}></i>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Staggered Nav Links Section */}
                <div>
                  <div className="drawer-section-title">
                    <i className="bi bi-compass me-1"></i> Menu Navigation
                  </div>
                  <motion.ul
                    className="drawer-nav-list"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {navLinks.map((item) => (
                      <motion.li key={item.path} variants={itemVariants}>
                        <NavLink
                          to={item.path}
                          onClick={() => {
                            if (item.path === '/') setActiveDomain(DOMAINS.ALL);
                            closeNavbar();
                          }}
                          className={({ isActive }) =>
                            `drawer-nav-item ${isActive ? 'active' : ''}`
                          }
                        >
                          <div className="nav-text-group">
                            <span className="drawer-nav-icon">
                              <i className={`bi ${item.icon}`}></i>
                            </span>
                            <span>{item.name}</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            {item.badge && (
                              <span className="drawer-nav-badge">{item.badge}</span>
                            )}
                            <i className="bi bi-chevron-right opacity-50 fs-6"></i>
                          </div>
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              {/* Drawer Footer with Quick Actions */}
              <div className="mobile-drawer-footer">
                <a
                  href={getDefaultEnquiry()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-whatsapp-btn"
                  onClick={closeNavbar}
                >
                  <i className="bi bi-whatsapp fs-5"></i>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={getCallUrl()}
                  className="drawer-call-btn"
                  onClick={closeNavbar}
                >
                  <i className="bi bi-telephone-fill text-primary"></i>
                  <span>Call Us</span>
                </a>

                <div className="drawer-hours-badge">
                  <i className="bi bi-clock-fill text-success"></i>
                  <span>Mon - Sat: 9 AM - 9 PM | Sun: 9 AM - 1 PM</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
