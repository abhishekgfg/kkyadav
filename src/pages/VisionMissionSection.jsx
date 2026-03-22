import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, ShieldCheck, Globe } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-sky-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start justify-between gap-12"
        >

          {/* LEFT */}
          <div className="flex-1">

            <div className="inline-flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-base font-semibold">
                Our Work
              </span>
              <span className="text-base text-slate-500">
                Simple • Clean • Reliable
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              We do interior work that makes your space look better
            </h2>

            <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              K.K. Yadav provides POP, gypsum and painting work for homes,
              shops and offices. We handle all types of interior work like
              false ceiling, POP design, partitions and wall painting.
            </p>

            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Our focus is simple — do clean work, give proper finishing
              and complete the work on time. We provide good quality work
              at a fair and reasonable price.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://wa.me/916392370621"
                className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold"
              >
                Contact Now
              </a>

              <a
                href="/services"
                className="border border-slate-300 text-slate-700 px-5 py-3 rounded-xl text-lg"
              >
                View Services
              </a>
            </div>

            {/* VALUES */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md">
              <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-base">Good Quality Work</span>
              </div>

              <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-base">Trusted Service</span>
              </div>

              <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <span className="text-base">Proper Finishing</span>
              </div>

              <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                <Globe className="w-6 h-6 text-blue-600" />
                <span className="text-base">All Interior Work</span>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white rounded-xl p-5 text-center shadow">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-slate-500">Projects Done</div>
              </div>

              <div className="bg-white rounded-xl p-5 text-center shadow">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>

              <div className="bg-white rounded-xl p-5 text-center shadow">
                <div className="text-2xl font-bold">Best</div>
                <div className="text-sm text-slate-500">Finishing Work</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div className="flex-1 max-w-lg w-full">

            <div className="bg-white rounded-2xl p-6 shadow mb-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Goal
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Our goal is to provide simple, clean and strong interior
                work that improves the look of your home, shop or office.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                What We Do
              </h3>

              <p className="text-base text-slate-600 mb-3">
                We provide different types of interior work services:
              </p>

              <ul className="text-base text-slate-600 space-y-2">
                <li>• Gypsum false ceiling work</li>
                <li>• POP design and ceiling work</li>
                <li>• Gypsum partition work</li>
                <li>• Interior and exterior painting</li>
              </ul>

              <div className="mt-4">
                <a
                  href="https://wa.me/916392370621"
                  className="text-green-600 text-lg font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}