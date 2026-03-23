import React from "react";
import Services from "./Services";
import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import { FaBuilding } from "react-icons/fa";
import VisionMissionSection from "./VisionMissionSection";
import { Link } from "react-router-dom";
import Gallarysection from "./Gallarysection";
import Testimonials from "./testimonials";


function Home() {
     const features = [
    "Experienced Team",
    "Industry Expertise",
    "Proven Results",
    "Client Satisfaction",
  ];

  const clients = [
  { name: "Company A", logo: <FaBuilding className="w-12 h-12 text-blue-600" /> },
  { name: "Company B", logo: <FaBuilding className="w-12 h-12 text-green-600" /> },
  { name: "Company C", logo: <FaBuilding className="w-12 h-12 text-yellow-500" /> },
  { name: "Company D", logo: <FaBuilding className="w-12 h-12 text-purple-600" /> },
];

  // WhatsApp number
  const whatsappNumber = "916392370621";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
  <div className="w-full">
  {/* 🔹 Hero Section */}
<section className="relative bg-blue-900 text-white h-[80vh] md:h-[90vh] flex items-center justify-center text-center">
  {/* Background Image Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 px-4 md:px-6 lg:px-0 max-w-5xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      We do interior work for your home and office
    </h1>

    <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
      K.K. Yadav provides POP, gypsum and painting work. We do false ceiling,
      POP design, partition and painting work with good quality at a fair price.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button 
        onClick={() => window.open(whatsappLink, "_blank")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
      >
        Contact Now
      </button>

      <Link to="/gallery">
        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-lg">
          View Work
        </button>
      </Link>
    </div>
  </div>
</section>


      {/* 🔹 About Us */}
    
<section className="container mx-auto py-16 px-6">
    
  <div className="grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side: Images */}
    <div className="grid grid-cols-2 gap-4">
      <img
        src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        alt="Interior Work 1"
        className="rounded-xl object-cover w-full h-[300px] -mb-[40px]"
      />
      <img
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        alt="Interior Work 2"
        className="rounded-xl object-cover w-full h-[300px] mt-[40px]"
      />
    </div>

    {/* Right Side: Text */}
    <div>
    
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
        About K.K. Yadav Interior Work
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        K.K. Yadav provides POP, gypsum and painting work for homes, shops and offices. 
        We do false ceiling, POP design, gypsum partition and painting work with proper finishing. 
        Our focus is to give good quality work at a fair price.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
      >
        WhatsApp Now
      </a>

    </div>
  </div>
</section>

<Gallarysection />

<VisionMissionSection />
      {/* 🔹 Our Services */}
     <Services />  
      <WhyChooseUs />
    

<section className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center py-20 overflow-hidden">
  {/* Background decorative shapes */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>

  <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10">
    
    {/* Left Side Intro */}
    <motion.div
      className="lg:w-1/3 flex flex-col justify-center text-left"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-blue-900 mb-6 -mt-7">
        Start Your Interior Work With Us
      </h1>

      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Whether you want to improve your home, shop or office, K.K. Yadav
        is here to help. We provide gypsum ceiling, POP design, partition
        and painting work with proper finishing and simple pricing.
      </p>

      <button
        onClick={() => window.open(whatsappLink, "_blank")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 w-48"
      >
        Contact Now
      </button>
    </motion.div>

    {/* Right Side Cards */}
    <motion.div
      className="lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {clients.map((client, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="mb-4">{client.logo}</div>

          <h3 className="text-xl font-semibold text-blue-800">
            {client.name}
          </h3>

          <p className="text-gray-600 text-base mt-2 text-center">
            We provide quality interior work with clean finishing and
            reliable service.
          </p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>


      {/* 🔹 Call to Action */}
    <section className="relative bg-white text-blue-900 py-24 overflow-hidden">
  {/* Background decorative shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full opacity-20"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full opacity-15"></div>

  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

    {/* Heading */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-6 md:mb-8"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Let’s Make Your Space Better
    </motion.h2>

    {/* Subtext */}
    <motion.p
      className="text-lg md:text-xl mb-10 text-blue-900 max-w-2xl mx-auto leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      If you want to improve your home, shop or office, K.K. Yadav is here
      to help. We provide gypsum ceiling, POP design, partition and painting
      work with clean finishing and reliable service.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col md:flex-row justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="flex gap-4 justify-center flex-wrap">

        <button
          onClick={() => window.open(whatsappLink, "_blank")}
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Contact Now
        </button>

        <Link to="/services">
          <button className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:scale-105">
            Our Services
          </button>
        </Link>

      </div>
    </motion.div>

    {/* Small CTA note */}
    <motion.p
      className="mt-6 text-blue-900 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      Trusted for quality work, proper finishing and on-time service.
    </motion.p>

  </div>
</section>
<Testimonials />
    </div>
  );
}

export default Home;