"use client";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    type: "single",
    src: "/clinic.jpg",
    alt: "Patient doing balance training at OSPRE PT",
  },
  {
    type: "double",
    left: { src: "/clinic2.jpg", alt: "Patient doing barbell squat at OSPRE PT" },
    right: { src: "/clinic3.jpg", alt: "Patient doing lunge stretch at OSPRE PT" },
  },
  {
    type: "single",
    src: "/clinic8.jpg",
    alt: "Patient training at OSPRE PT with American flag",
  },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Text */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-36 pb-16 text-center flex flex-col items-center gap-6">
        <span className="inline-block bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20">
          Optimum Sports Performance & Rehabilitation
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Investing in your health
          <br />
          <span className="text-slate-300">because you&apos;re worth it</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl px-2">
          Servicing Rockland County since 2018 — helping athletes, weekend warriors, and everyday people recover faster, move better, and get back to doing what they love.
        </p>
        <a
          href="tel:8456341625"
          className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-teal-900/40"
        >
          <Phone size={20} />
          Call Now — (845) 634-1625
        </a>
      </div>

      {/* 3D Scroll Card with slideshow */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-0 overflow-hidden" style={{ perspective: "1200px" }}>
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            transformOrigin: "top center",
            boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
          }}
          className="w-full h-[28rem] md:h-[38rem] border-4 border-[#6C6C6C] p-2 md:p-4 bg-[#222222] rounded-[30px] shadow-2xl"
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {(() => {
                  const slide = slides[current];
                  if (slide.type === "single") {
                    return (
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        draggable={false}
                        priority
                      />
                    );
                  }
                  return (
                    <div className="flex h-full gap-1">
                      <div className="relative w-1/2 h-full">
                        <Image
                          src={slide.left.src}
                          alt={slide.left.alt}
                          fill
                          className="object-cover [object-position:100%_100%] sm:[object-position:50%_100%]"
                          draggable={false}
                        />
                      </div>
                      <div className="relative w-1/2 h-full">
                        <Image
                          src={slide.right.src}
                          alt={slide.right.alt}
                          fill
                          className="object-cover"
                          style={{ objectPosition: "center 70%" }}
                          draggable={false}
                        />
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
