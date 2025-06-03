import { author, seoData } from '@/lib/content/portfolio'

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": author.name,
    "description": seoData.description,
    "url": seoData.url,
    "telephone": author.phone,
    "image": `${seoData.url}${seoData.image}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greenbelt",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.0043",
      "longitude": "-76.9361"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.0043",
        "longitude": "-76.9361"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Tire and Brake Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Tire Change",
            "description": "Professional tire change service at your location"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Brake Repair",
            "description": "Expert brake repair and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tire Balancing",
            "description": "Professional tire balancing for smooth rides"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PSI Service",
            "description": "Tire pressure monitoring and inflation service"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": author.name,
    "url": seoData.url,
    "logo": `${seoData.url}/favicons/android-chrome-512x512.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": author.phone,
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/bambootire",
      "https://instagram.com/bambootire"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  )
}
