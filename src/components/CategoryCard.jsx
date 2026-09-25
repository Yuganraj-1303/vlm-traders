import React from 'react';
import { Link } from 'react-router-dom';
import { DOMAINS } from '../context/ThemeContext';

const CategoryCard = ({ category, activeDomain = DOMAINS.ALL }) => {
  const isMatching = 
    activeDomain === DOMAINS.ALL ||
    (activeDomain === DOMAINS.ELECTRICAL && (category.slug === 'electrical-electronics' || category.slug === 'inverter-battery-solar')) ||
    (activeDomain === DOMAINS.PUMPS && category.slug === 'plumbing-services') ||
    (activeDomain === DOMAINS.CCTV && category.slug === 'cctv-surveillance');

  return (
    <Link to={`/products?category=${category.slug}`} className="text-decoration-none">
      <div 
        className="card h-100 hover-lift overflow-hidden position-relative"
        style={{
          backgroundColor: 'var(--bg-white)',
          borderColor: isMatching && activeDomain !== DOMAINS.ALL ? 'var(--primary-color)' : 'var(--border-light)',
          borderWidth: isMatching && activeDomain !== DOMAINS.ALL ? '2px' : '1px',
          boxShadow: isMatching && activeDomain !== DOMAINS.ALL ? '0 10px 30px var(--accent-glow)' : 'var(--shadow-soft)',
          transition: 'all 0.3s ease'
        }}
      >
        {isMatching && activeDomain !== DOMAINS.ALL ? (
          <span 
            className="badge position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill shadow-sm fw-bold d-flex align-items-center gap-1"
            style={{ 
              zIndex: 3, 
              fontSize: '0.75rem',
              backgroundColor: 'var(--primary-color)',
              color: '#FFFFFF'
            }}
          >
            <i className="bi bi-check-circle-fill"></i> Selected Division
          </span>
        ) : category.badge ? (
          <span 
            className="badge position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill shadow-sm fw-bold d-flex align-items-center gap-1"
            style={{ 
              zIndex: 3, 
              fontSize: '0.75rem',
              backgroundColor: 'var(--accent-orange)',
              color: '#FFFFFF'
            }}
          >
            <i className="bi bi-tools"></i> {category.badge}
          </span>
        ) : null}
        <div className="category-img-wrapper position-relative" style={{ height: '180px', backgroundColor: 'var(--bg-secondary)' }}>
          {category.image ? (
            <img src={category.image} alt={category.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
          ) : (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <i className={`bi ${category.icon} display-4`} style={{ color: 'var(--brand-blue)' }}></i>
            </div>
          )}
        </div>
        <div className="card-body text-center p-4 d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bolder mb-2 tracking-wide" style={{ color: 'var(--text-heading)' }}>{category.name}</h5>
            {category.description && (
              <p className="small mb-0 line-clamp-2" style={{ color: 'var(--text-primary)' }}>{category.description}</p>
            )}
          </div>
          <div className="mt-3">
            <span className="btn btn-outline-primary btn-sm rounded-pill px-4">
              Explore Products &amp; Services <i className="bi bi-arrow-right ms-1"></i>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
