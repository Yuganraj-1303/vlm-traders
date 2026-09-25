import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { shop } from '../data/shop';
import { products } from '../data/products';
import { categories } from '../data/categories';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category') || '';
  const searchQueryParam = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(searchQueryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    updateParams(term, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setSelectedCategory(cat);
    updateParams(searchTerm, cat);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSearchParams({});
  };

  const updateParams = (term, cat) => {
    const params = {};
    if (term) params.search = term;
    if (cat) params.category = cat;
    setSearchParams(params);
  };

  // Sync state if URL changes directly
  useEffect(() => {
    setSearchTerm(searchQueryParam);
    setSelectedCategory(categoryQuery);
  }, [searchQueryParam, categoryQuery]);

  const filteredProducts = products.filter(product => {
    let matchesCategory = true;
    if (selectedCategory) {
      if (selectedCategory === 'cctv-surveillance') {
        matchesCategory = product.category === 'CCTV Surveillance';
      } else if (selectedCategory === 'plumbing-services') {
        matchesCategory = product.category === 'Plumbing Services';
      } else if (selectedCategory === 'electrical-electronics' || selectedCategory === 'electrical') {
        // ONLY show core electrical items - excludes CCTV, Plumbing, and Inverter/Battery/Solar
        matchesCategory = !['CCTV Surveillance', 'Plumbing Services', 'Inverters', 'Batteries', 'Solar Solutions', 'Voltage Stabilizers'].includes(product.category);
      } else if (selectedCategory === 'inverter-battery-solar') {
        matchesCategory = ['Inverters', 'Batteries', 'Solar Solutions', 'Voltage Stabilizers'].includes(product.category);
      } else if (selectedCategory === 'voltage-stabilizers') {
        matchesCategory = product.category === 'Voltage Stabilizers';
      } else if (selectedCategory === 'inverter-battery') {
        matchesCategory = ['Inverters', 'Batteries'].includes(product.category);
      } else if (selectedCategory === 'solar-solutions') {
        matchesCategory = product.category === 'Solar Solutions';
      } else if (selectedCategory === 'lighting-fans') {
        matchesCategory = ['LED Bulbs', 'LED Lights', 'Fans'].includes(product.category);
      } else if (selectedCategory === 'switches-wires') {
        matchesCategory = ['Switches', 'Sockets', 'Wires & Cables', 'MCB & DB', 'Electrical Accessories'].includes(product.category);
      } else {
        matchesCategory = product.category === selectedCategory || product.category === categories.find(c => c.slug === selectedCategory)?.name;
      }
    }
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm || 
                          product.name.toLowerCase().includes(searchLower) || 
                          product.shortDescription.toLowerCase().includes(searchLower) ||
                          product.category.toLowerCase().includes(searchLower) ||
                          (product.features && product.features.some(f => f.toLowerCase().includes(searchLower)));
    return matchesCategory && matchesSearch;
  });

  const isElectricalSelected = selectedCategory === 'electrical-electronics' || selectedCategory === 'electrical';
  const isCCTVSelected = selectedCategory === 'cctv-surveillance';
  const isPlumbingSelected = selectedCategory === 'plumbing-services';

  return (
    <>
      <SEO 
        title={`Electrical, CCTV & Pump Products in ${shop.city} | ${shop.name}`}
        description={`Browse our complete catalogue of genuine ISI electrical products, Finolex wires, Legrand switchgear, Crompton pumps, and Hikvision CCTV cameras in ${shop.city}. Wholesale and retail rates.`}
        keywords={`Electrical products ${shop.city}, Finolex wires ${shop.city}, Crompton pumps ${shop.city}, Hikvision CCTV camera ${shop.city}, DB box ${shop.city}, LED lights ${shop.city}`}
        url={`${window.location.origin}/products`}
      />

      <div className="py-4" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <h1 className="fw-bold mb-0" style={{ color: 'var(--text-heading)' }}>
            Our Products &amp; <span style={{ color: 'var(--brand-blue)' }}>Wholesale Catalog</span>
          </h1>
        </div>
      </div>

      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row mb-3 g-3 align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text border-end-0" style={{ backgroundColor: 'var(--bg-white)', borderColor: 'var(--border-medium)', color: 'var(--text-muted)' }}>
                  <i className="bi bi-search"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0 ps-0" 
                  placeholder="Search products, brands, or specifications..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="col-md-4">
              <select 
                className="form-select" 
                value={selectedCategory} 
                onChange={handleCategoryChange}
                style={{ backgroundColor: 'var(--bg-white)', borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.slug}>{cat.name} {cat.badge ? `(${cat.badge})` : ''}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2 text-md-end">
              {(searchTerm || selectedCategory) && (
                <button className="btn btn-outline-danger btn-sm rounded-pill px-3" onClick={clearFilters}>
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Quick Filter Badges */}
          <div className="d-flex flex-wrap gap-2 mb-4 pb-2 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
            {[
              { label: 'All', value: '' },
              { label: '⚡ Electrical Items Only', value: 'electrical-electronics' },
              { label: '🔋 Inverter, Battery & Solar', value: 'inverter-battery-solar' },
              { label: '📹 CCTV Surveillance', value: 'cctv-surveillance' },
              { label: '🚰 Plumbing Services', value: 'plumbing-services' },
              { label: '⚡ Stabilizers', value: 'voltage-stabilizers' },
              { label: '💡 Lighting & Fans', value: 'lighting-fans' },
              { label: '🔌 Switches & Wires', value: 'switches-wires' }
            ].map(pill => (
              <button
                key={pill.value}
                onClick={() => {
                  setSelectedCategory(pill.value);
                  setSearchParams(pill.value ? { category: pill.value } : {});
                }}
                className="btn btn-sm rounded-pill px-3 py-1 shadow-sm fw-medium"
                style={{ 
                  fontSize: '0.85rem',
                  backgroundColor: selectedCategory === pill.value ? 'var(--brand-blue)' : 'var(--bg-white)',
                  color: selectedCategory === pill.value ? '#FFFFFF' : 'var(--text-primary)',
                  border: `1.5px solid ${selectedCategory === pill.value ? 'var(--brand-blue)' : 'var(--border-light)'}`
                }}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Status Alert for Category Selection */}
          {isElectricalSelected && (
            <div 
              className="alert border-0 rounded-4 shadow-sm mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2"
              style={{ background: '#fef3c7', border: '1px solid #fde68a', color: '#78350f' }}
            >
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-lightning-charge-fill fs-4" style={{ color: '#d97706' }}></i>
                <div>
                  <strong className="d-block" style={{ color: '#92400e' }}>⚡ Showing Electrical Products Only</strong>
                  <span className="small text-muted">
                    Displaying switches, wires, lights, inverters, batteries, stabilizers & accessories. 
                    <strong className="text-dark ms-1">Electrical service & installation also available!</strong>
                  </span>
                </div>
              </div>
              <a href={`https://wa.me/${shop.whatsapp}?text=Hi%2C%20I%20am%20enquiring%20about%20Electrical%20Service%20and%20products`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success rounded-pill px-3 shadow-sm">
                <i className="bi bi-whatsapp me-1"></i> Book Electrical Service
              </a>
            </div>
          )}

          {isCCTVSelected && (
            <div className="alert alert-primary border-0 rounded-4 shadow-sm mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-camera-video-fill text-primary fs-4"></i>
                <div>
                  <strong className="d-block">Showing CCTV Surveillance Items Only</strong>
                  <span className="small text-muted">IP/Analog cameras, DVRs, cabling & security installation services.</span>
                </div>
              </div>
              <a href={`https://wa.me/${shop.whatsapp}?text=Hi%2C%20I%20need%20CCTV%20installation%20service`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success rounded-pill px-3">
                <i className="bi bi-whatsapp me-1"></i> Book CCTV Service
              </a>
            </div>
          )}

          {isPlumbingSelected && (
            <div className="alert alert-info border-0 rounded-4 shadow-sm mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2" style={{ backgroundColor: '#e0f2fe' }}>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-tools text-info fs-4"></i>
                <div>
                  <strong className="d-block">Showing Plumbing Services & Materials Only</strong>
                  <span className="small text-muted">Pumps, CPVC/PVC pipes, water tanks, bathroom fittings & pipeline repair services.</span>
                </div>
              </div>
              <a href={`https://wa.me/${shop.whatsapp}?text=Hi%2C%20I%20need%20Plumbing%20services`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success rounded-pill px-3">
                <i className="bi bi-whatsapp me-1"></i> Book Plumbing Service
              </a>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search text-muted opacity-50 mb-3" style={{fontSize: '3rem'}}></i>
              <h4 className="fw-bold text-dark">No products found</h4>
              <p className="text-muted">Try adjusting your search or filters.</p>
              <button className="btn btn-primary-theme rounded-pill mt-2" onClick={clearFilters}>
                View All Products
              </button>
            </div>
          ) : (
            <div className="row g-2 g-md-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="col-6 col-md-4 col-lg-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
