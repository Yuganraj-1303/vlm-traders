import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import { getCallUrl } from './utils/phone';
import { getDefaultEnquiry } from './utils/whatsapp';
import { shop } from './data/shop';

const Products = React.lazy(() => import('./pages/Products'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Services = React.lazy(() => import('./pages/Services'));
const Offers = React.lazy(() => import('./pages/Offers'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

import ScrollControls from './components/ScrollControls';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search]);
  return null;
};

const MobileBottomBar = () => {
  return (
    <div className="mobile-bottom-bar d-md-none" style={{ backgroundColor: 'var(--bg-color)' }}>
      <a href={getCallUrl()}>
        <i className="bi bi-telephone-fill"></i>
        Call
      </a>
      <a href={getDefaultEnquiry()} target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp text-success"></i>
        WhatsApp
      </a>
      <a href={shop.googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <i className="bi bi-geo-alt-fill text-danger"></i>
        Map
      </a>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
          <Route path="/products/:slug" element={<PageWrapper><ProductDetails /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/offers" element={<PageWrapper><Offers /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
    className="flex-grow-1 d-flex flex-column"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100" style={{ background: 'transparent' }}>
        <Navbar />
        <main className="flex-grow-1 d-flex flex-column">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollControls />
        <MobileBottomBar />
      </div>
    </Router>
  );
}

export default App;
