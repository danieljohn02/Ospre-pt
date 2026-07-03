"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-brand-deeper to-brand-deep">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-block bg-white/10 text-slate-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20">
            Start Today — No Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to move better
            <br />
            and feel stronger?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            Fill out our service interest form and we&apos;ll build a plan
            around your life, your goals, and your body.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <a href="#contact" className="flex items-center justify-center gap-3 bg-white text-slate-800 hover:bg-slate-100 rounded-full px-8 py-4 text-base sm:text-lg font-semibold transition-all w-full sm:w-auto min-h-[44px]">
              <Mail size={20} />
              Contact Us
            </a>
            <a href="tel:8456341625" className="flex items-center justify-center gap-3 bg-brand-mid hover:bg-brand-deep text-white rounded-full px-8 py-4 text-base sm:text-lg font-semibold transition-all border border-brand w-full sm:w-auto min-h-[44px]">
              <Phone size={18} />
              (845) 634-1625
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
