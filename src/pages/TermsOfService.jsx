// TermsOfService.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  FileText,
  AlertCircle,
  Lock,
  ShieldCheck,
  Globe,
  Mail,
} from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <Book className="w-7 h-7 text-blue-600" />,
      content:
        "By accessing or using Barya HR Services (the \"Service\"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use the Service.",
    },
    {
      id: "services",
      title: "2. Our Services",
      icon: <FileText className="w-7 h-7 text-blue-600" />,
      content:
        "We provide recruitment, staffing, HR consulting, payroll assistance and related manpower services. Descriptions of services are available on our website and may be updated from time to time.",
    },
    {
      id: "eligibility",
      title: "3. User Eligibility & Obligations",
      icon: <AlertCircle className="w-7 h-7 text-blue-600" />,
      content:
        "You represent that you are legally able to enter into contracts. You agree to provide accurate information, to use the Service only for lawful purposes, and to not impersonate others or interfere with the Service.",
    },
    {
      id: "intellectual",
      title: "4. Intellectual Property",
      icon: <FileText className="w-7 h-7 text-blue-600" />,
      content:
        "All content on the Site (text, design, graphics, logos) is owned or licensed by Barya HR and protected by copyright and other laws. You may not copy, reproduce, or create derivative works without permission.",
    },
    {
      id: "privacy",
      title: "5. Privacy & Data",
      icon: <Lock className="w-7 h-7 text-blue-600" />,
      content:
        "We collect and process personal data as described in our Privacy Policy. By using the Service you consent to such collection and processing for the purpose of providing HR and staffing services.",
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      content:
        "To the fullest extent permitted by law, Barya HR Services and its affiliates will not be liable for indirect, incidental, special or consequential damages arising out of or in connection with the Service. Our total liability shall not exceed fees paid to us for the particular service.",
    },
    {
      id: "termination",
      title: "7. Termination",
      icon: <AlertCircle className="w-7 h-7 text-blue-600" />,
      content:
        "We may suspend or terminate access to the Service for violations of these Terms or for legal reasons. Upon termination, any outstanding obligations that by their nature survive termination will remain in effect.",
    },
    {
      id: "changes",
      title: "8. Changes to Terms",
      icon: <Globe className="w-7 h-7 text-blue-600" />,
      content:
        "We may update these Terms from time to time. Material changes will be posted on the Site with an updated \"Last updated\" date. Continued use constitutes acceptance of the revised Terms.",
    },
    {
      id: "governing",
      title: "9. Governing Law",
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      content:
        "These Terms are governed by the laws of India without regard to conflict-of-law provisions. Any dispute will be subject to the exclusive jurisdiction of competent courts in Delhi, India.",
    },
    {
      id: "contact",
      title: "10. Contact",
      icon: <Mail className="w-7 h-7 text-blue-600" />,
      content:
        <>
          If you have questions about these Terms or need assistance, contact us at{" "}
          <a href="mailto:baryahrservices@gmail.com" className="text-blue-700 hover:underline">
            baryahrservices@gmail.com
          </a>
          .
        </>,
    },
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg mb-4">
            <Book className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These Terms govern your access and use of services provided by{" "}
            <span className="font-semibold text-blue-800">Barya HR Services</span>.
            Please read them carefully.
          </p>
        </motion.div>

        {/* Two-column layout: TOC + Content */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* TOC */}
          <aside className="md:col-span-4">
            <motion.div
              className="sticky top-28 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-3">On this page</h3>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-gray-700 hover:text-blue-700 transition"
                  >
                    • {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t">
                <p className="text-xs text-gray-500">
                  Last updated: <span className="font-medium">August 2025</span>
                </p>
                <a
                  href="mailto:baryahrservices@gmail.com"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                >
                  <Mail className="w-4 h-4" /> Contact Support
                </a>
              </div>
            </motion.div>
          </aside>

          {/* Content */}
          <div className="md:col-span-8 space-y-6">
            {sections.map((sec, idx) => (
              <motion.article
                id={sec.id}
                key={sec.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none">{sec.icon}</div>
                  <div>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-2">{sec.title}</h2>
                    <div className="text-gray-700 leading-relaxed">{sec.content}</div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Important notes area */}
            <motion.div
              className="mt-6 bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-400 rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-700">Important</h4>
                  <p className="text-gray-700 text-sm">
                    These Terms do not form an employment contract unless explicitly stated in a separate written agreement.
                    For role-specific offers and contracts please refer to your individual written agreement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8 rounded-2xl p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl font-bold">Questions about these terms?</h3>
                <p className="text-blue-100 mt-1">We're here to help — contact our support team anytime.</p>
              </div>

              <div className="flex gap-3">
                <a
                  href="mailto:baryahrservices@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:opacity-95 transition"
                >
                  <Mail className="w-4 h-4" /> Email Us
                </a>

                <a
                  href="https://wa.me/919773784887?text=Hello%20Barya%20HR%20Services%2C%20I%20have%20a%20query%20about%20the%20Terms%20of%20Service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/25 rounded-lg font-semibold transition"
                >
                  <Globe className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
