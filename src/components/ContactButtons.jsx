import React from 'react';
import { shop } from '../data/shop';
import { getCallUrl, getEmailUrl } from '../utils/phone';
import { getDefaultEnquiry } from '../utils/whatsapp';

const ContactButtons = () => {
  return (
    <div className="row g-3">
      <div className="col-6 col-md-3">
        <a 
          href={getCallUrl()} 
          className="card h-100 text-center text-decoration-none hover-lift"
          style={{
            backgroundColor: 'var(--bg-white)',
            borderColor: 'var(--border-light)',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <div className="card-body py-4">
            <i className="bi bi-telephone-fill fs-1 mb-3" style={{ color: 'var(--brand-blue)' }}></i>
            <h6 className="card-title mb-0 fw-bold" style={{ color: 'var(--text-heading)' }}>Call Us</h6>
          </div>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a 
          href={getDefaultEnquiry()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card h-100 text-center text-decoration-none hover-lift"
          style={{
            backgroundColor: 'var(--bg-white)',
            borderColor: 'var(--border-light)',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <div className="card-body py-4">
            <i className="bi bi-whatsapp fs-1 mb-3" style={{ color: 'var(--accent-green)' }}></i>
            <h6 className="card-title mb-0 fw-bold" style={{ color: 'var(--text-heading)' }}>WhatsApp</h6>
          </div>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a 
          href={getEmailUrl()} 
          className="card h-100 text-center text-decoration-none hover-lift"
          style={{
            backgroundColor: 'var(--bg-white)',
            borderColor: 'var(--border-light)',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <div className="card-body py-4">
            <i className="bi bi-envelope-fill fs-1 mb-3" style={{ color: 'var(--accent-orange)' }}></i>
            <h6 className="card-title mb-0 fw-bold" style={{ color: 'var(--text-heading)' }}>Email</h6>
          </div>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a 
          href={shop.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card h-100 text-center text-decoration-none hover-lift"
          style={{
            backgroundColor: 'var(--bg-white)',
            borderColor: 'var(--border-light)',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <div className="card-body py-4">
            <i className="bi bi-geo-alt-fill fs-1 mb-3" style={{ color: 'var(--brand-blue)' }}></i>
            <h6 className="card-title mb-0 fw-bold" style={{ color: 'var(--text-heading)' }}>Directions</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;
