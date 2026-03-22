import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Noida Sector 62",
    rating: 5,
    text: "Excellent gypsum ceiling work! The team was professional and completed the project on time. Highly recommend K.K. Yadav Interior Work for their quality and attention to detail.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Greater Noida West",
    rating: 5,
    text: "Best interior designers in Delhi NCR! They did an amazing job with our POP design and painting. Very reasonable pricing and excellent finishing.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Dwarka, Delhi",
    rating: 5,
    text: "Outstanding work! The team transformed our home with beautiful gypsum false ceiling. Very punctual and dedicated. Will definitely hire again!",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Neha Gupta",
    location: "Indirapuram, Ghaziabad",
    rating: 4,
    text: "Great experience with K.K. Yadav Interior Work. The gypsum partition work is superb. Professional team and quality materials used.",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Faridabad",
    rating: 5,
    text: "Highly professional team! They did an excellent job with our office interior. Clean finishing and timely delivery. Best in Delhi NCR!",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-sm ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mx-2 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <FaQuoteLeft className="text-blue-100 text-4xl absolute top-4 left-4" />
      
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FaMapMarkerAlt className="text-blue-500 text-xs" />
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>
      
      <StarRating rating={testimonial.rating} />
      
      <p className="text-gray-600 mt-4 leading-relaxed line-clamp-4">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + slidesToShow >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - slidesToShow) : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + slidesToShow);
  
  // If we don't have enough items, wrap around
  const getVisibleItems = () => {
    if (visibleTestimonials.length === slidesToShow) return visibleTestimonials;
    return [...visibleTestimonials, ...testimonials.slice(0, slidesToShow - visibleTestimonials.length)];
  };

  const itemsToShow = getVisibleItems();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold text-sm">Testimonials</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serving Delhi NCR with excellence and quality interior solutions
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600 font-medium">Delhi • Noida • Ghaziabad • Faridabad • Gurgaon</span>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => { setIsAutoPlaying(false); prevSlide(); setTimeout(() => setIsAutoPlaying(true), 10000); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-blue-600 hover:text-white text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 -ml-4 md:-ml-6"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => { setIsAutoPlaying(false); nextSlide(); setTimeout(() => setIsAutoPlaying(true), 10000); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-blue-600 hover:text-white text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 -mr-4 md:-mr-6"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4 md:px-8">
            <div className="flex gap-6 transition-all duration-500 ease-in-out">
              {itemsToShow.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${currentIndex}-${idx}`}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx * slidesToShow); setTimeout(() => setIsAutoPlaying(true), 10000); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesToShow) === idx
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-blue-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 text-sm mt-2">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">1000+</div>
            <div className="text-gray-600 text-sm mt-2">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">5+</div>
            <div className="text-gray-600 text-sm mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">4.9</div>
            <div className="text-gray-600 text-sm mt-2">Rating</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/916392370621"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}