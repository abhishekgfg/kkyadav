import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaStar, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

// Features data
const features = [
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Experienced Team",
    description:
      "We have a skilled and experienced team that understands interior work and completes every project with proper care and attention.",
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-green-600 mb-4" />,
    title: "All Interior Work",
    description:
      "We provide all types of interior work like gypsum false ceiling, POP design, partition and painting for homes, shops and offices.",
  },
  {
    icon: <FaStar className="w-8 h-8 text-yellow-500 mb-4" />,
    title: "Good Quality Work",
    description:
      "We focus on clean finishing and strong work so your space looks good and lasts long.",
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-purple-600 mb-4" />,
    title: "Fair Price & Trust",
    description:
      "We do honest work at a fair price. Our goal is to keep customers happy and build long-term trust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-10 text-center relative overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-600 rounded-full opacity-20"></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-purple-600 rounded-full opacity-15"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Us
        </motion.h2>

        {/* Description */}
        <motion.p
className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          K.K. Yadav provides simple and reliable interior work. We focus on
          good quality, proper finishing and completing work on time.
        </motion.p>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-t-4 border-blue-600 transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {feature.title}
                </h3>
<p className="text-gray-600 text-base md:text-lg leading-relaxed">                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}