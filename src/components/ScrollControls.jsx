import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollControls = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);
  const isHoveredRef = useRef(false);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Show Up button if scrolled down more than 100px
      setShowUp(scrollY > 100);

      // Show Down button if not reached the bottom (within 100px of bottom)
      setShowDown(scrollY + windowHeight < fullHeight - 100);

      // Page is moving -> show arrow buttons
      setIsVisible(true);

      // Clear any pending hide timer
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      // If not hovering, disappear after 1.8 seconds of no movement
      if (!isHoveredRef.current) {
        hideTimerRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 1800);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };

  const scrollToTop = (e) => {
    e.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = (e) => {
    e.stopPropagation();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="scroll-controls-container"
          aria-label="Quick page navigation"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Scroll to Top Arrow Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className={`scroll-arrow-btn scroll-arrow-up ${showUp ? 'visible' : 'faded'}`}
            aria-label="Scroll to top of page"
            title="Scroll to top"
          >
            <i className="bi bi-chevron-up"></i>
          </button>

          {/* Scroll to Bottom Arrow Button */}
          <button
            type="button"
            onClick={scrollToBottom}
            className={`scroll-arrow-btn scroll-arrow-down ${showDown ? 'visible' : 'faded'}`}
            aria-label="Scroll to bottom of page"
            title="Scroll to bottom"
          >
            <i className="bi bi-chevron-down"></i>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollControls;
