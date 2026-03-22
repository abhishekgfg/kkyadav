// Portal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaBuilding, FaUserShield, FaRocket } from "react-icons/fa";

export default function Portal() {
  const portals = [
    {
      id: 1,
      title: "Candidate Portal",
      description:
        "Search jobs, apply easily, track applications, and update your resume.",
      icon: <FaUserTie className="w-12 h-12 text-blue-600" />,
      link: "#candidate",
    },
    {
      id: 2,
      title: "Client Portal",
      description:
        "Find the best talent, manage recruitment, and connect with candidates quickly.",
      icon: <FaBuilding className="w-12 h-12 text-green-600" />,
      link: "#client",
    },
    {
      id: 3,
      title: "Admin Portal",
      description:
        "Monitor system activity, manage users, and ensure smooth operations.",
      icon: <FaUserShield className="w-12 h-12 text-purple-600" />,
      link: "#admin",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400 rounded-full opacity-20 animate-ping"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to <span className="text-blue-600">Barya HR Portal</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center md:text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Manage everything in one place – whether you are a candidate, a client,
          or an admin. Access your personalized portal and experience seamless
          hiring and management.
        </motion.p>

        {/* Portal Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {portals.map((portal, index) => (
            <motion.a
              key={portal.id}
              href={portal.link}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-3 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="mb-6">{portal.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {portal.title}
              </h3>
              <p className="text-gray-600 mb-6">{portal.description}</p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter Portal
              </motion.button>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <FaRocket className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-6">
            Choose your portal and unlock a world of opportunities today.
          </p>
          <a
            href="#candidate"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
          >
            Start Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
