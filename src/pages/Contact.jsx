import React, { useState } from "react";
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
        >
          Contact <span className="text-blue-600">Us</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-700 md:text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Need gypsum ceiling, POP design or painting work?  
          Contact us for reliable interior services with clean finishing and fair pricing.
        </motion.p>

        {/* Contact Info */}
        <motion.div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
            <FaMapMarkerAlt className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-gray-600 text-sm text-center whitespace-pre-line">
              {`House No. 2, Gali No. 15, D Block
Surendra Colony, Jharoda Part 1
North Delhi,
Delhi - 110084`}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
            <FaEnvelope className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 text-sm text-center">
              kaushalyadav240587@gmail.com
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
            <FaPhoneAlt className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Call / WhatsApp</h3>
            <p className="text-gray-600 text-sm text-center">
              +91 6392370621
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-left"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Work details (Gypsum ceiling / POP / Painting / Partition...)"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
            rows={4}
          ></textarea>

          <motion.button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition"
          >
            Send on WhatsApp
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}