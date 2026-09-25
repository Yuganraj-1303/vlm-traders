import { shop } from '../data/shop';

export const getWhatsAppUrl = (message) => {
  const number = shop.whatsapp;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

export const getDefaultEnquiry = () => {
  return getWhatsAppUrl(`Hi ${shop.name}, I would like to make an enquiry about your products.`);
};

export const getProductEnquiry = (productName) => {
  return getWhatsAppUrl(`Hi, I am interested in ${productName}. Please share the price and availability.`);
};

export const getOfferEnquiry = (offerTitle) => {
  return getWhatsAppUrl(`Hi ${shop.name}, I would like to know more about the offer: "${offerTitle}".`);
};
