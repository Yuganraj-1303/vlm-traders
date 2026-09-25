import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shop } from '../data/shop';
import { DOMAINS } from '../context/ThemeContext';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getCallUrl } from '../utils/phone';
import { getAssetUrl } from '../utils/assets';

const slides = [
  {
    id: 'electrical',
    domain: DOMAINS.ELECTRICAL,
    tag: '⚡ Electrical & Electronics',
    title: 'Modern Electrical Contracting & Industrial Wiring',
    lead: 'Certified domestic, commercial & industrial wiring, DB panels, switches, inverter backups, and emergency fault repairs in Ponneri.',
    image: '/images/hero_slider_electrical.jpg',
    mobileImage: '/images/hero_mobile_electrical.jpg',
    mobilePosition: 'center top',
    primaryCta: 'WhatsApp Electrician',
    primaryUrl: getWhatsAppUrl(`Hi ${shop.name}, I need Electrical Service / House Wiring assistance in ${shop.city}.`),
    secondaryCta: 'Call Electrician',
    secondaryUrl: getCallUrl(),
    accentColor: '#0284c7',
    badgeClass: 'bg-primary text-white',
    trustText: 'ISI Certified Switchgear & Wires'
  },
  {
    id: 'pumps',
    domain: DOMAINS.PUMPS,
    tag: '💧 Pumps & Plumbing Solutions',
    title: 'Submersible Motors, Pressure Pumps & Leak-Proof Piping',
    lead: 'Heavy-duty borewell submersible pumps, high-pressure CPVC/UPVC pipelines, leak diagnostics, and preventative maintenance.',
    image: '/images/hero_slider_pumps.jpg',
    mobileImage: '/images/hero_mobile_pumps.jpg',
    mobilePosition: 'center top',
    primaryCta: 'WhatsApp Pump Specialist',
    primaryUrl: getWhatsAppUrl(`Hi ${shop.name}, I need Pump Installation / Plumbing pipeline service in ${shop.city}.`),
    secondaryCta: 'Call Specialist',
    secondaryUrl: getCallUrl(),
    accentColor: '#06b6d4',
    badgeClass: 'bg-info text-dark',
    trustText: 'Submersible & Jet Pump Experts'
  },
  {
    id: 'cctv',
    domain: DOMAINS.CCTV,
    tag: '📹 Smart CCTV Surveillance & Security',
    title: 'High-Definition IP Security Cameras & Remote Live Monitoring',
    lead: 'Protect your home & business with crystal-clear night vision, remote smartphone streaming, multi-channel DVR/NVR, and certified installation.',
    image: '/images/hero_slider_cctv.jpg',
    mobileImage: '/images/hero_mobile_cctv_top.jpg',
    mobilePosition: 'center top',
    primaryCta: 'Get CCTV Quote & Install',
    primaryUrl: getWhatsAppUrl(`Hi ${shop.name}, I need a CCTV Surveillance installation quote in ${shop.city}.`),
    secondaryCta: 'Call CCTV Expert',
    secondaryUrl: getCallUrl(),
    accentColor: '#ef4444',
    badgeClass: 'bg-danger text-white',
    trustText: '24/7 Mobile Live View & Night Vision'
  },
  {
    id: 'complete',
    domain: DOMAINS.ALL,
    tag: '🏢 Complete Solutions Under One Roof',
    title: 'Total Power, Water & Security Infrastructure',
    lead: `Ponneri's premier multi-service hub for wholesale electrical goods, precision plumbing, and advanced security surveillance systems.`,
    image: '/images/hero_slider_complete.jpg',
    mobileImage: '/images/hero_mobile_complete.jpg',
    mobilePosition: 'center top',
    primaryCta: 'WhatsApp Consultation',
    primaryUrl: getWhatsAppUrl(`Hi ${shop.name}, I would like to enquire about your products and services in ${shop.city}.`),
    secondaryCta: 'Visit Our Shop',
    secondaryUrl: shop.googleMapsUrl,
    accentColor: '#f59e0b',
    badgeClass: 'bg-warning text-dark',
    trustText: `Serving ${shop.city} & Surrounding Areas`
  }
];

const SLIDE_DURATION = 5500; // 5.5 seconds per slide

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);

  // Touch swipe support for mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = slides[currentSlide];

  const scrollToPillars = () => {
    const el = document.getElementById('hero-pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="hero-slider-wrapper position-relative overflow-hidden"
      style={{
        minHeight: isMobile ? 'clamp(540px, 85vh, 680px)' : 'clamp(620px, 85vh, 760px)',
        backgroundColor: 'var(--bg-dark)',
        color: '#ffffff',
        display: 'flex',
        alignItems: isMobile ? 'flex-end' : 'center',
        paddingTop: isMobile ? '1.5rem' : '2rem',
        paddingBottom: isMobile ? '5.2rem' : '4.5rem'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Slow Crossfade (1.0s) & Ken Burns Effect */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
          style={{ zIndex: 1 }}
        >
          {/* Ken Burns Smooth Zoom tailored for Desktop vs Mobile */}
          <motion.div
            initial={{ scale: 1.0, x: 0 }}
            animate={{ scale: isMobile ? 1.04 : 1.06, x: isMobile ? 0 : -10 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.2, ease: 'easeOut' }}
            className="w-100 h-100 hero-slide-bg"
            style={{
              backgroundImage: `url(${getAssetUrl(isMobile ? (slide.mobileImage || slide.image) : slide.image)})`,
              backgroundSize: 'cover',
              backgroundPosition: isMobile ? (slide.mobilePosition || 'center center') : 'center right',
              willChange: 'transform'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Responsive Deep Navy Overlays */}
      {/* Desktop/Tablet: Left side deep navy negative space for text, right side reveals equipment */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none d-none d-md-block"
        style={{
          zIndex: 2,
          background: 'linear-gradient(90deg, rgba(11,37,69,0.96) 0%, rgba(11,37,69,0.86) 42%, rgba(11,37,69,0.55) 65%, rgba(11,37,69,0.20) 85%, rgba(11,37,69,0.30) 100%)'
        }}
      />

      {/* Mobile Gradient: Soft, balanced deep navy gradient so background image remains clear */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none d-md-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(11,37,69,0.36) 0%, rgba(11,37,69,0.20) 30%, rgba(11,37,69,0.54) 65%, rgba(11,37,69,0.90) 100%)'
        }}
      />
      
      {/* Top & Bottom Subtle Vignette */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none d-none d-md-block"
        style={{
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(11,37,69,0.65) 0%, transparent 20%, transparent 80%, rgba(11,37,69,0.95) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="container position-relative py-3 py-md-5 my-auto" style={{ zIndex: 3 }}>
        <div className="row align-items-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pe-lg-4 hero-content-card"
              >
                {/* Category Pill Tag */}
                <div className="mb-2 mb-md-3">
                  <span
                    className={`badge ${slide.badgeClass} rounded-pill px-3 py-2 fw-bold text-uppercase shadow-sm`}
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.06em',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {slide.tag}
                  </span>
                </div>

                {/* Hero Headline - Responsive Clamp */}
                <h1
                  className="fw-bolder text-white mb-2 mb-md-3"
                  style={{
                    fontSize: 'clamp(1.55rem, 4.2vw, 3.2rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.18',
                    textShadow: '0 3px 18px rgba(0,0,0,0.9)'
                  }}
                >
                  {slide.title}
                </h1>

                {/* Lead Text - Responsive Sizing */}
                <p
                  className="lead hero-lead-text mb-3 mb-md-4"
                  style={{
                    color: '#E2EDF8',
                    fontSize: 'clamp(0.88rem, 2vw, 1.15rem)',
                    fontWeight: 400,
                    lineHeight: '1.55',
                    maxWidth: '580px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.85)'
                  }}
                >
                  {slide.lead}
                </p>

                {/* Action CTA Buttons - Responsive Stack on Mobile */}
                <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 gap-sm-3 mb-3 mb-md-4">
                  <a
                    href={slide.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 py-2 py-sm-3 rounded-pill fw-bold d-inline-flex align-items-center justify-content-center shadow-lg hover-lift"
                    style={{
                      backgroundColor: 'var(--accent-green)',
                      borderColor: 'var(--accent-green)',
                      boxShadow: '0 6px 20px rgba(32,211,102,0.35)',
                      fontSize: '0.98rem'
                    }}
                  >
                    <i className="bi bi-whatsapp me-2 fs-5"></i>
                    {slide.primaryCta}
                  </a>

                  <a
                    href={slide.secondaryUrl}
                    className="btn px-4 py-2 py-sm-3 rounded-pill fw-bold d-inline-flex align-items-center justify-content-center shadow-sm hover-lift"
                    style={{
                      border: '1.5px solid var(--brand-blue-light)',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      fontSize: '0.98rem'
                    }}
                  >
                    <i className="bi bi-telephone-fill me-2" style={{ color: 'var(--brand-blue-light)' }}></i>
                    {slide.secondaryCta}
                  </a>
                </div>

                {/* Trust Highlight */}
                <div className="d-flex align-items-center text-white-50 small gap-2 pt-1 flex-wrap">
                  <i className="bi bi-shield-fill-check text-success fs-6"></i>
                  <span className="fw-medium text-light opacity-90">{slide.trustText}</span>
                  <span className="opacity-40 d-none d-sm-inline">•</span>
                  <span className="text-light opacity-75 d-none d-sm-inline">100% Genuine Materials</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      {/* 1. Desktop Left & Right Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="btn position-absolute top-50 start-0 translate-middle-y ms-2 ms-md-4 rounded-circle d-none d-md-flex align-items-center justify-content-center text-white"
        style={{
          zIndex: 4,
          width: '46px',
          height: '46px',
          backgroundColor: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.2s ease'
        }}
      >
        <i className="bi bi-chevron-left fs-5"></i>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="btn position-absolute top-50 end-0 translate-middle-y me-2 me-md-4 rounded-circle d-none d-md-flex align-items-center justify-content-center text-white"
        style={{
          zIndex: 4,
          width: '46px',
          height: '46px',
          backgroundColor: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.2s ease'
        }}
      >
        <i className="bi bi-chevron-right fs-5"></i>
      </button>

      {/* 2. Responsive Bottom Navigation */}
      <div
        className="position-absolute bottom-0 start-0 w-100 pb-3 pb-md-4 pt-2"
        style={{ zIndex: 4, background: 'linear-gradient(0deg, rgba(6,11,22,0.95) 0%, transparent 100%)' }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          
          {/* Desktop & Tablet: Full tab buttons with progress lines */}
          <div className="d-none d-md-flex flex-wrap align-items-center gap-2">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className="btn text-start p-2 px-3 rounded-3 position-relative border-0 text-white"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    minWidth: '130px'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="small fw-bold opacity-75" style={{ fontSize: '0.7rem' }}>
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="badge rounded-circle p-1 bg-success" style={{ width: '6px', height: '6px' }} />
                    )}
                  </div>
                  <div className="fw-semibold small text-truncate" style={{ fontSize: '0.8rem' }}>
                    {idx === 0 ? 'Electrical' : idx === 1 ? 'Pumps & Plumbing' : idx === 2 ? 'CCTV & Security' : 'Complete Hub'}
                  </div>

                  {/* Progress Line */}
                  <div
                    className="position-absolute bottom-0 start-0 w-100 rounded-bottom"
                    style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    {isActive && (
                      <motion.div
                        key={`bar-${currentSlide}-${isPaused}`}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? '0%' : '100%' }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                        className="h-100 rounded-bottom"
                        style={{ backgroundColor: s.accentColor }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Only: Sleek compact interactive indicator pills */}
          <div className="d-flex d-md-none align-items-center gap-2">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="btn p-0 border-0 position-relative"
                  style={{
                    height: '8px',
                    width: isActive ? '32px' : '10px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? s.accentColor : 'rgba(255,255,255,0.25)',
                    transition: 'all 0.35s ease'
                  }}
                />
              );
            })}
          </div>

          {/* Scroll Down to "3 Hero Pillars" Section */}
          <button
            onClick={scrollToPillars}
            className="btn btn-link text-white text-opacity-75 text-decoration-none d-flex align-items-center gap-2 p-0 small hover-lift"
            style={{ fontSize: '0.84rem' }}
          >
            <span className="d-none d-sm-inline">Explore 3 Core Pillars</span>
            <span className="d-inline d-sm-none fw-semibold">3 Pillars</span>
            <motion.i
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="bi bi-arrow-down-circle-fill text-accent fs-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
