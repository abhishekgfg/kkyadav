import React, { useState } from 'react';
import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";
import img6 from "../image/6.jpeg";
import img7 from "../image/7.jpeg";
import img8 from "../image/8.jpeg";
import img9 from "../image/9.jpeg";
import img10 from "../image/10.jpeg";
import img11 from "../image/11.jpeg";
import img12 from "../image/12.jpeg";
import img13 from "../image/13.jpeg";
import img14 from "../image/14.jpeg";
import img15 from "../image/15.jpeg";
import img16 from "../image/16.jpeg";
import img17 from "../image/17.jpeg";
import img18 from "../image/18.jpeg";
import img19 from "../image/19.jpeg";
import img20 from "../image/20.jpeg";
import img21 from "../image/21.jpeg";
import img22 from "../image/22.jpeg";
import img23 from "../image/23.jpeg";
import img24 from "../image/24.jpeg";
import img25 from "../image/25.jpeg";
import img26 from "../image/26.jpeg";
import img27 from "../image/27.jpeg";
import img28 from "../image/28.jpeg";
import img29 from "../image/29.jpeg";
import img30 from "../image/30.jpeg";
import img31 from "../image/31.jpeg";

const GalleryPage = () => {
  const images = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
    { id: 6, url: img6 },
    { id: 7, url: img7 },
    { id: 8, url: img8 },
    { id: 9, url: img9 },
    { id: 10, url: img10 },
    { id: 11, url: img11 },
    { id: 12, url: img12 },
    { id: 13, url: img13 },
    { id: 14, url: img14 },
    { id: 15, url: img15 },
    { id: 16, url: img16 },
    { id: 17, url: img17 },
    { id: 18, url: img18 },
    { id: 19, url: img19 },
    { id: 20, url: img20 },
    { id: 21, url: img21 },
    { id: 22, url: img22 },
    { id: 23, url: img23 },
    { id: 24, url: img24 },
    { id: 25, url: img25 },
    { id: 26, url: img26 },
    { id: 27, url: img27 },
    { id: 28, url: img28 },
    { id: 29, url: img29 },
    { id: 30, url: img30 },
    { id: 31, url: img31 }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Interior Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Gypsum False Ceiling | POP | PVC | Partitions | Painting | Complete Interior Solutions
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2">
              <i className="fas fa-camera mr-2"></i> 31+ Projects
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2">
              <i className="fas fa-heart mr-2"></i> 8,000+ Likes
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2">
              <i className="fas fa-star mr-2"></i> 500+ Happy Clients
            </div>
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="rgba(243, 244, 246, 1)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  alt={`Gallery ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
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
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="bg-gray-900 flex items-center justify-center p-4 h-full">
              <img
                src={selectedImage.url}
                alt={`Gallery ${selectedImage.id}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
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
  );
};

export default GalleryPage;