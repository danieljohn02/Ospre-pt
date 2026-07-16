"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  { src: "/logos/apta.svg", alt: "APTA" },
  { src: "/logos/sportsmetrics.png", alt: "SportsMetrics" },
  { src: "/logos/tpi.svg", alt: "Titleist Performance Institute" },
  { src: "/logos/dizzy.png", alt: "Dizzy.com" },
];

export default function CertBanner() {
  return (
    <section className="bg-brand-deeper border-b border-brand-deep py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest shrink-0">
            Certified by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.alt}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={180}
                  height={72}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
