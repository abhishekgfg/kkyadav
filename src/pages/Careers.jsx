// src/pages/Careers.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    cover: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, role, cover } = formData;

    const message = `Hello Barya HR,%0A
I would like to apply for a position.%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Role Applied:* ${role}%0A
*Cover Letter:* ${cover || "N/A"}`;

    window.open(`https://wa.me/919773784887?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-900 text-white h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Your Career with Barya HR
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl z-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join our team of skilled professionals and help shape the future of HR consulting.
        </motion.p>
        <motion.div
          className="mt-6 flex gap-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#apply"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition"
          >
            Apply Now
          </a>
          <a
            href="#contact"
            className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Careers Form Section */}
      <section
        id="apply"
        className="relative bg-gradient-to-r from-purple-50 via-blue-50 to-teal-50 py-20 overflow-hidden"
      >
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-20 "></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-15 "></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500 rounded-full opacity-10 "></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Join Our Team
          </motion.h2>

          <motion.p
            className="text-gray-700 md:text-lg mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Looking for your next opportunity? Become part of Barya HR Services and grow with a dynamic, innovative team.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                required
              />
            </div>

            {/* Job Role Dropdown */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Position Applying For
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                required
              >
                <option value="">Select a role</option>
                <option value="HR Consultant">HR Consultant</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Talent Acquisition Specialist">
                  Talent Acquisition Specialist
                </option>
                <option value="Operations Manager">Operations Manager</option>
              </select>
            </div>

            {/* Resume Upload (UI only) */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Upload Resume
              </label>
              <input
                type="file"
                className="w-full p-3 border rounded-lg cursor-pointer hover:border-blue-600 transition"
              />
              <p className="text-xs text-gray-500 mt-1">
                * Resume upload is for UI only. Please attach it directly on
                WhatsApp after applying.
              </p>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Cover Letter (Optional)
              </label>
              <textarea
                name="cover"
                value={formData.cover}
                onChange={handleChange}
                placeholder="Write a brief cover letter..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
                rows={4}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now via WhatsApp
            </motion.button>
          </motion.form>

          {/* Additional Details / Benefits */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 mt-0 md:mt-10">
              <FaUsers className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Collaborative Team</h3>
              <p className="text-gray-600 text-sm text-center">
                Work with experienced professionals in a collaborative and
                innovative environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <FaLightbulb className="w-10 h-10 text-yellow-500 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Innovative Projects</h3>
              <p className="text-gray-600 text-sm text-center">
                Get involved in exciting HR solutions and staffing innovations
                that make a difference.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <FaHandshake className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Employee Benefits</h3>
              <p className="text-gray-600 text-sm text-center">
                Enjoy competitive compensation, growth opportunities, and a
                supportive work environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 rounded-full opacity-20 "></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full opacity-10 "></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-500 rounded-full opacity-15 "></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="mb-12 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Have questions or want to know more about our HR solutions? Connect
            with us directly!
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <FaPhoneAlt className="w-10 h-10 text-yellow-400 mb-3 animate-bounce" />
              <h3 className="text-black font-semibold mb-2">Call Us</h3>
              <p className="text-black text-sm">+91 9773784887</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <FaEnvelope className="w-10 h-10 text-green-400 mb-3 animate-bounce" />
              <h3 className="text-black font-semibold mb-2">Email Us</h3>
              <p className="text-black text-sm"> baryahrservices@gmail.com</p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <FaMapMarkerAlt className="w-10 h-10 text-purple-400 mb-3 animate-bounce" />
              <h3 className="text-black font-semibold mb-2">Visit Us</h3>
              <p className="text-black text-sm">G-351, SECTOR-56 NOIDA U.P.-201301</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
