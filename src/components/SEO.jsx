import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords, url, image, schema, type = 'website' }) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
      
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.content = title;
        document.head.appendChild(meta);
      }
      
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'twitter:title';
        meta.content = title;
        document.head.appendChild(meta);
      }
    }

    // Update description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
      
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        meta.content = description;
        document.head.appendChild(meta);
      }
      
      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) {
        twitterDesc.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'twitter:description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
      
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', url);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.content = url;
        document.head.appendChild(meta);
      }
    }

    // OpenGraph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.content = type;
      document.head.appendChild(meta);
    }

    // OpenGraph & Twitter Image
    const defaultImage = `${window.location.origin}/images/hero_slider_electrical.jpg`;
    const targetImage = image || defaultImage;
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', targetImage);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = targetImage;
      document.head.appendChild(meta);
    }

    let twImg = document.querySelector('meta[name="twitter:image"]');
    if (twImg) {
      twImg.setAttribute('content', targetImage);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.content = targetImage;
      document.head.appendChild(meta);
    }

    // Inject JSON-LD Schema
    if (schema) {
      let script = document.querySelector('#json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(schema);
    }

  }, [title, description, keywords, url, image, schema, type]);

  return null;
};

export default SEO;
