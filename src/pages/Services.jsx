import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { shop } from '../data/shop';
import { services } from '../data/services';
import { useTheme, DOMAINS } from '../context/ThemeContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getCallUrl } from '../utils/phone';

const domainBanners = {
  [DOMAINS.ELECTRICAL]: {
    icon: 'bi-lightning-charge-fill',
    iconBgClass: 'text-indigo',
    badge: '⚡ Electrical Service Available',
    badgeClass: 'text-white fw-bold',
    badgeStyle: { backgroundColor: '#4F46E5' },
    heading: 'Need Electrical Service or House Wiring?',
    description: `We provide certified electrician services for domestic, commercial & industrial installations, repairs, DB panel work & emergency troubleshooting in ${shop.city}.`,
    btnText: 'Book Electrical Service',
    btnClass: 'btn-success text-white fw-bold',
    whatsappMsg: `Hi ${shop.name}, I need Electrical Service / House Wiring assistance in ${shop.city}.`,
    gradient: 'linear-gradient(135deg, #0B2545 0%, #1E1B4B 45%, #4F46E5 100%)',
    technicianImage: '/images/electrician_technician.png',
    technicianRole: 'Verified Electrician',
    badgeDesc: 'House Wiring & DB Specialist'
  },
  [DOMAINS.PUMPS]: {
    icon: 'bi-droplet-half',
    iconBgClass: 'text-info',
    badge: '💧 Plumbing & Pump Service Available',
    badgeClass: 'bg-info text-white fw-bold',
    heading: 'Need Pump Installation, Motor Repair or Pipeline Works?',
    description: `We provide certified pump mechanics and plumbing specialists for submersible motors, borewell fitting, leak fixes & high-pressure CPVC/UPVC pipelines in ${shop.city}.`,
    btnText: 'Book Plumbing / Pump Service',
    btnClass: 'btn-success text-white fw-bold shadow-sm',
    whatsappMsg: `Hi ${shop.name}, I need Pump Installation / Plumbing pipeline service in ${shop.city}.`,
    gradient: 'linear-gradient(135deg, #0B2545 0%, #183B63 45%, #0087C8 100%)',
    technicianImage: '/images/technician_plumbing.jpg',
    technicianRole: 'Certified Pump & Plumber',
    badgeDesc: 'Submersible & Pipeline Specialist'
  },
  [DOMAINS.CCTV]: {
    icon: 'bi-camera-video-fill',
    iconBgClass: 'text-danger',
    badge: '📹 CCTV Surveillance Service Available',
    badgeClass: 'bg-danger text-white fw-bold',
    heading: 'Need Security Cameras, IP Setup or CCTV AMC?',
    description: `We provide expert sales, installation, mobile view configuration, multi-channel DVR/NVR setup, and annual maintenance for homes, shops & businesses in ${shop.city}.`,
    btnText: 'Book CCTV Installation',
    btnClass: 'btn-success text-white fw-bold',
    whatsappMsg: `Hi ${shop.name}, I need a CCTV surveillance installation quote in ${shop.city}.`,
    gradient: 'linear-gradient(135deg, #0B2545 0%, #183B63 50%, #DC2626 100%)',
    technicianImage: '/images/technician_cctv.jpg',
    technicianRole: 'Certified CCTV Specialist',
    badgeDesc: 'IP & HD Camera Setup'
  },
  [DOMAINS.ALL]: {
    icon: 'bi-tools',
    iconBgClass: 'text-primary',
    badge: 'Multi-Domain Services Available',
    badgeClass: 'bg-primary text-white fw-bold',
    heading: 'Need Electrical, Plumbing or CCTV Service in Ponneri?',
    description: `Certified electricians, master plumbers, and CCTV security technicians ready to assist you for residential, commercial & industrial requirements in ${shop.city}.`,
    btnText: 'Book Service on WhatsApp',
    btnClass: 'btn-success text-white fw-bold',
    whatsappMsg: `Hi ${shop.name}, I would like to book a service in ${shop.city}.`,
    gradient: 'linear-gradient(135deg, #0B2545 0%, #183B63 50%, #1769E0 100%)',
    technicianImage: '/images/electrician_technician.png',
    technicianRole: 'Multi-Service Engineers',
    badgeDesc: `Doorstep Support in ${shop.city}`
  }
};

const domainPageHeaders = {
  [DOMAINS.ELECTRICAL]: {
    title: 'Electrical & Electronics Services',
    subtitle: `Certified Electrician Services, Conduit Wiring, DB Panels & Repairs in ${shop.city}`
  },
  [DOMAINS.PUMPS]: {
    title: 'Pumps & Plumbing Services',
    subtitle: `Submersible Pump Mechanics, Pipeline Fitting, Motor Repairs & Leak Fixes in ${shop.city}`
  },
  [DOMAINS.CCTV]: {
    title: 'CCTV Surveillance & Security Services',
    subtitle: `High-Definition Security Cameras, IP & Analog Setup, Mobile View & AMC in ${shop.city}`
  },
  [DOMAINS.ALL]: {
    title: 'Our Services',
    subtitle: `Professional Electrical, CCTV & Plumbing Services Available in ${shop.city}`
  }
};

const bottomHelpContent = {
  [DOMAINS.ELECTRICAL]: {
    heading: 'Need help choosing an electrical product or wiring solution?',
    desc: 'Our certified electricians are ready to assist you with load calculation, genuine materials and on-site support.',
    waMsg: `Hi ${shop.name}, I need help choosing electrical products or wiring in ${shop.city}.`
  },
  [DOMAINS.PUMPS]: {
    heading: 'Need help selecting the right pump or fixing a plumbing line?',
    desc: 'Our pump mechanics and plumbers will help you with motor sizing, borewell fitting and pipeline planning.',
    waMsg: `Hi ${shop.name}, I need assistance with pumps or plumbing in ${shop.city}.`
  },
  [DOMAINS.CCTV]: {
    heading: 'Need help designing a CCTV surveillance setup for your premises?',
    desc: 'Get expert advice on camera angles, storage size, night-vision range, and remote mobile viewing setup.',
    waMsg: `Hi ${shop.name}, I need guidance on CCTV surveillance installation in ${shop.city}.`
  },
  [DOMAINS.ALL]: {
    heading: 'Need help choosing an electrical, plumbing or CCTV product?',
    desc: 'Our experts are ready to assist you with the right solutions and genuine brand warranty.',
    waMsg: `Hi ${shop.name}, I would like advice on products and services in ${shop.city}.`
  }
};

const Services = () => {
  const { activeDomain, setActiveDomain } = useTheme();

  const currentBanner = domainBanners[activeDomain] || domainBanners[DOMAINS.ALL];
  const currentHeader = domainPageHeaders[activeDomain] || domainPageHeaders[DOMAINS.ALL];
  const currentBottomHelp = bottomHelpContent[activeDomain] || bottomHelpContent[DOMAINS.ALL];

  // Filter services by active domain
  const displayedServices = services.filter(service => {
    if (activeDomain === DOMAINS.ALL) return true;
    return service.domain === activeDomain;
  });

  return (
    <>
      <SEO 
        title={`${currentHeader.title} in ${shop.city} | Certified Electricians & CCTV | ${shop.name}`}
        description={`${currentHeader.subtitle} Book verified technicians in ${shop.city} for house wiring, CCTV setup, and submersible pumps.`}
        keywords={`Electrician services in ${shop.city}, CCTV installation ${shop.city}, Pump mechanic ${shop.city}, House wiring contractor ${shop.city}, Emergency electrical repair ${shop.city}`}
        url={`${window.location.origin}/services`}
      />

      {/* Header section with domain switch tabs */}
      <div 
        className="py-4 border-bottom"
        style={{ 
          backgroundColor: 'var(--section-products-bg, var(--bg-primary))',
          transition: 'background-color 0.4s ease, border-color 0.4s ease' 
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div>
              <h1 className="fw-bold text-primary-theme mb-1">
                {currentHeader.title} &amp; <span className="highlight-keyword">Doorstep Booking</span>
              </h1>
              <p className="text-muted mb-0">{currentHeader.subtitle}</p>
            </div>

            {/* Filter Pills */}
            <div className="d-inline-flex align-items-center gap-2 p-1 rounded-pill bg-white shadow-sm border flex-wrap">
              <button
                onClick={() => setActiveDomain(DOMAINS.ALL)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold ${activeDomain === DOMAINS.ALL ? 'btn-dark text-white' : 'btn-light text-muted border-0'}`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveDomain(DOMAINS.ELECTRICAL)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold ${activeDomain === DOMAINS.ELECTRICAL ? 'text-white fw-bold shadow-sm' : 'btn-light text-muted border-0'}`}
                style={activeDomain === DOMAINS.ELECTRICAL ? { backgroundColor: '#4F46E5', borderColor: '#4F46E5' } : {}}
              >
                <i className="bi bi-lightning-charge-fill me-1"></i>Electrical
              </button>
              <button
                onClick={() => setActiveDomain(DOMAINS.PUMPS)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold ${activeDomain === DOMAINS.PUMPS ? 'btn-primary text-white fw-bold shadow-sm' : 'btn-light text-muted border-0'}`}
              >
                <i className="bi bi-droplet-half me-1"></i>Pumps & Plumbing
              </button>
              <button
                onClick={() => setActiveDomain(DOMAINS.CCTV)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold ${activeDomain === DOMAINS.CCTV ? 'btn-danger text-white fw-bold shadow-sm' : 'btn-light text-muted border-0'}`}
              >
                <i className="bi bi-camera-video me-1"></i>CCTV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Domain Highlight Banner */}
      <AnimatePresence mode="wait">
        <motion.section 
          key={activeDomain}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35 }}
          className="pt-4 pb-0 text-white position-relative overflow-hidden" 
          style={{ background: currentBanner.gradient }}
        >
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-7 col-xl-8 pb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="p-3 bg-white rounded-circle shadow-sm flex-shrink-0 d-none d-sm-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px' }}>
                    <i className={`bi ${currentBanner.icon} fs-2 ${currentBanner.iconBgClass}`}></i>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                      <span className={`badge ${currentBanner.badgeClass} px-3 py-1 rounded-pill fw-bold shadow-sm`}>
                        <i className="bi bi-patch-check-fill me-1"></i>{currentBanner.badge}
                      </span>
                      <span className="badge bg-white text-dark rounded-pill px-3 py-1 fw-bold shadow-sm small">
                        <i className="bi bi-geo-alt-fill text-danger me-1"></i>Doorstep Service in {shop.city}
                      </span>
                    </div>
                    <h2 className="fw-bolder mb-2 text-white display-6" style={{ letterSpacing: '-0.02em' }}>
                      {currentBanner.heading}
                    </h2>
                    <p className="mb-4 text-light opacity-90" style={{ maxWidth: '650px', fontSize: '1.02rem', lineHeight: '1.6' }}>
                      {currentBanner.description}
                    </p>
                    <div className="d-flex gap-3 flex-wrap align-items-center">
                      <a 
                        href={getWhatsAppUrl(currentBanner.whatsappMsg)}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`btn ${currentBanner.btnClass} rounded-pill px-4 py-2 shadow-sm fw-bold d-inline-flex align-items-center gap-2`}
                      >
                        <i className="bi bi-whatsapp fs-5"></i> {currentBanner.btnText}
                      </a>
                      <a 
                        href={getCallUrl()} 
                        className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                      >
                        <i className="bi bi-telephone-fill"></i> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Doorstep Technician Showcase */}
              <div className="col-lg-5 col-xl-4 text-center d-flex justify-content-center justify-content-lg-end align-items-end position-relative">
                <motion.div 
                  key={currentBanner.technicianImage}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="position-relative d-inline-block"
                >
                  <img 
                    src={currentBanner.technicianImage} 
                    alt={currentBanner.technicianRole}
                    className="img-fluid position-relative d-block mx-auto rounded-4"
                    style={{
                      maxHeight: '315px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.35))',
                      zIndex: 2
                    }}
                  />
                  {/* Floating Trust Badge */}
                  <div 
                    className="position-absolute bg-white text-dark rounded-4 p-2 px-3 shadow-lg d-flex align-items-center gap-2 text-start"
                    style={{
                      bottom: '25px',
                      left: '-10px',
                      zIndex: 3,
                      border: '1px solid rgba(0,0,0,0.08)',
                      backdropFilter: 'blur(8px)',
                      minWidth: '190px'
                    }}
                  >
                    <div className="rounded-circle bg-success text-white p-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                      <i className="bi bi-shield-fill-check fs-6"></i>
                    </div>
                    <div>
                      <div className="fw-bold small" style={{ fontSize: '0.82rem', lineHeight: '1.2' }}>{currentBanner.technicianRole}</div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>{currentBanner.badgeDesc}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Services Grid */}
      <section 
        className="py-5"
        style={{ 
          backgroundColor: 'var(--section-service-bg, var(--bg-secondary))',
          transition: 'background-color 0.4s ease, border-color 0.4s ease'
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <span 
                className="badge rounded-pill px-3 py-1.5 fw-bold mb-2 shadow-sm d-inline-block"
                style={{
                  background: activeDomain === DOMAINS.ELECTRICAL ? 'rgba(23, 105, 224, 0.12)' : activeDomain === DOMAINS.PUMPS ? 'rgba(0, 135, 200, 0.12)' : activeDomain === DOMAINS.CCTV ? 'rgba(196, 90, 0, 0.12)' : 'rgba(23, 105, 224, 0.08)',
                  color: activeDomain === DOMAINS.ELECTRICAL ? '#1769E0' : activeDomain === DOMAINS.PUMPS ? '#0087C8' : activeDomain === DOMAINS.CCTV ? '#C45A00' : 'var(--brand-blue)',
                  border: `1px solid ${activeDomain === DOMAINS.ELECTRICAL ? '#BFDBFE' : activeDomain === DOMAINS.PUMPS ? '#A5F3FC' : activeDomain === DOMAINS.CCTV ? '#FED7AA' : 'var(--border-light)'}`
                }}
              >
                {activeDomain === DOMAINS.ELECTRICAL ? '⚡ Licensed Electricians On-Call' : activeDomain === DOMAINS.PUMPS ? '💧 Certified Pump Mechanics & Plumbers' : activeDomain === DOMAINS.CCTV ? '📹 Certified Surveillance Specialists' : '⭐ Doorstep Certified Technicians'}
              </span>
              <h4 className="fw-bold mb-0 text-dark">
                {activeDomain === DOMAINS.ELECTRICAL ? 'Electrical & Wiring Services' : activeDomain === DOMAINS.PUMPS ? 'Pumps & Plumbing Services' : activeDomain === DOMAINS.CCTV ? 'CCTV Surveillance Services' : 'Available Services'} ({displayedServices.length})
              </h4>
            </div>
            {activeDomain !== DOMAINS.ALL && (
              <button 
                onClick={() => setActiveDomain(DOMAINS.ALL)}
                className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 fw-bold"
              >
                <i className="bi bi-unlock-fill me-1"></i> Reset / Show All {services.length} Services
              </button>
            )}
          </div>

          <motion.div 
            key={activeDomain}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="row g-4"
          >
            {displayedServices.map(service => {
              const titleLower = service.title.toLowerCase();
              let accentColor = 'var(--electrical)';
              let accentBg = 'rgba(23, 105, 224, 0.08)';

              if (titleLower.includes('solar')) {
                accentColor = 'var(--solar)';
                accentBg = 'rgba(217, 154, 0, 0.10)';
              } else if (titleLower.includes('inverter') || titleLower.includes('battery')) {
                accentColor = 'var(--power)';
                accentBg = 'rgba(107, 78, 255, 0.10)';
              } else if (service.domain === 'pumps') {
                accentColor = 'var(--plumbing)';
                accentBg = 'rgba(0, 135, 200, 0.10)';
              } else if (service.domain === 'cctv') {
                accentColor = 'var(--security)';
                accentBg = 'rgba(220, 38, 38, 0.10)';
              }

              return (
                <div key={service.id} className="col-md-6 col-lg-4">
                  <div 
                    className="card service-card h-100 shadow-sm hover-lift"
                    style={{
                      backgroundColor: 'var(--bg-white)',
                      borderColor: 'var(--border-light)',
                      boxShadow: 'var(--shadow-soft)'
                    }}
                  >
                    <div className="card-body p-4 text-center d-flex flex-column">
                      <div 
                        className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3 shadow-sm"
                        style={{ 
                          width: '64px', 
                          height: '64px', 
                          backgroundColor: accentBg,
                          border: `1.5px solid ${accentColor}`
                        }}
                      >
                        <i className={`bi ${service.icon} fs-2`} style={{ color: accentColor }}></i>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: 'var(--text-heading)' }}>{service.title}</h5>
                      <p className="small mb-4 flex-grow-1" style={{ color: 'var(--text-primary)' }}>{service.description}</p>
                      <a 
                        href={getWhatsAppUrl(`Hi ${shop.name}, I would like to book or enquire about "${service.title}" in ${shop.city}.`)}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-outline-primary rounded-pill w-100 fw-bold py-2"
                      >
                        <i className="bi bi-whatsapp me-1"></i> Enquire for Service
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Bottom Help Banner */}
      <section 
        className="py-5 text-center" 
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          borderTop: '1px solid var(--border-dark)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease'
        }}
      >
        <div className="container">
          <h3 className="fw-bold mb-2" style={{ color: 'var(--text-heading)' }}>{currentBottomHelp.heading}</h3>
          <p className="lead mb-4 fs-6 mx-auto" style={{ maxWidth: '640px', color: 'var(--text-primary)' }}>{currentBottomHelp.desc}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href={getWhatsAppUrl(currentBottomHelp.waMsg)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-success btn-lg rounded-pill px-5 fw-bold"
              style={{ backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
            >
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Us
            </a>
            <a 
              href={getCallUrl()} 
              className="btn btn-primary btn-lg rounded-pill px-4 fw-bold"
              style={{ backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}
            >
              <i className="bi bi-telephone-fill me-2"></i> Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

