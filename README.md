# VLM Traders & Services

A complete, professional, production-ready static electrical shop website built with React, Vite, and Bootstrap 5. It is fully static and designed for excellent local SEO, easy customization, and zero backend maintenance.

## Project Overview

This project is tailored for a local electrical shop. It serves as a product catalogue where customers can easily browse items, view shop information, and send product inquiries directly via WhatsApp. The website is lightweight, mobile-first, and deployable entirely for free on Cloudflare Pages.

## Technologies

- React (Frontend Library)
- Vite (Build Tool)
- JavaScript
- Bootstrap 5 & Bootstrap Icons (Styling)
- React Router DOM (Routing)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
The output will be in the `dist/` directory, which can be uploaded directly to Cloudflare Pages.

## How to Customize Business Information

### 1. How to change shop details
Edit `src/data/shop.js`. This file acts as the configuration hub for the website. Update the shop name, phone number, WhatsApp number, email, address, and opening hours. These changes will reflect universally across the site (Footer, Contact Page, Business Info Components, and SEO Schema).

### 2. How to add products
Edit `src/data/products.js`. Add new objects to the array using the existing format. Ensure `category` perfectly matches a category name defined in `categories.js`. Use `featured: true` to display the product on the Home page.

### 3. How to add categories
Edit `src/data/categories.js`. Add the new category and provide a Bootstrap icon (e.g., `bi-plug`).

### 4. How to update WhatsApp, Phone & Email
These are controlled via `src/data/shop.js`. Ensure you enter the WhatsApp number with the country code but **without** the `+` sign (e.g., `919876543210`). The email and phone are used in clickable `tel:` and `mailto:` links across the site.

### 5. How to update Google Maps
In `src/data/shop.js`, replace the `googleMapsUrl` with the share/directions link for your actual Google Maps location. This avoids incurring API costs while still driving physical traffic.

### 6. How to update SEO
The meta tags and JSON-LD structured data are automatically generated based on the values in `shop.js` and the product data. The generic behavior is defined in `src/components/SEO.jsx` and `src/utils/seo.js`. You do not need to manually change headers for new products.

## Deployment

### How to deploy to Cloudflare Pages
1. Push this repository to GitHub or GitLab.
2. Log in to Cloudflare Pages.
3. Select "Create a Project" -> "Connect to Git".
4. Select your repository.
5. Set the Build Command to `npm run build`.
6. Set the Build Output Directory to `dist`.
7. Deploy.

### How to connect a custom domain
1. Go to your Cloudflare Pages project settings.
2. Navigate to "Custom Domains".
3. Enter your domain (e.g., `www.sri-electricals.com`).
4. Follow the Cloudflare DNS setup instructions to verify ownership.

### How to submit sitemap to Google Search Console
1. Edit `public/sitemap.xml` and replace `https://www.example.com` with your final custom domain.
2. Edit `public/robots.txt` and replace the sitemap URL with the correct one.
3. Deploy the changes.
4. Go to Google Search Console, add your domain as a property.
5. Go to the "Sitemaps" menu on the left and submit `https://your-domain.com/sitemap.xml`.
