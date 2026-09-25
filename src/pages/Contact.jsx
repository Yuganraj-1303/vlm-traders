import React from 'react';
import SEO from '../components/SEO';
import BusinessInfo from '../components/BusinessInfo';
import OpeningHours from '../components/OpeningHours';
import GoogleMap from '../components/GoogleMap';
import ContactButtons from '../components/ContactButtons';
import { shop } from '../data/shop';
import { getDefaultEnquiry } from '../utils/whatsapp';
import { getEmailUrl } from '../utils/phone';

const Contact = () => {
  return (
    <>
      <SEO 
        title={`Contact ${shop.name} | Electrician & CCTV in ${shop.city}`}
        description={`Get in touch with ${shop.name} for certified electrical contractor services, CCTV camera installation, and submersible pumps in ${shop.city}. Call or WhatsApp now.`}
        keywords={`Contact electrician Ponneri, CCTV camera installation Ponneri, Electrical contractor Ponneri, VLM Traders phone number`}
        url={`${window.location.origin}/contact`}
      />

      {/* Hero Showcase with Pointing Electrician */}
      <section className="py-4 py-lg-5 border-bottom position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left: Smiling Electrician pointing to the contact details on the right */}
            <div className="col-12 col-md-5 col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                <img 
                  src="/images/electrician_pointing.jpg" 
                  alt="Certified Electrician Directing to Contact Details" 
                  className="img-fluid rounded-4"
                  style={{ 
                    maxHeight: '380px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.08))'
                  }}
                />
                {/* Helpful Floating Badge */}
                <div 
                  className="position-absolute bg-white rounded-pill px-3 py-1 shadow-sm border small fw-bold d-flex align-items-center gap-2 text-dark"
                  style={{ bottom: '15px', left: '10px', fontSize: '0.78rem' }}
                >
                  <i className="bi bi-patch-check-fill text-success"></i>
                  <span>Certified Electrician Support</span>
                </div>
              </div>
            </div>

            {/* Right: Pointed At - Contact Headline, Description & Contact Buttons */}
            {/* Right: Pointed At - Contact Headline, Description & Contact Buttons */}
            <div className="col-12 col-md-7 col-lg-8">
              <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                <span className="badge px-3 py-1.5 rounded-pill fw-bold shadow-sm" style={{ backgroundColor: 'var(--accent-orange)', color: '#FFFFFF' }}>
                  ⚡ Doorstep Service &amp; Direct Support
                </span>
                <span className="badge rounded-pill px-3 py-1.5 small fw-semibold shadow-sm" style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}>
                  <i className="bi bi-geo-alt-fill me-1" style={{ color: 'var(--brand-blue)' }}></i>Serving {shop.city} &amp; Nearby Areas
                </span>
              </div>
              <h1 className="fw-bolder mb-2 display-6" style={{ letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>
                Get in Touch with Our <span style={{ color: 'var(--brand-blue)' }}>Certified Specialists</span>
              </h1>
              <p className="lead mb-3" style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Need <strong style={{ color: 'var(--text-heading)' }}>emergency electrical fault repairs</strong>, <strong style={{ color: 'var(--text-heading)' }}>submersible pump fittings</strong>, or <strong style={{ color: 'var(--text-heading)' }}>CCTV security installation</strong> in {shop.city}? Message our team on WhatsApp or call directly for immediate assistance.
              </p>
              <p className="mb-4 lead fs-6" style={{ maxWidth: '620px', color: 'var(--text-secondary)' }}>
                Need help with house wiring, switch replacements, pump fitting, or security cameras? Connect directly with our team for instant quotes, wholesale pricing, or certified doorstep service.
              </p>

              {/* Contact Action Buttons */}
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Detail Cards Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-md-6 col-lg-4">
              <BusinessInfo />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <OpeningHours />
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-center" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <h3 className="fw-bold mb-3" style={{ color: 'var(--text-heading)' }}>Send us an Enquiry</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '640px', color: 'var(--text-primary)' }}>We do not use complicated forms. Simply click the button below to send us a direct message on WhatsApp with your requirements.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
             <a 
               href={getDefaultEnquiry()} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-success btn-lg rounded-pill px-4 fw-bold"
               style={{ backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
             >
                <i className="bi bi-whatsapp me-2"></i> Message on WhatsApp
             </a>
             <a 
               href={getEmailUrl()} 
               className="btn btn-primary btn-lg rounded-pill px-4 fw-bold"
               style={{ backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}
             >
                <i className="bi bi-envelope me-2"></i> Send Email
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
