import React from 'react';
import { shop } from '../data/shop';

const GoogleMap = () => {
  return (
    <div 
      className="card google-map-card overflow-hidden h-100"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderColor: 'var(--border-light)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      <div 
        className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-3 p-xl-4 text-center" 
        style={{ minHeight: '260px', backgroundColor: 'var(--bg-white)' }}
      >
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
          style={{ width: '64px', height: '64px', backgroundColor: 'var(--bg-primary)' }}
        >
          <i className="bi bi-geo-alt-fill fs-2" style={{ color: 'var(--accent-orange)' }}></i>
        </div>
        <h5 className="fw-bold mb-2 fs-5" style={{ color: 'var(--text-heading)' }}>Find Us on Google Maps</h5>
        <p className="small mb-3 lh-base" style={{ maxWidth: '280px', color: 'var(--text-primary)' }}>{shop.address}</p>
        <a 
          href={shop.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary rounded-pill px-4 py-2 small fw-semibold shadow-sm"
          style={{ backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}
        >
          <i className="bi bi-box-arrow-up-right me-2"></i> Get Directions
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
