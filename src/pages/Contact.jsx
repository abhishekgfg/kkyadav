import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "916392370621"; // 🔥 apna number daalo
    const text = `Hello K.K. Yadav Interior Work,%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Work Requirement: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Meta Tags for Contact Page */}
      <Helmet>
        <title>Contact KKYadav Interior Work | Get Free Quote for POP, Ceiling & Painting</title>
        <meta name="title" content="Contact K.K. Yadav Interior Work | Get Free Quote for POP, Ceiling & Painting" />
        <meta name="description" content="Contact K.K. Yadav Interior Work for professional POP design, gypsum ceiling, partition work, and painting services in Delhi. Get free quote and expert consultation for your home, shop or office interior work." />
        <meta name="keywords" content="contact interior designer, interior work Delhi, POP design contact, false ceiling services, gypsum ceiling Delhi, painting services contact, K.K. Yadav contact, interior work near me, best interior services Delhi" />
        <meta name="author" content="K.K. Yadav Interior Work" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kkyadavinterior.in/contact" />
        <meta property="og:title" content="Contact K.K. Yadav Interior Work | Get Free Quote for POP, Ceiling & Painting" />
        <meta property="og:description" content="Contact us for professional interior services including false ceiling, POP design, partition work, and painting. Get free quote and expert consultation in Delhi." />
        <meta property="og:image" content="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" />
        <meta property="og:site_name" content="K.K. Yadav Interior Work" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kkyadavinterior.in/contact" />
        <meta property="twitter:title" content="Contact K.K. Yadav Interior Work | Get Free Quote for POP, Ceiling & Painting" />
        <meta property="twitter:description" content="Contact us for professional interior work services in Delhi. Get free quote for false ceiling, POP design, partition and painting work." />
        <meta property="twitter:image" content="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" />
        <meta property="twitter:site" content="@kkyadavinterior" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kkyadavinterior.in/contact" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.kkyadavinterior.in/contact" hrefLang="en-in" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "K.K. Yadav Interior Work",
            "url": "https://www.kkyadavinterior.in",
            "logo": "https://www.kkyadavinterior.in/logo.png",
            "image": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
            "description": "Professional interior work services including false ceiling, POP design, partition work, and painting for homes, shops and offices in Delhi.",
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
            "telephone": "+91916392370621",
            "email": "kaushalyadav240587@gmail.com",
            "openingHours": "Mo-Su 09:00-19:00",
            "sameAs": [
              "https://www.facebook.com/kkyadavinterior",
              "https://www.instagram.com/kkyadavinterior"
            ],
            "priceRange": "₹₹",
            "areaServed": {
              "@type": "City",
              "name": "Delhi"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91916392370621",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
        
        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact K.K. Yadav Interior Work",
            "description": "Get in touch with K.K. Yadav Interior Work for professional interior services in Delhi.",
            "url": "https://www.kkyadavinterior.in/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "K.K. Yadav Interior Work",
              "telephone": "+91916392370621",
              "email": "kaushalyadav240587@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House No. 2, Gali No. 15, D Block, Surendra Colony, Jharoda Part 1",
                "addressLocality": "North Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110084",
                "addressCountry": "IN"
              }
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
                "name": "Contact",
                "item": "https://www.kkyadavinterior.in/contact"
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        
        {/* Background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="text-blue-600">Us</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-700 md:text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Need gypsum ceiling, POP design or painting work?  
            Contact us for reliable interior services with clean finishing and fair pricing.
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <FaMapMarkerAlt className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-600 text-sm text-center whitespace-pre-line">
                {`House No. 2, Gali No. 15, D Block
Surendra Colony, Jharoda Part 1
North Delhi,
Delhi - 110084`}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <FaEnvelope className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a href="mailto:kaushalyadav240587@gmail.com" className="text-gray-600 text-sm text-center hover:text-blue-600 transition">
                kaushalyadav240587@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <FaPhoneAlt className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Call / WhatsApp</h3>
              <a href="tel:+916392370621" className="text-gray-600 text-sm text-center hover:text-purple-600 transition">
                +91 6392370621
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number *"
                required
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Work details (Gypsum ceiling / POP / Painting / Partition...) *"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
              rows={4}
            ></textarea>

            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send on WhatsApp
            </motion.button>
          </motion.form>

        </div>
      </section>
    </>
  );
}