import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { shop } from '../data/shop';

const NotFound = () => {
  return (
    <>
      <SEO 
        title={`Page Not Found | ${shop.name}`}
        description="The page you are looking for does not exist."
        url={`${window.location.origin}/404`}
      />
      <div className="py-5 text-center flex-grow-1 d-flex align-items-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <i className="bi bi-exclamation-triangle mb-4" style={{ fontSize: '5rem', color: 'var(--accent-orange)' }}></i>
          <h1 className="display-1 fw-bold" style={{ color: 'var(--brand-blue)' }}>404</h1>
          <h3 className="mb-4" style={{ color: 'var(--text-heading)' }}>Page Not Found</h3>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '580px', color: 'var(--text-primary)' }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/" className="btn btn-primary btn-lg rounded-pill px-4 fw-bold">
              <i className="bi bi-house-door me-2"></i> Home
            </Link>
            <Link to="/products" className="btn btn-outline-primary btn-lg rounded-pill px-4 fw-bold">
              <i className="bi bi-box-seam me-2"></i> View Products
            </Link>
            <Link to="/contact" className="btn btn-outline-primary btn-lg rounded-pill px-4 fw-bold">
              <i className="bi bi-envelope me-2"></i> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
