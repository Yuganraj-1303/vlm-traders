import React from 'react';
import { shop } from '../data/shop';
import { getCallUrl, getEmailUrl } from '../utils/phone';

const BusinessInfo = () => {
  return (
    <div 
      className="card business-info-card h-100"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderColor: 'var(--border-light)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      <div className="card-body p-3 p-xl-4 d-flex flex-column">
        <div className="d-flex align-items-center mb-3 mb-md-4">
          <i className="bi bi-info-circle-fill fs-4 me-3" style={{ color: 'var(--accent-orange)' }}></i>
          <h4 className="fw-bold mb-0 fs-5" style={{ color: 'var(--text-heading)' }}>Contact Information</h4>
        </div>
        <ul className="list-unstyled mb-0 flex-grow-1 d-flex flex-column justify-content-between">
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-geo-alt-fill fs-5 me-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-orange)', width: '20px' }}></i>
            <div>
              <h6 className="fw-bold mb-1 small" style={{ color: 'var(--text-heading)' }}>Address</h6>
              <p className="mb-0 small lh-base" style={{ color: 'var(--text-primary)' }}>{shop.address}</p>
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-telephone-fill fs-5 me-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-orange)', width: '20px' }}></i>
            <div>
              <h6 className="fw-bold mb-1 small" style={{ color: 'var(--text-heading)' }}>Phone</h6>
              <a 
                href={getCallUrl()} 
                className="contact-link text-decoration-none small fw-semibold"
                style={{ color: 'var(--brand-blue)' }}
              >
                {shop.phone}
              </a>
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-whatsapp fs-5 me-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-orange)', width: '20px' }}></i>
            <div>
              <h6 className="fw-bold mb-1 small" style={{ color: 'var(--text-heading)' }}>WhatsApp</h6>
              <a 
                href={`https://wa.me/${shop.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link text-decoration-none small fw-semibold"
                style={{ color: 'var(--brand-blue)' }}
              >
                +{shop.whatsapp}
              </a>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <i className="bi bi-envelope-fill fs-5 me-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-orange)', width: '20px' }}></i>
            <div>
              <h6 className="fw-bold mb-1 small" style={{ color: 'var(--text-heading)' }}>Email</h6>
              <a 
                href={getEmailUrl()} 
                className="contact-link text-decoration-none small text-break fw-semibold"
                style={{ color: 'var(--brand-blue)' }}
              >
                {shop.email}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessInfo;
