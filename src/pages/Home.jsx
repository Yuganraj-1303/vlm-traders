import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import HeroPillars from '../components/HeroPillars';
import ContactButtons from '../components/ContactButtons';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import BusinessInfo from '../components/BusinessInfo';
import OpeningHours from '../components/OpeningHours';
import GoogleMap from '../components/GoogleMap';
import { shop } from '../data/shop';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { offers } from '../data/offers';
import { getLocalBusinessSchema, getFaqSchema } from '../utils/seo';
import { getDefaultEnquiry, getWhatsAppUrl } from '../utils/whatsapp';
import { getCallUrl } from '../utils/phone';
import { useTheme, DOMAINS } from '../context/ThemeContext';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Section = ({ children, className = "", style = {} }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUpVariant}
    className={`py-5 ${className}`}
    style={{ transition: 'background-color 0.4s ease, border-color 0.4s ease', ...style }}
  >
    {children}
  </motion.section>
);

const Home = () => {
  const { activeDomain, setActiveDomain } = useTheme();

  // Filter products based on activeDomain
  const displayedFeaturedProducts = products.filter(p => {
    if (!p.featured) return false;
    if (activeDomain === DOMAINS.ELECTRICAL) {
      return p.category !== 'CCTV Surveillance' && p.category !== 'Plumbing Services';
    }
    if (activeDomain === DOMAINS.CCTV) {
      return p.category === 'CCTV Surveillance';
    }
    if (activeDomain === DOMAINS.PUMPS) {
      return p.category === 'Plumbing Services';
    }
    return true;
  }).slice(0, 24);

  const currentOffers = offers.slice(0, 2);

  const getCategoryBadge = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL:
        return '⚡ Active: Electrical & Power Services';
      case DOMAINS.PUMPS:
        return '💧 Active: Pumps & Plumbing Pipeline Services';
      case DOMAINS.CCTV:
        return '📹 Active: CCTV Surveillance & Security Services';
      default:
        return '⚡ Guaranteed ISI Products & Certified Doorstep Technicians';
    }
  };

  const getCategoryTitle = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL:
        return (
          <>
            Electrical Categories &amp; <span className="highlight-keyword">Certified Electrician Services</span>
          </>
        );
      case DOMAINS.PUMPS:
        return (
          <>
            Borewell Pumps, Pipes &amp; <span className="highlight-keyword">Certified Plumbing Services</span>
          </>
        );
      case DOMAINS.CCTV:
        return (
          <>
            Surveillance Systems &amp; <span className="highlight-keyword">Professional CCTV Installation</span>
          </>
        );
      default:
        return (
          <>
            Shop by Category &amp; <span className="highlight-keyword">Certified Services</span>
          </>
        );
    }
  };

  const getCategoryDescription = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL:
        return `Explore industrial & domestic wiring, switchgear, DB panels and book verified doorstep electricians across ${shop.city}.`;
      case DOMAINS.PUMPS:
        return `Explore submersible borewell pumps, CPVC/UPVC pipelines, valves and book experienced pump mechanics and plumbers across ${shop.city}.`;
      case DOMAINS.CCTV:
        return `Explore HD security cameras, multi-channel DVR/NVR setups, mobile live view and book certified surveillance technicians across ${shop.city}.`;
      default:
        return `Explore our genuine electrical, pump & security products with Doorstep Electrician Installation across ${shop.city}.`;
    }
  };

  const getFeaturedTitle = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL:
        return 'Featured Electrical Products';
      case DOMAINS.CCTV:
        return 'Featured CCTV Products';
      case DOMAINS.PUMPS:
        return 'Featured Pumps & Plumbing Products';
      default:
        return 'Featured Products';
    }
  };

  const getViewAllLink = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL:
        return '/products?category=electrical-electronics';
      case DOMAINS.CCTV:
        return '/products?category=cctv-surveillance';
      case DOMAINS.PUMPS:
        return '/products?category=plumbing-services';
      default:
        return '/products';
    }
  };

  const getBottomCta = () => {
    switch (activeDomain) {
      case DOMAINS.ELECTRICAL:
        return {
          heading: `Need electrical wiring, panel setup or repair?`,
          desc: `Contact our certified electricians for domestic, commercial & industrial wiring in ${shop.city}.`,
          btnText: "WhatsApp Electrician",
          waUrl: getWhatsAppUrl(`Hi ${shop.name}, I need electrical service or wiring assistance in ${shop.city}.`),
          callText: "Call Electrician"
        };
      case DOMAINS.PUMPS:
        return {
          heading: `Need pump installation or plumbing repairs?`,
          desc: `Connect with our plumbing and pump specialists for borewell fitting, motor servicing, and pipeline solutions in ${shop.city}.`,
          btnText: "WhatsApp Plumbing Specialist",
          waUrl: getWhatsAppUrl(`Hi ${shop.name}, I need pump installation or plumbing pipeline service in ${shop.city}.`),
          callText: "Call Pump Specialist"
        };
      case DOMAINS.CCTV:
        return {
          heading: `Looking to secure your premises with CCTV cameras?`,
          desc: `Contact us for free site surveys, HD night-vision cameras, mobile view setup, and installation quotes in ${shop.city}.`,
          btnText: "WhatsApp CCTV Specialist",
          waUrl: getWhatsAppUrl(`Hi ${shop.name}, I need a CCTV surveillance camera quote in ${shop.city}.`),
          callText: "Call CCTV Expert"
        };
      default:
        return {
          heading: `Looking for an electrical, plumbing or security product?`,
          desc: `Contact us to check availability, wholesale rates or book certified service instantly in ${shop.city}.`,
          btnText: "WhatsApp Us Now",
          waUrl: getDefaultEnquiry(),
          callText: "Call Now"
        };
    }
  };

  const bottomCta = getBottomCta();

  return (
    <>
      <SEO
        title={`${shop.name} | Best Electrical Shop, Electrician & CCTV in ${shop.city}`}
        description={`Top-rated electrical store in ${shop.city}. Licensed electrician services, house & industrial wiring, DB panels, HD CCTV camera installation, and submersible pumps. Wholesale & retail rates.`}
        keywords={`Electrical shop in ${shop.city}, Electrician in ${shop.city}, CCTV camera installation ${shop.city}, Submersible pump dealer ${shop.city}, House wiring contractor ${shop.city}, Hikvision CCTV dealer ${shop.city}, Plumbing services ${shop.city}, Industrial wiring ${shop.city}`}
        url={window.location.origin}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            getLocalBusinessSchema(),
            getFaqSchema()
          ]
        }}
      />

      <Hero />

      {/* Second Page / Section: The 3 Hero Pillars */}
      <HeroPillars />

      <Section className="position-relative" style={{ zIndex: 2 }}>
        <div className="container">
          <ContactButtons />
        </div>
      </Section>


      {/* Category & Certified Services Section with Dynamic Background & Text */}
      <Section
        style={{
          background: 'var(--section-service-bg, var(--bg-secondary))',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease'
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-5">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDomain}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <span 
                    className="badge rounded-pill px-3 py-1.5 fw-bold mb-2 shadow-sm d-inline-block"
                    style={{
                      background: activeDomain === DOMAINS.ELECTRICAL ? 'rgba(79, 70, 229, 0.12)' : activeDomain === DOMAINS.PUMPS ? 'rgba(0, 135, 200, 0.12)' : activeDomain === DOMAINS.CCTV ? 'rgba(220, 38, 38, 0.12)' : 'rgba(23, 105, 224, 0.08)',
                      color: activeDomain === DOMAINS.ELECTRICAL ? '#4F46E5' : activeDomain === DOMAINS.PUMPS ? '#0087C8' : activeDomain === DOMAINS.CCTV ? '#DC2626' : 'var(--brand-blue)',
                      border: `1px solid ${activeDomain === DOMAINS.ELECTRICAL ? '#C7D2FE' : activeDomain === DOMAINS.PUMPS ? '#A5F3FC' : activeDomain === DOMAINS.CCTV ? '#FECACA' : 'var(--border-light)'}`
                    }}
                  >
                    {getCategoryBadge()}
                  </span>
                  <h3 className="fw-bold text-primary-theme mb-1 display-6">
                    {getCategoryTitle()}
                  </h3>
                  <p className="text-muted mb-0" style={{ maxWidth: '750px' }}>
                    {getCategoryDescription()}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            {activeDomain !== DOMAINS.ALL && (
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <Link 
                  to="/services" 
                  className="btn btn-primary btn-sm rounded-pill px-3 py-1.5 fw-bold shadow-sm d-inline-flex align-items-center gap-1"
                >
                  <i className="bi bi-tools"></i> View All Services
                </Link>
                <button 
                  onClick={() => setActiveDomain(DOMAINS.ALL)}
                  className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1.5 fw-bold"
                >
                  <i className="bi bi-unlock-fill"></i> Reset Filter
                </button>
              </div>
            )}
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-4"
          >
            {categories.map(category => (
              <motion.div variants={fadeUpVariant} key={category.id} className="col-12 col-sm-6 col-lg-3">
                <CategoryCard category={category} activeDomain={activeDomain} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Featured Products Section with Dynamic Background */}
      <Section
        style={{
          background: 'var(--section-products-bg, var(--bg-primary))',
          borderBottom: '1px solid var(--border-dark)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease'
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <h3 className="fw-bold text-primary-theme mb-1 display-6">{getFeaturedTitle()}</h3>
              {activeDomain !== DOMAINS.ALL && (
                <div className="d-flex align-items-center gap-2 mt-2 flex-wrap">
                  <span 
                    className="badge rounded-pill px-3 py-1.5 fw-bold shadow-sm"
                    style={{
                      backgroundColor: activeDomain === DOMAINS.ELECTRICAL ? '#4F46E5' : activeDomain === DOMAINS.CCTV ? '#DC2626' : '#0087C8',
                      color: '#FFFFFF'
                    }}
                  >
                    Filtered by {activeDomain === DOMAINS.ELECTRICAL ? '⚡ Electrical' : activeDomain === DOMAINS.CCTV ? '📹 CCTV' : '💧 Pumps & Plumbing'}
                  </span>
                  <button 
                    onClick={() => setActiveDomain(DOMAINS.ALL)}
                    className="btn btn-danger btn-sm rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 shadow-sm fw-bold"
                  >
                    <i className="bi bi-unlock-fill"></i> Reset / Show All Products
                  </button>
                </div>
              )}
            </div>
            <Link to={getViewAllLink()} className="btn btn-outline-primary btn-sm rounded-pill px-4 py-2 fw-bold">
              View All {activeDomain !== DOMAINS.ALL ? (activeDomain === DOMAINS.ELECTRICAL ? 'Electrical' : activeDomain === DOMAINS.CCTV ? 'CCTV' : 'Plumbing') : ''}
            </Link>
          </div>

          <motion.div
            key={activeDomain}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="row g-2 g-md-4"
          >
            {displayedFeaturedProducts.map(product => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Top Brands Showcase */}
      <Section className="py-5 overflow-hidden" style={{ background: 'var(--bg-gradient)' }}>
        <div className="container text-center mb-4">
          <span className="text-uppercase tracking-wider small fw-bold text-accent mb-2 d-block" style={{ letterSpacing: '0.15em' }}>
            Authorized Dealers &amp; Trusted Partners in {shop.city}
          </span>
          <h3 className="fw-bolder text-primary-theme mb-3 display-6">
            Leading Brands in <span className="highlight-keyword">Electrical</span>, <span className="highlight-keyword">CCTV</span> &amp; <span className="highlight-keyword">Pumps</span>
          </h3>
          <p className="text-muted mx-auto mb-0" style={{ maxWidth: '700px' }}>
            We supply <strong className="text-dark">100% genuine ISI products</strong> at wholesale &amp; retail rates from world-class brands including <strong className="text-dark">Hikvision, CP Plus, Finolex, Crompton, and Legrand</strong> in {shop.city}.
          </p>
        </div>

        {/* Marquee Row 1 - Left to Right */}
        <div className="brand-marquee-container mb-3">
          <div className="brand-marquee-track brand-marquee-track-ltr">
            {[
              { name: 'HIKVISION', type: 'CCTV & Security', badge: 'bg-danger text-white' },
              { name: 'CP PLUS', type: 'CCTV Security', badge: 'bg-primary text-white' },
              { name: 'DAHUA', type: 'Smart Surveillance', badge: 'bg-info text-dark' },
              { name: 'TRUEVIEW', type: 'Wireless & PTZ', badge: 'bg-primary text-white' },
              { name: 'SECUREMAX', type: 'CCTV Power & Kits', badge: 'bg-dark text-white' },
              { name: 'CROMPTON', type: 'Fans & Pumps', badge: 'bg-success text-white' },
              { name: 'FINOLEX', type: 'Cables & Wires', badge: 'bg-warning text-dark' },
              { name: 'LEGRAND', type: 'Switchgear & DB', badge: 'bg-danger text-white' },
              { name: 'ATOMBERG', type: 'BLDC Smart Fans', badge: 'bg-secondary text-white' },
              { name: 'ORBIT', type: 'Wires & Pipes', badge: 'bg-success text-white' },
              { name: 'GM MODULAR', type: 'Switches', badge: 'bg-dark text-white' },
              { name: 'L&T', type: 'Industrial Switchgear', badge: 'bg-primary text-white' },
              // Duplicate for seamless infinite loop
              { name: 'HIKVISION', type: 'CCTV & Security', badge: 'bg-danger text-white' },
              { name: 'CP PLUS', type: 'CCTV Security', badge: 'bg-primary text-white' },
              { name: 'DAHUA', type: 'Smart Surveillance', badge: 'bg-info text-dark' },
              { name: 'TRUEVIEW', type: 'Wireless & PTZ', badge: 'bg-primary text-white' },
              { name: 'SECUREMAX', type: 'CCTV Power & Kits', badge: 'bg-dark text-white' },
              { name: 'CROMPTON', type: 'Fans & Pumps', badge: 'bg-success text-white' },
              { name: 'FINOLEX', type: 'Cables & Wires', badge: 'bg-warning text-dark' },
              { name: 'LEGRAND', type: 'Switchgear & DB', badge: 'bg-danger text-white' },
              { name: 'ATOMBERG', type: 'BLDC Smart Fans', badge: 'bg-secondary text-white' },
              { name: 'ORBIT', type: 'Wires & Pipes', badge: 'bg-success text-white' },
              { name: 'GM MODULAR', type: 'Switches', badge: 'bg-dark text-white' },
              { name: 'L&T', type: 'Industrial Switchgear', badge: 'bg-primary text-white' },
            ].map((brand, idx) => (
              <Link
                key={`r1-${idx}`}
                to={`/products?search=${encodeURIComponent(brand.name)}`}
                className="brand-card-item"
              >
                <span className="fw-bolder fs-6 text-dark tracking-wide">{brand.name}</span>
                <span className={`badge ${brand.badge} rounded-pill small`} style={{ fontSize: '0.68rem', padding: '0.35em 0.65em' }}>
                  {brand.type}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Left to Right */}
        <div className="brand-marquee-container">
          <div className="brand-marquee-track brand-marquee-track-ltr-slow">
            {[
              { name: 'ANCHOR', type: 'Electrical Goods', badge: 'bg-danger text-white' },
              { name: 'SUPREME', type: 'Pipes & Fittings', badge: 'bg-primary text-white' },
              { name: 'ASHIRVAD', type: 'CPVC Pipes & Fittings', badge: 'bg-danger text-white' },
              { name: 'TRUEFLOW', type: 'Plumbing & Pipes', badge: 'bg-info text-dark' },
              { name: 'WATERTEC', type: 'Taps & Bath Fittings', badge: 'bg-success text-white' },
              { name: 'LEO', type: 'Faucets & Taps', badge: 'bg-warning text-dark' },
              { name: 'TEXMO', type: 'Submersible Pumps', badge: 'bg-primary text-white' },
              { name: 'POLYCAB', type: 'Wires & Cables', badge: 'bg-danger text-white' },
              { name: 'PHILIPS', type: 'Lighting Solutions', badge: 'bg-primary text-white' },
              { name: 'LUMINOUS', type: 'Inverter, Battery & Solar', badge: 'bg-info text-dark' },
              { name: 'MICROTEK', type: 'Inverters & Stabilizers', badge: 'bg-success text-white' },
              { name: 'EVEREST', type: 'Voltage Stabilizers', badge: 'bg-warning text-dark' },
              // Duplicate for seamless infinite loop
              { name: 'ANCHOR', type: 'Electrical Goods', badge: 'bg-danger text-white' },
              { name: 'SUPREME', type: 'Pipes & Fittings', badge: 'bg-primary text-white' },
              { name: 'ASHIRVAD', type: 'CPVC Pipes & Fittings', badge: 'bg-danger text-white' },
              { name: 'TRUEFLOW', type: 'Plumbing & Pipes', badge: 'bg-info text-dark' },
              { name: 'WATERTEC', type: 'Taps & Bath Fittings', badge: 'bg-success text-white' },
              { name: 'LEO', type: 'Faucets & Taps', badge: 'bg-warning text-dark' },
              { name: 'TEXMO', type: 'Submersible Pumps', badge: 'bg-primary text-white' },
              { name: 'POLYCAB', type: 'Wires & Cables', badge: 'bg-danger text-white' },
              { name: 'PHILIPS', type: 'Lighting Solutions', badge: 'bg-primary text-white' },
              { name: 'LUMINOUS', type: 'Inverter, Battery & Solar', badge: 'bg-info text-dark' },
              { name: 'MICROTEK', type: 'Inverters & Stabilizers', badge: 'bg-success text-white' },
              { name: 'EVEREST', type: 'Voltage Stabilizers', badge: 'bg-warning text-dark' },
            ].map((brand, idx) => (
              <Link
                key={`r2-${idx}`}
                to={`/products?search=${encodeURIComponent(brand.name)}`}
                className="brand-card-item"
              >
                <span className="fw-bolder fs-6 text-dark tracking-wide">{brand.name}</span>
                <span className={`badge ${brand.badge} rounded-pill small`} style={{ fontSize: '0.68rem', padding: '0.35em 0.65em' }}>
                  {brand.type}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-6" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="text-uppercase tracking-wider small fw-bold mb-2 d-block" style={{ letterSpacing: '0.15em', color: 'var(--accent-orange)' }}>
              Ponneri's Most Trusted Contractor &amp; Retailer
            </span>
            <h3 className="fw-bolder display-5 mb-3" style={{ color: 'var(--text-heading)' }}>
              Why Choose <span style={{ color: 'var(--brand-blue)' }}>{shop.name}</span>
            </h3>
            <p className="mx-auto mb-0" style={{ maxWidth: '680px', color: 'var(--text-primary)' }}>
              Combining <strong style={{ color: 'var(--text-heading)' }}>100% genuine ISI electrical products</strong> with certified on-site engineering and emergency fault repairs.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-4 text-center"
          >
            {[
              { icon: 'bi-shield-check', title: 'ISI Certified Products', desc: '100% genuine electrical, cables, pumps & security hardware.' },
              { icon: 'bi-tools', title: 'Certified Electricians', desc: `Doorstep residential & industrial engineering in ${shop.city}.` },
              { icon: 'bi-geo-alt', title: 'Rapid Local Support', desc: `Serving ${shop.city}, Minjur, Kavaraipettai & Thiruvallur.` },
              { icon: 'bi-chat-dots', title: 'Wholesale & Retail', desc: 'Direct distributor prices via instant WhatsApp enquiry.' }
            ].map((feature, i) => (
              <motion.div variants={fadeUpVariant} key={i} className="col-6 col-md-3">
                <div className="mb-4 d-inline-block p-4 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-light)' }}>
                  <i className={`bi ${feature.icon} display-4`} style={{ color: 'var(--brand-blue)' }}></i>
                </div>
                <h5 className="fw-bold" style={{ color: 'var(--text-heading)' }}>{feature.title}</h5>
                <p className="small mb-0" style={{ color: 'var(--text-primary)' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill px-3 py-1.5 fw-semibold mb-3 shadow-sm" style={{ background: 'var(--bg-white)', color: 'var(--brand-blue)', border: '1px solid var(--border-light)' }}>
                ⭐ Local Electrical &amp; Security Experts
              </span>
              <h3 className="fw-bolder mb-4 display-6" style={{ color: 'var(--text-heading)' }}>
                About <span style={{ color: 'var(--brand-blue)' }}>{shop.name}</span>
              </h3>
              <p className="lead mb-4" style={{ color: 'var(--text-primary)' }}>
                We are your trusted local partner for <strong style={{ color: 'var(--text-heading)' }}>Licensed Electrical Contracting</strong> (<span style={{ color: 'var(--brand-blue)' }}>Electrical Service Available</span>), <strong style={{ color: 'var(--text-heading)' }}>HD CCTV Surveillance Systems</strong>, and <strong style={{ color: 'var(--text-heading)' }}>Borewell Submersible Pumps &amp; Plumbing</strong> in {shop.city}.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-4">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-patch-check-fill text-success fs-5"></i>
                  <span className="small fw-semibold" style={{ color: 'var(--text-heading)' }}>ISI Certified Materials</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-patch-check-fill text-success fs-5"></i>
                  <span className="small fw-semibold" style={{ color: 'var(--text-heading)' }}>Licensed Technicians</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-patch-check-fill text-success fs-5"></i>
                  <span className="small fw-semibold" style={{ color: 'var(--text-heading)' }}>Wholesale &amp; Retail</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary btn-lg rounded-pill px-5">
                Learn More About Us <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="col-lg-6">
              {currentOffers.length > 0 ? (
                <div className="card border-0" style={{ backgroundColor: 'var(--bg-white)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-soft)' }}>
                  <div className="card-body p-4 p-md-5">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h4 className="fw-bold mb-0" style={{ color: 'var(--brand-blue)' }}>
                        <i className="bi bi-tags-fill me-2" style={{ color: 'var(--accent-orange)' }}></i>Featured Offer
                      </h4>
                      <span className="badge rounded-pill bg-danger text-white px-3 py-1.5 fw-bold">
                        🔥 Mega Deal
                      </span>
                    </div>
                    {currentOffers.map(offer => (
                      <div key={offer.id} className="mb-4">
                        <div className="d-flex gap-3 align-items-center mb-3">
                          {offer.image && (
                            <img 
                              src={offer.image} 
                              alt={offer.title} 
                              className="rounded-3 shadow-sm flex-shrink-0"
                              style={{ width: '84px', height: '112px', objectFit: 'cover' }}
                            />
                          )}
                          <div className="flex-grow-1">
                            <span className="badge bg-primary-subtle text-primary small fw-semibold mb-1">
                              {offer.brand || 'Power Backup'}
                            </span>
                            <h5 className="fw-bold mb-1" style={{ color: 'var(--text-heading)' }}>{offer.title}</h5>
                            <p className="small mb-2 text-muted" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              {offer.subtitle || offer.description}
                            </p>
                            {offer.offerPrice && (
                              <div className="d-flex align-items-baseline gap-2 flex-wrap">
                                <span className="fs-5 fw-extrabold text-danger" style={{ fontWeight: 800 }}>
                                  ₹{offer.offerPrice.toLocaleString('en-IN')}/-
                                </span>
                                {offer.mrp && (
                                  <span className="small text-muted text-decoration-line-through">
                                    ₹{offer.mrp.toLocaleString('en-IN')}
                                  </span>
                                )}
                                {offer.savings && (
                                  <span className="badge bg-success-subtle text-success small fw-bold">
                                    Save ₹{offer.savings.toLocaleString('en-IN')}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex gap-2 flex-wrap pt-2 border-top" style={{ borderColor: 'var(--border-light)' }}>
                      <Link to="/offers" className="btn btn-primary rounded-pill px-4 py-2 flex-grow-1 text-center fw-semibold">
                        View Offer Details <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                      <a 
                        href={`https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(`Hi ${shop.name}, I want to claim the ${currentOffers[0]?.title} offer!`)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-success rounded-pill px-4 py-2 fw-semibold d-flex align-items-center justify-content-center gap-1.5"
                        style={{ backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
                      >
                        <i className="bi bi-whatsapp"></i> Claim Deal
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card border-0" style={{ backgroundColor: 'var(--bg-white)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-soft)' }}>
                  <div className="card-body p-4 p-md-5">
                    <h4 className="fw-bold mb-3" style={{ color: 'var(--brand-blue)' }}>
                      <i className="bi bi-shop me-2" style={{ color: 'var(--accent-orange)' }}></i>Visit Our Store
                    </h4>
                    <p className="mb-4" style={{ color: 'var(--text-primary)' }}>
                      Looking for wholesale rates, contractor quotations, or electrical &amp; plumbing materials? Visit our showroom in {shop.city} or reach out directly.
                    </p>
                    <div className="mb-3 d-flex justify-content-between align-items-center pb-2 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
                      <span className="text-muted small">Monday – Saturday</span>
                      <span className="fw-semibold text-dark small">{shop.openingHours.monday}</span>
                    </div>
                    <div className="mb-4 d-flex justify-content-between align-items-center pb-2 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
                      <span className="text-muted small">Sunday</span>
                      <span className="fw-semibold text-dark small">{shop.openingHours.sunday}</span>
                    </div>
                    <div className="d-flex gap-2">
                      <a 
                        href={`https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(`Hi ${shop.name}, I would like to inquire about pricing and product availability.`)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-success rounded-pill px-4 py-2 fw-semibold flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                        style={{ backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
                      >
                        <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                      </a>
                      <a 
                        href={shop.googleMapsUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-primary rounded-pill px-3 py-2 fw-semibold d-flex align-items-center justify-content-center"
                        title="Get Directions"
                      >
                        <i className="bi bi-geo-alt-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* SEO Frequently Asked Questions Section */}
      <Section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-uppercase tracking-wider small fw-bold text-accent mb-2 d-block" style={{ letterSpacing: '0.15em' }}>
              Clear Answers &amp; Local Guidance
            </span>
            <h3 className="fw-bolder text-primary-theme mb-3 display-6">
              Frequently Asked Questions in <span className="highlight-keyword">{shop.city}</span>
            </h3>
            <p className="text-muted mx-auto mb-0" style={{ maxWidth: '650px' }}>
              Find quick answers regarding our electrical contracting, CCTV surveillance installations, and borewell motor services.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion faq-accordion" id="homeFaqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="false" aria-controls="faqCollapseOne">
                      <i className="bi bi-question-circle-fill text-accent me-2"></i>
                      What electrical contractor &amp; wiring services do you provide in Ponneri?
                    </button>
                  </h2>
                  <div id="faqCollapseOne" className="accordion-collapse collapse" aria-labelledby="faqHeadingOne" data-bs-parent="#homeFaqAccordion">
                    <div className="accordion-body text-muted lh-base">
                      We offer complete residential, commercial, and industrial electrical contracting across Ponneri. This includes conduit house wiring, three-phase distribution board (DB) installations, MCB trip troubleshooting, short-circuit diagnostics, inverter &amp; battery setup, and emergency fault repairs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
                      <i className="bi bi-camera-video-fill text-danger me-2"></i>
                      Do you supply and install CCTV security cameras for homes and businesses?
                    </button>
                  </h2>
                  <div id="faqCollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#homeFaqAccordion">
                    <div className="accordion-body text-muted lh-base">
                      Yes! We are authorized dealers for top surveillance brands including <strong>Hikvision, CP Plus, Dahua, and Trueview</strong>. We provide end-to-end setup including HD night-vision cameras, multi-channel DVR/NVR recorders, hard drive storage, cabling, and live mobile phone streaming configuration.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
                      <i className="bi bi-droplet-half text-primary me-2"></i>
                      Can I buy submersible borewell pumps with installation support?
                    </button>
                  </h2>
                  <div id="faqCollapseThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#homeFaqAccordion">
                    <div className="accordion-body text-muted lh-base">
                      Yes, we stock high-efficiency submersible borewell motors, jet pumps, and pressure pumps from trusted brands like <strong>Crompton</strong>. Our experienced pump mechanics handle motor lowering, control panel wiring, and heavy-duty CPVC/UPVC delivery pipelines.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFour" aria-expanded="false" aria-controls="faqCollapseFour">
                      <i className="bi bi-whatsapp text-success me-2"></i>
                      How quickly can an electrician or plumber visit my location in Ponneri?
                    </button>
                  </h2>
                  <div id="faqCollapseFour" className="accordion-collapse collapse" aria-labelledby="faqHeadingFour" data-bs-parent="#homeFaqAccordion">
                    <div className="accordion-body text-muted lh-base">
                      Our certified electricians and plumbing technicians offer prompt doorstep service throughout Ponneri, Minjur, Kavaraipettai, and nearby areas. For emergency breakdowns or scheduled wiring, simply message us on WhatsApp or call <strong>+91 9940574439</strong> for immediate response.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <h3 className="fw-bolder text-primary-theme text-center mb-5 display-6">Visit Our Shop</h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-4 align-items-stretch"
          >
            <motion.div variants={fadeUpVariant} className="col-12 col-md-6 col-lg-4">
              <BusinessInfo />
            </motion.div>
            <motion.div variants={fadeUpVariant} className="col-12 col-md-6 col-lg-4">
              <OpeningHours />
            </motion.div>
            <motion.div variants={fadeUpVariant} className="col-12 col-md-12 col-lg-4">
              <GoogleMap />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <Section className="text-center pb-5 pb-md-6">
        <div className="container p-4 p-sm-5 rounded-4 shadow-sm" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}>
          <h2 className="fw-bolder mb-2 mb-md-3 display-6 home-cta-heading" style={{ color: 'var(--text-heading)' }}>{bottomCta.heading}</h2>
          <p className="mb-4 mx-auto home-cta-desc fs-6" style={{ color: 'var(--text-primary)', maxWidth: '640px' }}>{bottomCta.desc}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href={bottomCta.waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-success rounded-pill shadow-sm fw-bold home-cta-btn" 
              style={{ background: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
            >
              <i className="bi bi-whatsapp me-2"></i> {bottomCta.btnText}
            </a>
            <a 
              href={getCallUrl()} 
              className="btn btn-primary rounded-pill fw-bold home-cta-btn"
              style={{ background: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}
            >
              <i className="bi bi-telephone-fill me-2"></i> {bottomCta.callText}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
