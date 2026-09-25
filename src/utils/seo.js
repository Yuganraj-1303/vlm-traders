import { shop } from '../data/shop';

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalStore",
    "@id": `${window.location.origin}/#store`,
    "name": shop.name,
    "image": `${window.location.origin}/images/hero_slider_electrical.jpg`,
    "description": "Certified domestic, commercial & industrial wiring, DB panel installations, submersible pump solutions, and HD CCTV security surveillance camera setup in Ponneri.",
    "url": window.location.origin,
    "telephone": shop.phone,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
    "founder": {
      "@type": "Person",
      "name": shop.proprietor
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": shop.address,
      "addressLocality": shop.city,
      "addressRegion": shop.state,
      "postalCode": "601204",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": shop.latitude,
      "longitude": shop.longitude
    },
    "areaServed": [
      { "@type": "City", "name": "Ponneri" },
      { "@type": "City", "name": "Minjur" },
      { "@type": "City", "name": "Kavaraipettai" },
      { "@type": "City", "name": "Gummidipoondi" },
      { "@type": "City", "name": "Thiruvallur" },
      { "@type": "City", "name": "Chennai" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical, Plumbing & Security Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House & Industrial Electrical Wiring",
            "description": "Complete conduit wiring, distribution boards, MCB fault repair, and electrical contracting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HD CCTV Camera Setup & Security Surveillance",
            "description": "Night vision IP cameras, DVR/NVR setup, smartphone live streaming, and maintenance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Submersible Pumps & Plumbing Solutions",
            "description": "Heavy-duty borewell submersible motor fitting, pressure pumps, and CPVC/UPVC pipeline plumbing."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142",
      "bestRating": "5"
    },
    "openingHoursSpecification": Object.entries(shop.openingHours).map(([day, hours]) => {
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": day.charAt(0).toUpperCase() + day.slice(1),
        "opens": hours.split(' - ')[0],
        "closes": hours.split(' - ')[1]
      };
    })
  };
};

export const getFaqSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What electrical contractor services do you provide in Ponneri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VLM Traders & Services provides licensed domestic, commercial, and industrial electrical wiring, DB panel installations, short-circuit diagnostics, MCB trip troubleshooting, inverter and battery installation, and emergency electrician repairs in Ponneri and surrounding regions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you install and configure CCTV cameras for residences and shops?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are authorized dealers and certified installers for leading CCTV brands including Hikvision, CP Plus, Dahua, and Trueview. We provide high-definition color night vision cameras, multi-channel DVR/NVR configurations, and live smartphone monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide submersible borewell pumps and plumbing pipelines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we supply genuine submersible pumps, jet pumps, and pressure booster motors from Crompton and top manufacturers, along with complete leak-proof CPVC and UPVC pipeline installation and motor rewinding services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an electrician or pump technician in Ponneri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can directly connect with our team via WhatsApp at +91 9940574439 or call us directly. We offer fast doorstep service across Ponneri, Minjur, Kavaraipettai, and nearby areas."
        }
      }
    ]
  };
};

