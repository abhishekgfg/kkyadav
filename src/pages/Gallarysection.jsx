import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/20.jpeg";
import img6 from "../image/6.jpeg";
import img7 from "../image/12.jpeg";
import img8 from "../image/8.jpeg";
import img9 from "../image/13.jpeg";

const Gallarysection = () => {
  const navigate = useNavigate();
  
  const images = [
    { id: 1, url: img1, title: "Modern False Ceiling Design", category: "False Ceiling" },
    { id: 2, url: img2, title: "Elegant POP Ceiling Work", category: "POP Design" },
    { id: 3, url: img3, title: "Gypsum Partition Installation", category: "Partition Work" },
    { id: 4, url: img4, title: "Beautiful Wall Painting", category: "Painting" },
    { id: 5, url: img5, title: "Modern Office Interior", category: "Office Interior" },
    { id: 6, url: img6, title: "Residential False Ceiling", category: "False Ceiling" },
    { id: 7, url: img7, title: "Gypsum Partition Design", category: "Partition Work" },
    { id: 8, url: img8, title: "Home Interior Painting", category: "Painting" },
    { id: 9, url: img9, title: "Shop Interior Design", category: "Shop Interior" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleClickMore = () => {
    navigate('/gallery');
  };

  return (
    <>
      {/* Meta Tags for Gallery Page */}
      <Helmet>
        <title>Interior Design Gallery | K.K. Yadav - False Ceiling, POP & Painting Work Portfolio</title>
        <meta name="title" content="Interior Design Gallery | K.K. Yadav - False Ceiling, POP & Painting Work Portfolio" />
        <meta name="description" content="Explore our gallery of 1000+ interior design projects in Delhi NCR. View stunning POP design, gypsum false ceiling, partition work, and painting projects. Real work samples from our satisfied clients." />
        <meta name="keywords" content="interior design gallery, false ceiling photos, POP design images, gypsum ceiling pictures, partition work gallery, painting work portfolio, interior work samples, K.K. Yadav gallery, Delhi NCR interior projects" />
        <meta name="author" content="K.K. Yadav Interior Work" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kkyadavinterior.in/gallery" />
        <meta property="og:title" content="Interior Design Gallery | K.K. Yadav - False Ceiling, POP & Painting Work Portfolio" />
        <meta property="og:description" content="View our portfolio of 1000+ completed interior projects in Delhi NCR. See our quality work in POP design, false ceiling, partition and painting services." />
        <meta property="og:image" content={img1} />
        <meta property="og:site_name" content="K.K. Yadav Interior Work" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kkyadavinterior.in/gallery" />
        <meta property="twitter:title" content="Interior Design Gallery | K.K. Yadav - False Ceiling, POP & Painting Work Portfolio" />
        <meta property="twitter:description" content="See our interior work portfolio. Real projects showing POP design, false ceiling, partition and painting work in Delhi NCR." />
        <meta property="twitter:image" content={img1} />
        <meta property="twitter:site" content="@kkyadavinterior" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kkyadavinterior.in/gallery" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.kkyadavinterior.in/gallery" hrefLang="en-in" />
        
        {/* ImageGallery Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "K.K. Yadav Interior Work Portfolio",
            "description": "Gallery showcasing our best interior design projects in Delhi NCR",
            "url": "https://www.kkyadavinterior.in/gallery",
            "creator": {
              "@type": "LocalBusiness",
              "name": "K.K. Yadav Interior Work",
              "url": "https://www.kkyadavinterior.in"
            },
            "numberOfItems": images.length,
            "image": images.map(img => ({
              "@type": "ImageObject",
              "contentUrl": img.url,
              "name": img.title,
              "description": `${img.title} by K.K. Yadav Interior Work in Delhi NCR`,
              "thumbnailUrl": img.url,
              "keywords": img.category
            }))
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
                "name": "Gallery",
                "item": "https://www.kkyadavinterior.in/gallery"
              }
            ]
          })}
        </script>
        
        {/* LocalBusiness Schema with additional details */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "K.K. Yadav Interior Work",
            "url": "https://www.kkyadavinterior.in",
            "image": images.map(img => img.url),
            "description": "Professional interior work services in Delhi NCR specializing in POP design, false ceiling, partition work, and painting.",
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
            "areaServed": ["Delhi", "Noida", "Ghaziabad", "Faridabad", "Gurgaon"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Interior Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "False Ceiling Work"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "POP Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Partition Work"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Painting Services"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        {/* Gallery Section with 9 Images */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Gallery</h2>
            <p className="text-gray-600">Explore our latest interior design projects in Delhi NCR</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openModal(image)}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm font-semibold text-purple-300">{image.category}</p>
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Click More Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleClickMore}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              aria-label="View more gallery images"
            >
              View Full Portfolio
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">1000+</div>
              <div className="text-gray-600 text-sm mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600 text-sm mt-2">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">9+</div>
              <div className="text-gray-600 text-sm mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">5+</div>
              <div className="text-gray-600 text-sm mt-2">Cities Served</div>
            </div>
          </div>
        </div>

        {/* Modal for Full View */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              
              <div className="bg-gray-900 flex items-center justify-center p-4 h-full">
                <div className="relative">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <p className="text-white font-semibold">{selectedImage.title}</p>
                    <p className="text-purple-300 text-sm">{selectedImage.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom CSS Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .group {
            animation: fade-in 0.6s ease-out backwards;
          }
          
          /* Smooth scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #a855f7, #ec489a);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #9333ea, #db2777);
          }
        `}</style>
      </div>
    </>
  );
};

export default Gallarysection;