import React from 'react';
import { getDefaultEnquiry } from '../utils/whatsapp';

const WhatsAppButton = () => {
  return (
    <a
      href={getDefaultEnquiry()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float d-none d-md-flex"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
