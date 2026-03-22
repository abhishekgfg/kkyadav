import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../image/kklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-50">

      {/* 🔹 Top Bar */}
      <div className="bg-blue-900 text-sm text-white px-6 py-2 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-green-400 transition">
            <Phone size={16} /> +91  63923 70621
          </a>

          <a href="mailto:yourmail@gmail.com" className="flex items-center gap-2 hover:text-green-400 transition">
            <Mail size={16} /> kaushalyadav240587@gmail.com
          </a>
        </div>

        <div className="flex gap-3">
          <a href="#"><Facebook size={18} /></a>
          <a href="#"><Linkedin size={18} /></a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white px-6 py-4 flex justify-between items-center">

        {/* Logo with animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={Logo} alt="KK Yadav" className="h-10 w-28 object-cover" />
          <h1 className="text-2xl font-bold text-blue-900">
            K.K. Yadav Interior Work
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium text-gray-700">

          {navLinks.map((link, index) => (
            <motion.div key={index} whileHover={{ y: -2 }}>
              <Link
                to={link.path}
                className="relative group"
              >
                {link.name}

                {/* 🔥 Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* WhatsApp Button */}
         <motion.a
  href="https://wa.me/916392370621"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="ml-4 bg-green-600 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
>
  WhatsApp
</motion.a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* 🔹 Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50"
      >
        {/* Close */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-blue-900">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 py-6 text-gray-700 text-lg">

          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
            >
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </motion.div>
          ))}

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold"
          >
            Contact on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Navbar;