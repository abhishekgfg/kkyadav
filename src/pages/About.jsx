import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Star } from "lucide-react";
import VisionMissionSection from "./VisionMissionSection";

export default function About() {

  const statsData = [
    { id: 1, icon: <Users className="w-8 h-8 text-blue-600" />, label: "Happy Clients", value: 150 },
    { id: 2, icon: <Briefcase className="w-8 h-8 text-green-600" />, label: "Projects Completed", value: 300 },
    { id: 3, icon: <Star className="w-8 h-8 text-yellow-500" />, label: "Work Satisfaction", value: 95 },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      statsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 50);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, 50);
      });
    }
  }, [inView]);

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-20 overflow-hidden mt-0 md:mt-10" ref={ref}>
      
      {/* Background */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500 rounded-full opacity-20"></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-purple-500 rounded-full opacity-15"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-blue-600">K.K. Yadav Interior Work</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 leading-relaxed md:text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <strong>K.K. Yadav Interior Work</strong> provides professional interior
          services including POP, gypsum work, false ceiling, partition and painting.
          We work for homes, shops and offices with a focus on clean design and strong finishing.
          <br /><br />
          Our goal is simple — deliver quality work, complete projects on time,
          and keep our customers satisfied with reliable and affordable services.
          We believe in honest work, clear communication and long-term trust.
        </motion.p>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-blue-800">
                {counts[index]}{stat.label === "Work Satisfaction" ? "%" : "+"}
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

      <VisionMissionSection />
    </section>
  );
}