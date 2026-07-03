"use client";
import { motion } from "framer-motion";
import { Users, Award, Clock, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Patients Treated" },
  { icon: Star, value: "98%", label: "Patient Satisfaction" },
  { icon: Award, value: "7", label: "Specialty Programs" },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-brand-deeper to-brand-mid py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-white text-center"
            >
              <stat.icon size={28} className="mb-2 sm:mb-3 text-slate-300" />
              <span className="text-3xl sm:text-4xl font-bold">{stat.value}</span>
              <span className="text-slate-400 mt-1 font-medium text-sm sm:text-base">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
