import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { shop } from '../data/shop';
import { useTheme, DOMAINS } from '../context/ThemeContext';
import { getWhatsAppUrl } from '../utils/whatsapp';

// 3 Pillars with 3 separate services each & domain-specific styling
export const pillars = [
  {
    id: DOMAINS.ELECTRICAL,
    title: 'Electrical & Electronics',
    shortTitle: 'Electrical',
    icon: 'bi-lightning-charge-fill',
    badge: '⚡ Electrical Service Available',
    activeBadge: '⚡ Active: Electrical & Power Division',
    activeHeading: 'Electrical Contracting, Switchgear & Industrial Wiring',
    activeDesc: `Now viewing certified domestic & industrial wiring, DB panels, switches, inverter backups & doorstep electricians across ${shop.city}.`,
    badgeBg: 'text-white fw-bold',
    badgeStyle: { backgroundColor: '#4F46E5' },
    themeColor: '#4F46E5',
    accentColor: '#6366F1',
    iconColor: '#4F46E5',
    bgLight: '#EEF2FF',
    cardActiveBg: 'linear-gradient(165deg, #EEF2FF 0%, #E0E7FF 100%)',
    cardActiveBorder: '#4F46E5',
    sectionActiveBg: 'linear-gradient(180deg, #E0E7FF 0%, var(--bg-secondary) 100%)',
    borderLight: '#C7D2FE',
    glowColor: 'rgba(79, 70, 229, 0.22)',
    activeServiceBg: '#FFFFFF',
    activeServiceBorder: 'rgba(79, 70, 229, 0.35)',
    activeServiceText: '#1E1B4B',
    tagline: 'Wholesale & Retail Trade, Wiring & Industrial Power Solutions',
    services: [
      {
        title: 'House & Industrial Wiring',
        desc: 'Conduit wiring, DB panels, switches, lighting & load distribution.',
        icon: 'bi-lightning-charge-fill'
      },
      {
        title: 'Emergency Repair & MCB Trips',
        desc: 'Fast diagnosis for short circuits, tripped breakers & switch replacements.',
        icon: 'bi-wrench-adjustable'
      },
      {
        title: 'Inverters, Batteries & Stabilizers',
        desc: 'Supply, sizing, wiring & installation for Microtek & Luminous systems.',
        icon: 'bi-battery-charging'
      }
    ],
    productLink: '/products?category=electrical-electronics',
    serviceEnquiryText: `Hi ${shop.name}, I would like to book an electrician for Electrical Service in ${shop.city}.`
  },
  {
    id: DOMAINS.PUMPS,
    title: 'Pumps & Plumbing',
    shortTitle: 'Pumps & Plumbing',
    icon: 'bi-droplet-half',
    badge: '💧 Plumbing Service Available',
    activeBadge: '💧 Active: Pumps & Plumbing Pipeline Division',
    activeHeading: 'Submersible Motors, Pressure Pumps & Leak-Proof Pipelines',
    activeDesc: `Now viewing heavy-duty borewell submersible pumps, high-pressure CPVC/UPVC pipelines, leak diagnostics & expert plumbing support across ${shop.city}.`,
    badgeBg: 'bg-info text-white fw-bold',
    themeColor: '#0087C8',
    accentColor: '#0087C8',
    iconColor: '#0087C8',
    bgLight: '#ECFEFF',
    cardActiveBg: 'linear-gradient(165deg, #ECFEFF 0%, #CFFAFE 100%)',
    cardActiveBorder: '#0087C8',
    sectionActiveBg: 'linear-gradient(180deg, #E6F7FD 0%, var(--bg-secondary) 100%)',
    borderLight: '#E5D9B8',
    glowColor: 'rgba(0, 135, 200, 0.22)',
    activeServiceBg: '#FFFFFF',
    activeServiceBorder: 'rgba(0, 135, 200, 0.35)',
    activeServiceText: '#044365',
    tagline: 'Submersible Motors, Borewells, Pipelines & Drainage Systems',
    services: [
      {
        title: 'Submersible & Jet Pump Setup',
        desc: 'Borewell pump fitting, motor rewinding, starter panel & pressure tuning.',
        icon: 'bi-droplet-fill'
      },
      {
        title: 'All Types of Pipeline Works',
        desc: 'CPVC, UPVC & PVC high-pressure lines, concealed piping & tank connections.',
        icon: 'bi-tools'
      },
      {
        title: 'Leak Repairs & Sanitary Maintenance',
        desc: 'Fixing pipe bursts, tap/valve replacements & preventative upkeep.',
        icon: 'bi-wrench'
      }
    ],
    productLink: '/products?category=plumbing-services',
    serviceEnquiryText: `Hi ${shop.name}, I would like to book a technician for Pump / Plumbing service in ${shop.city}.`
  },
  {
    id: DOMAINS.CCTV,
    title: 'CCTV Surveillance',
    shortTitle: 'CCTV Security',
    icon: 'bi-camera-video',
    badge: '📹 CCTV Service Available',
    activeBadge: '📹 Active: CCTV Surveillance & Security Division',
    activeHeading: 'HD Security Cameras, NVR/DVR Setup & Live Remote View',
    activeDesc: `Now viewing certified Hikvision & CP Plus IP cameras, night vision surveillance, DVR/NVR multi-channel setups & certified installation across ${shop.city}.`,
    badgeBg: 'bg-danger text-white fw-bold',
    themeColor: '#DC2626',
    accentColor: '#DC2626',
    iconColor: '#DC2626',
    bgLight: '#FEF2F2',
    cardActiveBg: 'linear-gradient(165deg, #FEF2F2 0%, #FEE2E2 100%)',
    cardActiveBorder: '#DC2626',
    sectionActiveBg: 'linear-gradient(180deg, #FEE2E2 0%, var(--bg-secondary) 100%)',
    borderLight: '#FECACA',
    glowColor: 'rgba(220, 38, 38, 0.22)',
    activeServiceBg: '#FFFFFF',
    activeServiceBorder: 'rgba(220, 38, 38, 0.35)',
    activeServiceText: '#7F1D1D',
    tagline: 'Sales, Installation, IP & Analog Setup & Mobile View',
    services: [
      {
        title: 'HD IP & Analog Camera Setup',
        desc: 'Hikvision, CP Plus indoor & outdoor bullet/dome camera mounting.',
        icon: 'bi-camera-video-fill'
      },
      {
        title: 'Mobile Live View & DVR/NVR',
        desc: 'Remote smartphone access, multi-channel recording & cloud backup.',
        icon: 'bi-phone'
      },
      {
        title: 'Surveillance AMC & Maintenance',
        desc: 'Annual maintenance, cabling repair, night vision testing & upgrades.',
        icon: 'bi-shield-check'
      }
    ],
    productLink: '/products?category=cctv-surveillance',
    serviceEnquiryText: `Hi ${shop.name}, I need a CCTV Surveillance installation consultation in ${shop.city}.`
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const HeroPillars = () => {
  const { activeDomain, setActiveDomain } = useTheme();

  const activePillar = pillars.find(p => p.id === activeDomain);

  // Dynamic background and text based on active pillar choice
  const sectionBg = activePillar ? activePillar.sectionActiveBg : 'var(--bg-gradient)';
  const sectionBadge = activePillar ? activePillar.activeBadge : '⚡ Our 3 Core Service Divisions';
  const sectionHeading = activePillar ? activePillar.activeHeading : 'Choose Your Specialized Solution';
  const sectionDesc = activePillar 
    ? activePillar.activeDesc 
    : `Select any pillar below to filter products, access specialized engineering teams, or request instant doorstep services across ${shop.city}.`;

  return (
    <section 
      id="hero-pillars" 
      className="py-5 position-relative" 
      style={{ 
        background: sectionBg,
        transition: 'background 0.45s ease-in-out'
      }}
    >
      <div className="container py-4">
        {/* Section Header with Dynamic Domain-Specific Text */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeDomain}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-5"
          >
            <span 
              className="badge rounded-pill px-3 py-2 fw-semibold shadow-sm mb-3" 
              style={{ 
                background: activePillar ? activePillar.cardActiveBg : 'var(--card-bg)', 
                color: activePillar ? activePillar.themeColor : 'var(--primary-color)', 
                border: `1.5px solid ${activePillar ? activePillar.accentColor : 'var(--card-border)'}`, 
                fontSize: '0.85rem' 
              }}
            >
              {sectionBadge}
            </span>
            <h2 className="display-5 fw-bolder mb-3" style={{ letterSpacing: '-0.02em', color: activePillar ? activePillar.themeColor : 'var(--text-heading)' }}>
              {sectionHeading}
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '740px', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              {sectionDesc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* The Three Hero Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="row g-4 justify-content-center"
        >
          {pillars.map((pillar) => {
            const isActive = activeDomain === pillar.id;
            return (
              <motion.div className="col-12 col-md-4" key={pillar.id} variants={itemVariants}>
                <motion.div
                  layout
                  whileHover={{ y: -8, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setActiveDomain(isActive ? DOMAINS.ALL : pillar.id)}
                  className="card h-100 cursor-pointer border-0 position-relative"
                  style={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    background: isActive ? pillar.cardActiveBg : '#FFFFFF',
                    border: `2px solid ${isActive ? pillar.cardActiveBorder : 'var(--border-light)'}`,
                    boxShadow: isActive ? `0 16px 40px ${pillar.glowColor}` : '0 4px 20px rgba(0,0,0,0.05)',
                    borderRadius: '1.25rem',
                    transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease'
                  }}
                >
                  <div className="card-body p-3 p-sm-4 p-xl-4 text-center d-flex flex-column align-items-center position-relative h-100">

                    {/* Active highlight top bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeHighlightPillar"
                        style={{ 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          right: 0, 
                          height: '6px', 
                          background: pillar.accentColor 
                        }}
                      />
                    )}

                    {/* Icon circle */}
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
                      style={{
                        width: '74px',
                        height: '74px',
                        background: isActive ? '#FFFFFF' : pillar.bgLight,
                        border: `2px solid ${isActive ? pillar.accentColor : pillar.borderLight}`,
                        boxShadow: isActive ? `0 0 24px ${pillar.glowColor}` : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <motion.i
                        className={`bi ${pillar.icon} fs-1`}
                        animate={{
                          color: pillar.iconColor,
                          scale: isActive ? 1.15 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.i>
                    </div>

                    {/* Badge */}
                    <span 
                      className={`badge mb-2 px-3 py-1.5 rounded-pill small shadow-sm`}
                      style={{
                        backgroundColor: isActive ? pillar.accentColor : 'var(--card-bg)',
                        color: isActive ? '#FFFFFF' : pillar.themeColor,
                        border: `1.5px solid ${pillar.accentColor}`,
                        fontWeight: '700'
                      }}
                    >
                      {isActive ? `✓ Active: ${pillar.shortTitle}` : pillar.badge}
                    </span>

                    {/* Pillar Title */}
                    <h3 
                      className="h4 fw-bold mb-1" 
                      style={{ 
                        color: isActive ? pillar.themeColor : 'var(--text-heading)',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p 
                      className="small mb-3" 
                      style={{ 
                        color: isActive ? pillar.activeServiceText : 'var(--text-muted)',
                        fontWeight: isActive ? '500' : '400',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {pillar.tagline}
                    </p>

                    {/* Three Separate Services Section */}
                    <div className="w-100 my-2 text-start">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span 
                          className="small fw-bold text-uppercase" 
                          style={{ 
                            fontSize: '0.72rem', 
                            letterSpacing: '0.05em',
                            color: isActive ? pillar.themeColor : 'var(--text-muted)'
                          }}
                        >
                          <i className="bi bi-layers-fill me-1" style={{ color: pillar.accentColor }}></i> 3 Core Services:
                        </span>
                        {isActive && (
                          <span 
                            className="badge rounded-pill small fw-bold shadow-xs" 
                            style={{ 
                              backgroundColor: '#FFFFFF', 
                              color: pillar.themeColor, 
                              border: `1px solid ${pillar.accentColor}`, 
                              fontSize: '0.68rem' 
                            }}
                          >
                            <i className="bi bi-check2-circle me-1"></i>Active Selection
                          </span>
                        )}
                      </div>

                      <div className="d-flex flex-column gap-2">
                        {pillar.services.map((service, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 px-3 rounded-3"
                            style={{
                              background: isActive ? pillar.activeServiceBg : 'rgba(0,0,0,0.02)',
                              border: `1.5px solid ${isActive ? pillar.activeServiceBorder : 'var(--card-border)'}`,
                              boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                              transition: 'all 0.25s ease'
                            }}
                          >
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <i className={`bi ${service.icon} fs-6`} style={{ color: pillar.accentColor }}></i>
                              <span 
                                className="fw-bold small"
                                style={{ color: isActive ? pillar.themeColor : 'var(--text-heading)' }}
                              >
                                {service.title}
                              </span>
                            </div>
                            <p 
                              className="mb-0" 
                              style={{ 
                                fontSize: '0.76rem', 
                                lineHeight: '1.35',
                                color: isActive ? pillar.activeServiceText : 'var(--text-secondary)'
                              }}
                            >
                              {service.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Area */}
                    <div className="w-100 mt-auto pt-3">
                      <AnimatePresence>
                        {isActive ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="w-100 d-flex flex-column gap-2"
                          >
                            <Link
                              to={pillar.productLink}
                              className="btn w-100 rounded-pill py-2 fw-semibold shadow-sm small text-white"
                              style={{
                                background: `linear-gradient(135deg, ${pillar.accentColor} 0%, ${pillar.themeColor} 100%)`,
                                border: 'none',
                                boxShadow: `0 4px 12px ${pillar.glowColor}`
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="bi bi-grid me-1"></i> Explore {pillar.shortTitle} Products
                            </Link>

                            <a
                              href={getWhatsAppUrl(pillar.serviceEnquiryText)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-success btn-sm w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-1 shadow-sm"
                              style={{ background: '#25d366', border: 'none' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="bi bi-whatsapp"></i> Book {pillar.shortTitle} Service
                            </a>

                            <button
                              type="button"
                              className="btn btn-sm btn-light border text-danger w-100 rounded-pill py-1 fw-bold d-flex align-items-center justify-content-center gap-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDomain(DOMAINS.ALL);
                              }}
                            >
                              <i className="bi bi-unlock-fill"></i> Reset / Show All Domains
                            </button>
                          </motion.div>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-sm w-100 rounded-pill py-2 fw-semibold"
                            style={{
                              border: `1.5px solid ${pillar.themeColor}`,
                              color: pillar.themeColor,
                              backgroundColor: 'transparent',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = pillar.themeColor;
                              e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = pillar.themeColor;
                            }}
                          >
                            Choose {pillar.shortTitle}
                          </button>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Domain Reset Bar if Domain Active */}
        {activeDomain !== DOMAINS.ALL && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4 pt-2"
          >
            <div className="d-inline-flex align-items-center gap-3 p-2 px-4 rounded-pill bg-white shadow-sm border flex-wrap justify-content-center">
              <span className="small text-muted">
                Active Selection: <strong style={{ color: activePillar ? activePillar.themeColor : '#000' }}>{activePillar?.title}</strong>
              </span>
              <button
                onClick={() => setActiveDomain(DOMAINS.ALL)}
                className="btn btn-danger btn-sm rounded-pill px-3 py-1 d-flex align-items-center gap-1 shadow-sm fw-bold"
              >
                <i className="bi bi-unlock-fill"></i> Reset to Show All
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroPillars;
