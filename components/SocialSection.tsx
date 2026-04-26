"use client";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function SocialSection() {
  return (
    <section className="py-14 sm:py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-slate-400 font-semibold text-sm uppercase tracking-widest">
            Stay Connected
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Follow Us on Social Media
          </h2>
          <p className="text-slate-400 max-w-md">
            See our latest updates, patient tips, and clinic news on Instagram and Facebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <a
              href="https://www.instagram.com/osprept/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md min-h-[44px]"
            >
              <Instagram size={20} className="text-pink-500" />
              @osprept on Instagram
            </a>
            <a
              href="https://www.facebook.com/OSPREPT/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md min-h-[44px]"
            >
              <Facebook size={20} className="text-blue-600" />
              OSPRE PT on Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
