import React from 'react';
import { shop } from '../data/shop';

const GoogleMap = () => {
  const embedUrl = `https://maps.google.com/maps?q=${shop.latitude},${shop.longitude}&hl=en&z=17&output=embed`;

  return (
    <div 
      className="card google-map-card overflow-hidden h-100 d-flex flex-column"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderColor: 'var(--border-light)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      <div className="position-relative w-100" style={{ height: '170px', minHeight: '170px', backgroundColor: '#e5e3df' }}>
        <iframe
          title="Store Location on Google Maps"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div 
        className="w-100 d-flex flex-column align-items-center justify-content-between p-3 p-xl-3 text-center flex-grow-1" 
        style={{ backgroundColor: 'var(--bg-white)' }}
      >
        <div>
          <div className="d-flex align-items-center justify-content-center gap-1 mb-1">
            <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
            <h5 className="fw-bold mb-0 fs-6" style={{ color: 'var(--text-heading)' }}>Find Us on Google Maps</h5>
          </div>
          <p className="small mb-2 lh-base" style={{ maxWidth: '280px', color: 'var(--text-primary)', margin: '0 auto', fontSize: '0.82rem' }}>
            {shop.address}
          </p>
        </div>
        <a 
          href={shop.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary rounded-pill px-4 py-2 small fw-semibold shadow-sm w-100 mt-2"
          style={{ backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)', maxWidth: '220px' }}
        >
          <i className="bi bi-box-arrow-up-right me-2"></i> Get Directions
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
