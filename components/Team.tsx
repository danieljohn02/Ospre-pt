"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="py-10 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-slate-400 font-semibold text-sm uppercase tracking-widest">
            Our Expert
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            Meet the Owner
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow flex flex-col md:flex-row"
        >
          <div className="flex items-center justify-center p-8 shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
              <Image src="/sak.jpg" alt="Sak Vanichpong" width={192} height={192} className="w-full h-full object-cover object-center scale-100" />
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-8 pt-0 md:py-8 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900">Sak Vanichpong, MSPT</h3>
            <p className="text-slate-500 font-medium mt-1">Owner & Licensed Physical Therapist</p>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Practicing since 1999, Sak holds degrees in Biochemistry (SUNY Geneseo),
              Health Sciences, and a Master&apos;s in Physical Therapy from the College of Staten Island.
              He specializes in orthopedic and sports physical therapy with certifications in vestibular
              rehabilitation, Selective Functional Movement Assessment, SPORTSMETRICS, and Titleist
              Performance Institute MP2.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["MSPT", "SFMA", "SPORTSMETRICS", "TPI MP2", "Vestibular Rehab"].map((cert) => (
                <span key={cert} className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
