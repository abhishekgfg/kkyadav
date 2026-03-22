// PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, Users, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      content:
        "We may collect personal details such as your name, email address, phone number, resume, and professional information when you register, apply for jobs, or contact us.",
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>To match candidates with suitable job opportunities</li>
          <li>To communicate updates and services</li>
          <li>To maintain compliance with regulations</li>
          <li>To improve our services and offerings</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Data Protection",
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      content:
        "We implement strict security measures to protect your data. Personal information is only shared with employers or partners with your consent and as required by law.",
    },
    {
      id: 4,
      title: "Third-Party Services",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      content:
        "We may use trusted third-party services for job applications, communication, and analytics. These providers are bound to maintain data confidentiality.",
    },
    {
      id: 5,
      title: "Your Rights",
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      content: (
        <p>
          You have the right to access, update, or request deletion of your
          personal data. For inquiries, contact us at{" "}
          <a
            href="mailto:baryahrservices@gmail.com"
            className="text-blue-700 font-medium hover:underline"
          >
            baryahrservices@gmail.com
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ShieldCheck className="w-16 h-16 text-blue-700 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At{" "}
            <span className="font-semibold text-blue-900">
              Barya HR Services
            </span>
            , your privacy is our top priority. This page explains how we
            collect, use, and protect your personal information with complete
            transparency.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((sec, index) => (
            <motion.div
              key={sec.id}
              className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {sec.icon}
                <h2 className="text-2xl font-semibold text-blue-800">
                  {sec.title}
                </h2>
              </div>
              <div className="text-gray-700 leading-relaxed">{sec.content}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions About Your Privacy?
          </h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            We're committed to keeping your data safe. Reach out to us anytime
            for clarifications or concerns regarding your personal information.
          </p>
          <a
            href="mailto:baryahrservices@gmail.com"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="text-sm text-gray-500 mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Last updated: August 2025
        </motion.p>
      </div>
    </section>
  );
}
