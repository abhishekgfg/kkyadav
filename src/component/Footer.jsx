import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white py-12">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 100,0 50,100" stroke="white" strokeWidth="0.5" fill="none" />
          <polygon points="100,0 200,0 150,100" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT */}
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <img
              src="/src/image/logo.png"
              alt="Interior Work Logo"
              className="h-14 w-14 object-contain bg-white p-2 rounded-full"
            />
            <h1 className="text-xl md:text-2xl font-bold">
              K.K. Yadav Interior Work
            </h1>
          </div>

          <p className="mb-4 text-gray-200 text-sm leading-relaxed">
            We provide gypsum ceiling, POP design, partition and painting work
            for homes, shops and offices with clean finishing and reliable service.
          </p>

          {/* Social */}
          <div className="flex space-x-4 mb-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-900 transition rounded-lg"
          >
            ↑ Back to Top
          </button>
        </div>

        {/* MIDDLE */}
        <div>
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="font-semibold mb-2">Our Services</h2>
          <ul className="space-y-1 text-sm">
            <li>Gypsum False Ceiling</li>
            <li>POP Design Work</li>
            <li>Gypsum Partition</li>
            <li>Painting Work</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-center border-t border-blue-700 pt-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} K.K. Yadav Interior Work. All Rights Reserved.
      </div>
    </footer>
  );
}