import React from "react";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Home,
  Layers,
  Grid,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  Briefcase,
  ThumbsUp,
} from "lucide-react";
import Services from "./Services";

export default function ServicesPage() {
  const services = [
    {
      icon: <Layers className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" strokeWidth={1.5} />,
      title: "Gypsum False Ceiling",
      desc: "Modern gypsum ceiling designs for homes, shops and offices with proper finishing and long-lasting quality.",
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <Grid className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" strokeWidth={1.5} />,
      title: "POP Design Work",
      desc: "Stylish POP ceiling and wall designs that give your space a premium and modern look.",
      gradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: <Home className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" strokeWidth={1.5} />,
      title: "Gypsum Partition",
      desc: "Strong and clean gypsum partitions for offices, rooms and commercial spaces.",
      gradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: <Paintbrush className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" strokeWidth={1.5} />,
      title: "Painting Work",
      desc: "Interior and exterior painting with smooth finishing and long-lasting colors.",
      gradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
    },
  ];

  const features = [
    { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, text: "High Quality Material" },
    { icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Clean & Professional Work" },
    { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "On-Time Completion" },
    { icon: <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Affordable Pricing" },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Experienced Team" },
    { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Customer Satisfaction" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      desc: "We discuss your requirements, budget, and provide expert suggestions.",
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      step: "02",
      title: "Site Visit",
      desc: "Our team visits your location for measurements and detailed assessment.",
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      step: "03",
      title: "Design & Quote",
      desc: "We share designs, material specifications, and transparent pricing.",
      icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      step: "04",
      title: "Execution",
      desc: "Professional execution with regular updates and quality checks.",
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

 const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Sector 62, Noida",
    text: "Excellent work by the team! The gypsum ceiling looks amazing and they completed the work on time. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    location: "Indirapuram, Ghaziabad",
    text: "Very professional work. The POP design in my living room completely changed the look of my home. Great finishing quality.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    location: "Greater Noida West",
    text: "Affordable pricing with very good quality. The partition work in my office is perfect. Will definitely work again.",
    rating: 5,
  },
];

  return (
    <>
      {/* Hero Section - Fixed Overflow */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Professional Interior Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Transform Your Space
            <span className="block text-blue-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              With Expert Craftsmanship
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-blue-100 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We provide complete interior solutions including gypsum ceiling, POP design, 
            painting and partition work with clean finishing and modern style.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://wa.me/916392370621"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all text-sm sm:text-base"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats - Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/20">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Expert Team" },
              { value: "7+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-xs sm:text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Fixed Overflow */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 mt-2">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Professional interior work for homes, shops and offices with premium quality materials.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {services.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${item.gradient} border ${item.borderColor} p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="mb-3 sm:mb-4 md:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 sm:mt-4 flex items-center gap-1 text-blue-600 font-medium text-xs sm:text-sm">
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Why Trust Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 mt-2">
                Why Choose Our Work?
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 sm:mb-6"></div>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                We focus on quality, finishing and customer satisfaction. Our team ensures 
                every project is executed with precision and care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="text-green-600 flex-shrink-0">{f.icon}</div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-6 md:mt-0">
              <div className="absolute -top-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-100 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Need Interior Work?</h3>
                </div>
                <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-blue-100 leading-relaxed">
                  Contact us for all types of interior work. Get a free consultation and quote today!
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="https://wa.me/916392370621"
                    className="flex items-center justify-between gap-2 bg-white text-blue-700 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  >
                    <span>Contact Now</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>kaushalyadav240587@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Simplified */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 mb-3 sm:mb-4">
              How We Work
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
              We follow a streamlined process to ensure quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="relative inline-block">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-4 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
              We take pride in delivering exceptional results that our clients love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Space?</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Get in touch with us today for a free consultation and quote. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+91 6392370621</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">interior@example.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <form
              className="space-y-3 sm:space-y-4 mt-6 md:mt-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
              />
              <textarea
                rows={3}
                placeholder="Tell us about your project..."
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
              ></textarea>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2024 Interior Experts. All rights reserved.</p>
          </div>
        </div>
      </section> */}

      <Services />
    </>
  );
}