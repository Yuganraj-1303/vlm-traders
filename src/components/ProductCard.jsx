import React from 'react';
import { Link } from 'react-router-dom';
import { getProductEnquiry } from '../utils/whatsapp';
import { getAssetUrl } from '../utils/assets';

const ProductCard = ({ product }) => {
  return (
    <div 
      className="card h-100 product-card"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderColor: 'var(--border-light)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      <div 
        className="product-img-wrapper position-relative"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        {product.image ? (
          <img src={getAssetUrl(product.image)} alt={product.name} className="w-100 h-100 object-fit-contain p-2 p-sm-3" />
        ) : (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <i className="bi bi-box-seam opacity-50" style={{ fontSize: '3rem', color: 'var(--brand-navy)' }}></i>
          </div>
        )}
        {product.featured && (
          <span 
            className="badge position-absolute top-0 start-0 m-2 m-sm-3 shadow-sm rounded-pill px-2 py-1 px-sm-3 py-sm-2 product-badge fw-bold"
            style={{ backgroundColor: 'var(--accent-orange)', color: '#FFFFFF' }}
          >
            Featured
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column p-3 p-md-4 product-card-body">
        <span 
          className="product-category-tag mb-1 mb-sm-2 text-uppercase tracking-wide fw-semibold" 
          style={{ letterSpacing: '0.08em', color: 'var(--text-secondary)' }}
        >
          {product.category}
        </span>
        <h5 
          className="card-title fw-bold mb-1 mb-sm-2 product-card-title"
          style={{ color: 'var(--text-heading)' }}
        >
          {product.name}
        </h5>
        <p 
          className="card-text small flex-grow-1 product-card-desc mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {product.shortDescription}
        </p>
        <div className="mt-auto pt-2 pt-sm-3 border-top" style={{ borderColor: 'var(--border-light) !important' }}>
          <p 
            className="fw-bold mb-2 product-price-text"
            style={{ color: 'var(--brand-blue)' }}
          >
            <span>Contact for Price</span><span className="d-none d-sm-inline"> &amp; Availability</span>
          </p>
          <div className="d-flex gap-1 gap-sm-2">
            <Link 
              to={`/products/${product.slug}`} 
              className="btn btn-outline-primary btn-sm flex-grow-1 rounded-pill py-1.5 py-sm-2 px-1 px-sm-2 product-card-btn"
            >
              Details
            </Link>
            <a 
              href={getProductEnquiry(product.name)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm flex-grow-1 rounded-pill d-flex align-items-center justify-content-center py-1.5 py-sm-2 px-1 px-sm-2 product-card-btn fw-bold"
              style={{ backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}
            >
              <i className="bi bi-whatsapp me-1"></i> Ask
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
