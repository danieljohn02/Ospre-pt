"use client";
import { motion } from "framer-motion";
import { Activity, Dumbbell, PersonStanding, Brain, Heart, ShieldCheck, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Movement Testing",
    slug: "movement-testing",
    description: "Helping you develop proper movement patterns to reduce risk of imbalance or injuries.",
  },
  {
    icon: Dumbbell,
    title: "Sports Conditioning",
    slug: "sports-conditioning",
    description: "We individualize your program to be either very simple, or incredibly detailed — based on your goals.",
  },
  {
    icon: PersonStanding,
    title: "Runners Program",
    slug: "runners-program",
    description: "Run your best by developing the most efficient effort needed to minimize pain and injury.",
  },
  {
    icon: Brain,
    title: "Balance Programs",
    slug: "balance-programs",
    description: "We treat BPPV and other balance disorders using current treatment strategies.",
  },
  {
    icon: Heart,
    title: "Rehabilitation",
    slug: "rehabilitation",
    description: "Hands-on, one-on-one rehab combining manual therapy and therapeutic exercise to get you back to full function.",
  },
  {
    icon: ShieldCheck,
    title: "Injury Prevention",
    slug: "injury-prevention",
    description: "Proactive screening and targeted programming to close the gaps in your body's resilience before problems start.",
  },
  {
    icon: Zap,
    title: "PT Fit",
    slug: "pt-fit",
    description: "A performance-focused continuation program that builds on your rehab gains so you come back stronger than before.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-slate-500 font-semibold text-base uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            Specialized Programs for Every Need
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-base sm:text-base">
            From elite athletes to everyday movers, we have a program designed
            specifically for your goals and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {services.map((service, i) => (
            <motion.a
              key={service.slug}
              href={`/services#${service.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-slate-100 rounded-xl px-4 py-3 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 text-slate-600 shrink-0">
                  <service.icon size={16} />
                </div>
                <p className="text-lg font-bold text-slate-800 leading-tight">{service.title}</p>
              </div>
              <p className="text-slate-500 text-base leading-snug flex-1">{service.description}</p>
              <div className="flex justify-end mt-2">
                <span className="flex items-center gap-1.5 text-slate-500 text-base font-semibold group-hover:text-slate-600 group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-deep hover:bg-brand-mid text-white font-semibold px-6 py-3 rounded-full transition-all text-sm min-h-[44px]"
          >
            View All Services <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
