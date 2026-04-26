"use client";
import { motion } from "framer-motion";
import { ClipboardList, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Initial Assessment",
    description:
      "We start with a thorough evaluation of your movement, strength, and goals — no commitment required.",
  },
  {
    icon: Target,
    step: "02",
    title: "Custom Plan",
    description:
      "Your therapist builds a personalized program targeting your specific needs and timeline.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Recover & Perform",
    description:
      "Progress with expert guidance, track measurable results, and get back to doing what you love.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-teal-100" />
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
                  <step.icon size={32} className="text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
