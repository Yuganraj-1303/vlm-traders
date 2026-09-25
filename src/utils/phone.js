import { shop } from '../data/shop';

export const getCallUrl = () => {
  return `tel:${shop.phone.replace(/[^+\d]/g, '')}`;
};

export const getEmailUrl = () => {
  return `mailto:${shop.email}`;
};
