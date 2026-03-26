import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Star } from "lucide-react";
import VisionMissionSection from "./VisionMissionSection";

export default function About() {

  const statsData = [
    { id: 1, icon: <Users className="w-8 h-8 text-blue-600" />, label: "Happy Clients", value: 500 },
    { id: 2, icon: <Briefcase className="w-8 h-8 text-green-600" />, label: "Projects Completed", value: 1000 },
    { id: 3, icon: <Star className="w-8 h-8 text-yellow-500" />, label: "Work Satisfaction", value: 98 },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      statsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 50);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, 50);
      });
    }
  }, [inView]);

  return (
    <>
      {/* Meta Tags for About Page */}
      <Helmet>
        <title>About K.K. Yadav Interior Work | Best Interior Services in Delhi NCR</title>
        <meta name="title" content="About K.K. Yadav Interior Work | Best Interior Services in Delhi NCR" />
        <meta name="description" content="K.K. Yadav Interior Work provides professional POP design, gypsum ceiling, false ceiling, partition work and painting services in Delhi NCR. 1000+ projects completed with 98% client satisfaction. Quality work at fair prices." />
        <meta name="keywords" content="about interior company, best interior designers Delhi, POP design specialists, false ceiling experts, gypsum ceiling contractors, partition work Delhi, painting services Delhi, K.K. Yadav interior, interior work Delhi NCR" />
        <meta name="author" content="K.K. Yadav Interior Work" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kkyadavinterior.in/about" />
        <meta property="og:title" content="About K.K. Yadav Interior Work | Best Interior Services in Delhi NCR" />
        <meta property="og:description" content="Professional interior services in Delhi NCR with 1000+ projects completed. Specializing in POP design, false ceiling, partition work, and painting. Quality work with 98% client satisfaction." />
        <meta property="og:image" content="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" />
        <meta property="og:site_name" content="K.K. Yadav Interior Work" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kkyadavinterior.in/about" />
        <meta property="twitter:title" content="About K.K. Yadav Interior Work | Best Interior Services in Delhi NCR" />
        <meta property="twitter:description" content="Learn about K.K. Yadav Interior Work - trusted interior service provider in Delhi NCR with 1000+ successful projects and 98% client satisfaction." />
        <meta property="twitter:image" content="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" />
        <meta property="twitter:site" content="@kkyadavinterior" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kkyadavinterior.in/about" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.kkyadavinterior.in/about" hrefLang="en-in" />
        
        {/* AboutPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About K.K. Yadav Interior Work",
            "description": "Professional interior work services provider in Delhi NCR specializing in POP design, false ceiling, partition work, and painting.",
            "url": "https://www.kkyadavinterior.in/about",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "K.K. Yadav Interior Work",
              "url": "https://www.kkyadavinterior.in",
              "logo": "https://www.kkyadavinterior.in/logo.png",
              "image": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
              "description": "Professional interior work services including POP design, gypsum ceiling, false ceiling, partition work, and painting for homes, shops and offices in Delhi NCR.",
              "telephone": "+91916392370621",
              "email": "kaushalyadav240587@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House No. 2, Gali No. 15, D Block, Surendra Colony, Jharoda Part 1",
                "addressLocality": "North Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110084",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.7041",
                "longitude": "77.1025"
              },
              "openingHours": "Mo-Su 09:00-19:00",
              "priceRange": "₹₹",
              "areaServed": ["Delhi", "Noida", "Ghaziabad", "Faridabad", "Gurgaon"],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "15"
              },
              "founder": {
                "@type": "Person",
                "name": "K.K. Yadav"
              },
              "sameAs": [
                "https://www.facebook.com/kkyadavinterior",
                "https://www.instagram.com/kkyadavinterior"
              ]
            }
          })}
        </script>
        
        {/* BreadcrumbList Schema */}
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
                "name": "About",
                "item": "https://www.kkyadavinterior.in/about"
              }
            ]
          })}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "K.K. Yadav Interior Work",
            "url": "https://www.kkyadavinterior.in",
            "logo": "https://www.kkyadavinterior.in/logo.png",
            "description": "Professional interior work services in Delhi NCR specializing in POP design, false ceiling, partition work, and painting.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House No. 2, Gali No. 15, D Block, Surendra Colony, Jharoda Part 1",
              "addressLocality": "North Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110084",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91916392370621",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": ["Delhi", "Noida", "Ghaziabad", "Faridabad", "Gurgaon"]
            },
            "sameAs": [
              "https://www.facebook.com/kkyadavinterior",
              "https://www.instagram.com/kkyadavinterior"
            ]
          })}
        </script>
      </Helmet>

      <section className="relative bg-gradient-to-r from-blue-50 to-white py-20 overflow-hidden mt-0 md:mt-10" ref={ref}>
        
        {/* Background */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-purple-500 rounded-full opacity-15"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-blue-600">K.K. Yadav Interior Work</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-700 leading-relaxed md:text-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <strong>K.K. Yadav Interior Work</strong> provides professional interior
            services including POP, gypsum work, false ceiling, partition and painting.
            We work for homes, shops and offices with a focus on clean design and strong finishing.
            <br /><br />
            Our goal is simple — deliver quality work, complete projects on time,
            and keep our customers satisfied with reliable and affordable services.
            We believe in honest work, clear communication and long-term trust.
            <br /><br />
            With <strong className="text-blue-600">1000+ successful projects</strong> and 
            <strong className="text-blue-600"> 500+ happy clients</strong> across Delhi NCR, 
            we have established ourselves as a trusted name in interior work services.
          </motion.p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-blue-800">
                  {counts[index]}{stat.label === "Work Satisfaction" ? "%" : "+"}
                </h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-gray-700 text-sm">✓ 10+ Years Experience</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-gray-700 text-sm">✓ Quality Work Guaranteed</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-gray-700 text-sm">✓ On-Time Delivery</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <span className="text-gray-700 text-sm">✓ Affordable Pricing</span>
            </div>
          </motion.div>

        </div>

        <VisionMissionSection />
      </section>
    </>
  );
}