import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop"; // ✅ import
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Portal from "./pages/Portal";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <Router>
      <HelmetProvider>
      <Navbar />
      <ScrollToTop /> {/* ✅ ensures scroll goes to top on every route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-service" element={<TermsOfService />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/gallery" element={<GalleryPage />} /> {/* catch-all route */}
      </Routes>
      <Footer />
      </HelmetProvider>
    </Router>
  );
}
