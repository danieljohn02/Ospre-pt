"use client";
import { motion } from "framer-motion";

const insurances = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "United Healthcare",
  "Medicare", "Humana", "Oxford Health", "Empire BCBS",
];

export default function Insurance() {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-slate-700 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-slate-400 font-semibold text-xs uppercase tracking-widest">
            Insurance & Payment
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            We accept most major insurance plans
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Don&apos;t see yours listed? Many plans we work with aren&apos;t shown — and those without
            insurance are often surprised by how affordable PT can be.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {insurances.map((ins, i) => (
            <motion.div
              key={ins}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-slate-800 border border-slate-700 text-white font-semibold px-3 py-2 rounded-lg text-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
              {ins}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800 border border-teal-600 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div>
            <p className="text-white font-bold text-base">Don&apos;t see your insurance listed?</p>
            <p className="text-slate-300 text-base mt-1">
              We work with many more plans — call and we&apos;ll verify your coverage in minutes.
            </p>
          </div>
          <a
            href="tel:8456341625"
            className="shrink-0 inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white font-bold px-6 py-3 rounded-full transition-all text-sm min-h-[44px] whitespace-nowrap"
          >
            Call (845) 634-1625
          </a>
        </motion.div>
      </div>
    </section>
  );
}
