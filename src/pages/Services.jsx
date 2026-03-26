import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Briefcase, Users, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "False Ceiling Work",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Gypsum false ceiling</li>
          <li>POP ceiling design</li>
          <li>Modern and simple ceiling styles</li>
        </ul>
      ),
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Partition Work",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Gypsum partition</li>
          <li>Office and shop partitions</li>
          <li>Strong and clean finishing</li>
        </ul>
      ),
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "Painting Work",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Interior wall painting</li>
          <li>Exterior painting</li>
          <li>Smooth and clean finish</li>
        </ul>
      ),
      icon: <FileText className="w-10 h-10 text-yellow-600" />,
    },
  ];

  return (
    <>
      {/* Meta Tags for Services Page */}
      <Helmet>
        <title>Our Interior Services | K.K. Yadav - False Ceiling, Partition & Painting Work</title>
        <meta name="title" content="Our Interior Services | K.K. Yadav - False Ceiling, Partition & Painting Work" />
        <meta name="description" content="Professional interior services including false ceiling (gypsum & POP), partition work for offices & shops, and quality painting services. Get expert interior work at fair prices." />
        <meta name="keywords" content="false ceiling, gypsum ceiling, POP ceiling, partition work, office partition, shop partition, painting services, interior painting, home painting, K.K. Yadav interior services" />
        <meta name="author" content="K.K. Yadav Interior Work" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kkyadavinterior.in/services" />
        <meta property="og:title" content="Our Interior Services | K.K. Yadav - False Ceiling, Partition & Painting Work" />
        <meta property="og:description" content="Professional false ceiling, partition and painting services for homes, shops and offices. Quality work with proper finishing at fair prices." />
        <meta property="og:image" content="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" />
        <meta property="og:site_name" content="K.K. Yadav Interior Work" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kkyadavinterior.in/services" />
        <meta property="twitter:title" content="Our Interior Services | K.K. Yadav - False Ceiling, Partition & Painting Work" />
        <meta property="twitter:description" content="Expert interior services: false ceiling, partition work and painting. Get quality work with clean finishing for your home, shop or office." />
        <meta property="twitter:image" content="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" />
        <meta property="twitter:site" content="@kkyadavinterior" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kkyadavinterior.in/services" />
        
        {/* Alternate language versions if needed */}
        <link rel="alternate" href="https://www.kkyadavinterior.in/services" hrefLang="en-in" />
        
        {/* Service-specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "K.K. Yadav Interior Services",
            "description": "Professional interior work services including false ceiling, partition work, and painting services for homes, shops and offices.",
            "url": "https://www.kkyadavinterior.in/services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "K.K. Yadav Interior Work",
              "url": "https://www.kkyadavinterior.in",
              "telephone": "+91916392370621",
              "email": "info@kkyadavinterior.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/kkyadavinterior",
                "https://www.instagram.com/kkyadavinterior"
              ]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Interior Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "False Ceiling Work",
                    "description": "Gypsum false ceiling, POP ceiling design, modern and simple ceiling styles"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Partition Work",
                    "description": "Gypsum partition, office and shop partitions with strong and clean finishing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Painting Work",
                    "description": "Interior wall painting, exterior painting with smooth and clean finish"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* BreadcrumbList Schema for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.kkyadavinterior.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.kkyadavinterior.in/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="pt-12 md:pt-16 pb-8 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We provide interior work services for homes, shops and offices.
          </motion.p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col text-left hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-blue-800">
                    {service.title}
                  </h3>
                </div>

                <div className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>  
  );
}