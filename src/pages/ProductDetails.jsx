import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { shop } from '../data/shop';
import { products } from '../data/products';
import { getProductEnquiry } from '../utils/whatsapp';
import { getCallUrl } from '../utils/phone';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/not-found" />;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);

  return (
    <>
      <SEO 
        title={`${product.name} - ${product.category} | ${shop.name}`}
        description={product.shortDescription}
        url={`${window.location.origin}/products/${product.slug}`}
      />

      <div className="py-3 py-md-4" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: 'var(--brand-blue)' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/products" className="text-decoration-none" style={{ color: 'var(--brand-blue)' }}>Products</Link></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: 'var(--text-heading)' }}>{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div 
                className="rounded-4 p-4 d-flex align-items-center justify-content-center shadow-sm" 
                style={{ minHeight: '400px', backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-light)' }}
              >
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="img-fluid rounded-3" 
                    style={{ maxHeight: '380px', width: '100%', objectFit: 'contain' }} 
                  />
                ) : (
                  <i className="bi bi-box-seam opacity-50" style={{ fontSize: '6rem', color: 'var(--brand-navy)' }}></i>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <span 
                className="badge mb-2 rounded-pill px-3 py-1.5 fw-bold"
                style={{ backgroundColor: 'var(--accent-orange)', color: '#FFFFFF' }}
              >
                {product.category}
              </span>
              <h1 className="fw-bold mb-3" style={{ color: 'var(--text-heading)' }}>{product.name}</h1>
              <p className="lead mb-4" style={{ color: 'var(--text-primary)' }}>{product.description}</p>
              
              <h5 className="fw-bold mb-3" style={{ color: 'var(--text-heading)' }}>Key Features</h5>
              <ul className="list-unstyled mb-5 d-flex flex-column gap-2" style={{ color: 'var(--text-primary)' }}>
                {product.features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div 
                className="card border-0 rounded-4 shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}
              >
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--text-heading)' }}>Check Price &amp; Availability</h5>
                  <p className="small mb-4" style={{ color: 'var(--text-primary)' }}>Contact us directly to get the best quote for this product in {shop.city}.</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <a 
                      href={getProductEnquiry(product.name)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-success btn-lg rounded-pill px-4 fw-bold"
                      style={{ backgroundColor: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
                    >
                      <i className="bi bi-whatsapp me-2"></i> WhatsApp Enquiry
                    </a>
                    <a 
                      href={getCallUrl()} 
                      className="btn btn-primary btn-lg rounded-pill px-4 fw-bold"
                      style={{ backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}
                    >
                      <i className="bi bi-telephone-fill me-2"></i> Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-dark)' }}>
          <div className="container">
            <h3 className="fw-bold mb-4" style={{ color: 'var(--text-heading)' }}>Related Products</h3>
            <div className="row g-2 g-md-4">
              {relatedProducts.map(p => (
                <div key={p.id} className="col-6 col-md-4 col-lg-3">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
