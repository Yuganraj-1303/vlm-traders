import React, { useState } from 'react';
import SEO from '../components/SEO';
import { shop } from '../data/shop';
import { offers } from '../data/offers';
import { getOfferEnquiry } from '../utils/whatsapp';

const Offers = () => {
  const [activePoster, setActivePoster] = useState(null);

  return (
    <>
      <SEO 
        title={`Latest Offers & Discounts | ${shop.name}`}
        description={`Check out the latest offers, discounts, and deals on electrical and power backup products at ${shop.name} in ${shop.city}.`}
        url={`${window.location.origin}/offers`}
      />

      {/* Header Banner */}
      <div className="py-4" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <span className="badge rounded-pill px-3 py-1.5 fw-semibold mb-2" style={{ backgroundColor: 'var(--accent-orange)', color: '#FFFFFF' }}>
                🔥 Exclusive Mega Deals
              </span>
              <h1 className="fw-bold mb-0" style={{ color: 'var(--text-heading)' }}>Special Offers</h1>
            </div>
            <p className="text-muted mb-0 small">
              Authorized Dealer • Genuine Products • Doorstep Service in {shop.city}
            </p>
          </div>
        </div>
      </div>

      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '60vh' }}>
        <div className="container">
          {offers.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-tag opacity-50 mb-3" style={{ fontSize: '3rem', color: 'var(--text-muted)' }}></i>
              <h4 className="fw-bold" style={{ color: 'var(--text-heading)' }}>No active offers</h4>
              <p style={{ color: 'var(--text-primary)' }}>Please check back later for new deals and discounts.</p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-5">
              {offers.map(offer => (
                <div 
                  key={offer.id} 
                  className="card border-0 shadow-sm overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-white)',
                    borderColor: 'var(--border-light)',
                    borderRadius: '1.25rem',
                    boxShadow: 'var(--shadow-soft)'
                  }}
                >
                  <div className="row g-0">
                    {/* Offer Poster Column */}
                    {offer.image && (
                      <div className="col-lg-5 col-xl-4 bg-dark d-flex align-items-center justify-content-center p-3 p-md-4 position-relative">
                        <div 
                          className="position-relative overflow-hidden rounded-3 shadow cursor-pointer group text-center"
                          style={{ cursor: 'pointer', maxWidth: '380px' }}
                          onClick={() => setActivePoster(offer.image)}
                          title="Click to view full poster"
                        >
                          <img 
                            src={offer.image} 
                            alt={offer.title} 
                            className="img-fluid rounded-3"
                            style={{ maxHeight: '520px', objectFit: 'contain', transition: 'transform 0.3s ease' }}
                          />
                          <div 
                            className="position-absolute bottom-0 start-0 end-0 py-2 px-3 text-white d-flex align-items-center justify-content-center gap-2"
                            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
                          >
                            <i className="bi bi-zoom-in"></i>
                            <span className="small fw-semibold">Click to enlarge poster</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Offer Details Column */}
                    <div className={offer.image ? "col-lg-7 col-xl-8" : "col-12"}>
                      <div className="card-body p-4 p-md-5 d-flex flex-column h-100">
                        {/* Top Badges */}
                        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                          {offer.badge && (
                            <span 
                              className="badge rounded-pill px-3 py-1.5 fw-bold"
                              style={{ backgroundColor: 'var(--accent-orange)', color: '#FFFFFF' }}
                            >
                              ⭐ {offer.badge}
                            </span>
                          )}
                          {offer.brand && (
                            <span className="badge rounded-pill bg-primary px-3 py-1.5 fw-semibold">
                              {offer.brand}
                            </span>
                          )}
                          {offer.validity && (
                            <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-1.5 fw-semibold border border-danger-subtle">
                              <i className="bi bi-clock-history me-1"></i> {offer.validity}
                            </span>
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <h2 className="fw-bolder mb-2" style={{ color: 'var(--text-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                          {offer.title}
                        </h2>
                        {offer.subtitle && (
                          <h6 className="fw-semibold mb-3" style={{ color: 'var(--brand-blue)' }}>
                            {offer.subtitle}
                          </h6>
                        )}

                        {/* Pricing Callout Banner */}
                        {offer.offerPrice && (
                          <div 
                            className="p-3 p-md-4 rounded-4 mb-4"
                            style={{ 
                              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(249, 115, 22, 0.12) 100%)',
                              border: '1px solid rgba(239, 68, 68, 0.2)'
                            }}
                          >
                            <div className="d-flex flex-wrap align-items-baseline gap-3">
                              <div>
                                <span className="small text-uppercase fw-bold text-muted d-block">Special Offer Price</span>
                                <span className="display-6 fw-extrabold text-danger" style={{ fontWeight: 800 }}>
                                  ₹{offer.offerPrice.toLocaleString('en-IN')}/-
                                </span>
                                <span className="text-danger fw-bold ms-1">ONLY</span>
                              </div>

                              {offer.mrp && (
                                <div className="ms-md-2">
                                  <span className="small text-uppercase fw-bold text-muted d-block">Original MRP</span>
                                  <span className="fs-5 text-muted text-decoration-line-through">
                                    ₹{offer.mrp.toLocaleString('en-IN')}
                                  </span>
                                </div>
                              )}

                              {offer.savings && (
                                <div className="ms-auto">
                                  <span className="badge rounded-pill bg-success px-3 py-2 fs-6 fw-bold shadow-sm">
                                    SAVE ₹{offer.savings.toLocaleString('en-IN')}! ({offer.discountPercentage}% OFF)
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Description */}
                        <p className="lead fs-6 mb-4" style={{ color: 'var(--text-primary)' }}>
                          {offer.description}
                        </p>

                        {/* Key Highlights Grid */}
                        {offer.keyHighlights && offer.keyHighlights.length > 0 && (
                          <div className="mb-4">
                            <h6 className="fw-bold mb-3" style={{ color: 'var(--text-heading)' }}>
                              <i className="bi bi-check-circle-fill text-success me-2"></i>Key Specifications &amp; Features:
                            </h6>
                            <div className="row g-2">
                              {offer.keyHighlights.map((feat, idx) => (
                                <div key={idx} className="col-sm-6">
                                  <div 
                                    className="p-2.5 rounded-3 d-flex align-items-center gap-2 h-100"
                                    style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}
                                  >
                                    <i className="bi bi-lightning-charge-fill text-warning flex-shrink-0"></i>
                                    <span className="small fw-semibold" style={{ color: 'var(--text-heading)' }}>{feat}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Actions & Enquiry */}
                        <div className="mt-auto pt-3 border-top" style={{ borderColor: 'var(--border-light)' }}>
                          <div className="d-flex flex-wrap gap-2 align-items-center">
                            <a 
                              href={getOfferEnquiry(offer.title)} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-success btn-lg rounded-pill px-4 fw-bold d-flex align-items-center justify-content-center gap-2 flex-grow-1"
                              style={{ backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
                            >
                              <i className="bi bi-whatsapp fs-5"></i> Enquire / Claim Deal Now
                            </a>
                            
                            {offer.phones && offer.phones.length > 0 && (
                              <div className="d-flex gap-2 flex-wrap">
                                {offer.phones.map((phone, pIdx) => (
                                  <a 
                                    key={pIdx}
                                    href={`tel:+91${phone}`} 
                                    className="btn btn-outline-primary rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-1.5"
                                  >
                                    <i className="bi bi-telephone-fill"></i> {phone}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="mt-3 text-muted small d-flex align-items-center gap-3 flex-wrap">
                            <span><i className="bi bi-geo-alt-fill text-danger me-1"></i> Available at {offer.location || shop.address}</span>
                            <span><i className="bi bi-shield-check text-success me-1"></i> 100% Genuine Brand Warranty</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Poster Modal */}
      {activePoster && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.85)', 
            backdropFilter: 'blur(8px)',
            zIndex: 9999 
          }}
          onClick={() => setActivePoster(null)}
        >
          <div className="position-relative text-center" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
            <button 
              type="button" 
              className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow"
              style={{ width: '42px', height: '42px', zIndex: 10000 }}
              onClick={() => setActivePoster(null)}
              aria-label="Close poster preview"
            >
              <i className="bi bi-x-lg fw-bold"></i>
            </button>
            <img 
              src={activePoster} 
              alt="Offer Poster Full View" 
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: '85vh', objectFit: 'contain' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Offers;
