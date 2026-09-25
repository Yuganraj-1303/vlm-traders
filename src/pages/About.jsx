import React from 'react';
import SEO from '../components/SEO';
import BusinessInfo from '../components/BusinessInfo';
import OpeningHours from '../components/OpeningHours';
import GoogleMap from '../components/GoogleMap';
import { shop } from '../data/shop';
import { getAssetUrl } from '../utils/assets';

const About = () => {
  return (
    <>
      <SEO 
        title={`About ${shop.name} | Licensed Electrician & CCTV in ${shop.city}`}
        description={`Learn more about ${shop.name}, your trusted electrical contractor and CCTV dealer in ${shop.city} serving domestic, commercial, and industrial clients.`}
        keywords={`About VLM Traders & Services Ponneri, VLM Traders Ponneri, Electrical Contractor Ponneri, CCTV camera installation Ponneri, Submersible pump dealer Ponneri, Electrician in Ponneri`}
        url={`${window.location.origin}/about`}
      />

      <div className="py-4" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <h1 className="fw-bold mb-0" style={{ color: 'var(--text-heading)' }}>About Us</h1>
        </div>
      </div>

      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4" style={{ color: 'var(--text-heading)' }}>
                Welcome to <span style={{ color: 'var(--brand-blue)' }}>{shop.name}</span>
              </h2>
              <p className="lead mb-4" style={{ color: 'var(--text-primary)' }}>
                We are your trusted partner for <strong style={{ color: 'var(--text-heading)' }}>Electrical Contracting &amp; Wiring</strong> (<span style={{ color: 'var(--brand-blue)' }}>Doorstep Electrician Available</span>), <strong style={{ color: 'var(--text-heading)' }}>Smart CCTV Surveillance</strong>, and <strong style={{ color: 'var(--text-heading)' }}>Borewell Pumps &amp; Plumbing Services</strong> in {shop.city}. We cater to industrial, domestic, wholesale, and retail needs across Thiruvallur district.
              </p>
              
              <div 
                className="p-4 rounded-4 mb-4 border-start border-4 shadow-sm"
                style={{ 
                  backgroundColor: 'var(--bg-primary)', 
                  borderLeftColor: 'var(--accent-orange) !important',
                  border: '1px solid var(--border-light)'
                }}
              >
                <p className="mb-0 fw-medium" style={{ color: 'var(--text-heading)' }}>
                  "Our mission is to provide high-quality electrical products at reasonable prices, ensuring safety and satisfaction for every customer in {shop.city}."
                </p>
              </div>
              
              <h5 className="fw-bold mb-3" style={{ color: 'var(--text-heading)' }}>Why Shop With Us?</h5>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ color: 'var(--text-primary)' }}>
                <li className="d-flex align-items-center"><i className="bi bi-patch-check-fill text-success me-2"></i> Wide range of electrical, plumbing &amp; CCTV products</li>
                <li className="d-flex align-items-center"><i className="bi bi-patch-check-fill text-success me-2"></i> Genuine brands and quality assurance</li>
                <li className="d-flex align-items-center"><i className="bi bi-patch-check-fill text-success me-2"></i> Competitive local pricing</li>
                <li className="d-flex align-items-center"><i className="bi bi-patch-check-fill text-success me-2"></i> Expert guidance for your requirements</li>
                <li className="d-flex align-items-center"><i className="bi bi-patch-check-fill text-success me-2"></i> Convenient ordering via WhatsApp</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div 
                className="card border-0 shadow-lg overflow-hidden rounded-4 position-relative" 
                style={{ 
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-white)'
                }}
              >
                <div className="position-relative" style={{ maxHeight: '550px', overflow: 'hidden', background: '#0B2545' }}>
                  <img 
                    src={getAssetUrl('/images/vlm_storefront.jpg')} 
                    alt="VLM Traders & Services Storefront in Ponneri" 
                    className="w-100 object-fit-cover shadow-sm hover-lift"
                    style={{ maxHeight: '550px', objectPosition: 'center', transition: 'transform 0.5s ease' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span 
                      className="badge shadow-sm rounded-pill px-3 py-2 fw-semibold"
                      style={{ backgroundColor: 'var(--accent-green)', color: '#FFFFFF' }}
                    >
                      <i className="bi bi-patch-check-fill me-1"></i> Authentic Storefront
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(11,37,69,0.95) 0%, rgba(11,37,69,0.55) 60%, transparent 100%)' }}>
                    <h4 className="fw-bold text-white mb-1">{shop.name}</h4>
                    <p className="text-light mb-0 small opacity-90">
                      <i className="bi bi-geo-alt-fill me-1" style={{ color: 'var(--accent-orange)' }}></i> {shop.address}
                    </p>
                  </div>
                </div>
                <div className="card-body p-3 border-top" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-dark)' }}>
                  <div className="d-flex justify-content-around text-center small fw-semibold flex-wrap gap-2">
                    <div style={{ color: 'var(--electrical)' }}><i className="bi bi-lightning-charge-fill me-1"></i>Electrical Goods</div>
                    <div style={{ color: 'var(--plumbing)' }}><i className="bi bi-droplet-fill me-1"></i>Pumps &amp; Plumbing</div>
                    <div style={{ color: 'var(--security)' }}><i className="bi bi-camera-video-fill me-1"></i>CCTV Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <h3 className="fw-bold text-center mb-5" style={{ color: 'var(--text-heading)' }}>Visit Our Store</h3>
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
    </>
  );
};

export default About;
