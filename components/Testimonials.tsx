"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: { name: "Martin Accetta", handle: "Back Pain & Herniated Disc" },
    text: "Sak, Jasmine and Gabby are a great crew! Sak has a deep knowledge of physical therapy which he explains in basic terms. I came to Ospre with acute back pain — within a few short weeks I was back to good health. I can't say enough about how great I was treated.",
  },
  {
    author: { name: "Ralitza Fortunova", handle: "Pelvic Fracture Recovery" },
    text: "The amazing team at Ospre got me walking again within weeks after I fractured my pelvis in a skiing accident. Sak devised a detailed and tough program in a moment when I was afraid to lift my leg. Not only did I recover but I graduated stronger, fitter and more confident.",
  },
  {
    author: { name: "Lindsay Owen", handle: "Hip Flexor Tendinitis & Running" },
    text: "Sak and his staff are truly outstanding — warm, welcoming, knowledgeable and most importantly, have put me back into running shape after just ~3 months of PT. Now I am stronger than ever, running with no pain. I highly recommend OSPRE PT for all ages and abilities!",
  },
  {
    author: { name: "Declan Zimmermann", handle: "Joint & Arthritis Pain" },
    text: "Sak and his team at OSPRE PT have been so helpful in treating joint and arthritis pain that was troubling me. The care is personal, dynamically adjusted as we go, and always warm, professional and friendly. Best of all, I have seen dynamic improvement during the weeks I have been going.",
  },
  {
    author: { name: "Rajiv Rohilla", handle: "Achilles Tendon Repair" },
    text: "What a wonderful place to receive personal and detailed attention from truly dedicated professionals. I needed PT after Achilles tendon repair surgery and was fortunate to find this place. My recovery has been brilliant — I don't think I would have received any better care anywhere else.",
  },
  {
    author: { name: "Craig Pogson", handle: "Long-Term Patient" },
    text: "After years of countless 'not good' physios, I was eventually recommended to visit Sak. For over a year he has gone the extra mile with my condition. I am now for the first time ever improving my motion, strength and ability. His incredible knowledge will absolutely change your life.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-slate-500 font-semibold text-base uppercase tracking-widest">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            Real Results, Real People
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4" aria-label="5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
            ))}
            <span className="text-slate-600 font-medium ml-2 text-base">5.0 · 67 Google Reviews</span>
          </div>
        </motion.div>
      </div>

      <TestimonialsSection testimonials={testimonials} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 flex justify-center">
        <a
          href="https://www.google.com/search?q=OSPRE+PT+Nyack+NY+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-slate-700 text-base font-medium underline underline-offset-4 transition-colors"
        >
          Read all 67 reviews on Google
        </a>
      </div>
    </section>
  );
}
