import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "False Ceiling Work",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Gypsum false ceiling</li>
          <li>POP ceiling design</li>
          <li>Modern and simple ceiling styles</li>
        </ul>
      ),
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Partition Work",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Gypsum partition</li>
          <li>Office and shop partitions</li>
          <li>Strong and clean finishing</li>
        </ul>
      ),
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "Painting Work",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Interior wall painting</li>
          <li>Exterior painting</li>
          <li>Smooth and clean finish</li>
        </ul>
      ),
      icon: <FileText className="w-10 h-10 text-yellow-600" />,
    },
  ];

  return (
    <section className="pt-12 md:pt-16 pb-8 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We provide interior work services for homes, shops and offices.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col text-left hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-blue-800">
                  {service.title}
                </h3>
              </div>

              <div className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}