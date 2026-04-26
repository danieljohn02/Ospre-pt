"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MarqueeStripProps {
  children: React.ReactNode;
  speed?: number; // px per second
  className?: string;
}

export function MarqueeStrip({ children, speed = 80, className }: MarqueeStripProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Refs so closures always read the latest value without re-registering effects
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const isUserControlled = useRef(false); // true during nudge/wheel, resumes after delay
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const startPointerX = useRef(0);
  const startX = useRef(0);

  const getHalf = () => (stripRef.current?.scrollWidth ?? 0) / 2;

  // Keep x inside [-half, 0] so the value never drifts to extreme numbers
  const normalise = (val: number) => {
    const half = getHalf();
    if (half === 0) return val;
    let v = val;
    while (v < -half) v += half;
    while (v > 0) v -= half;
    return v;
  };

  // ── Auto-scroll ────────────────────────────────────────────────────────────
  useAnimationFrame((_, delta) => {
    if (
      isDragging.current ||
      isHovered.current ||
      isUserControlled.current ||
      !stripRef.current
    ) return;
    const half = getHalf();
    if (half === 0) return;
    let next = x.get() - (delta * speed) / 1000;
    if (next <= -half) next += half;
    x.set(next);
  });

  // ── Mouse-wheel (non-passive so we can preventDefault) ─────────────────────
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      isUserControlled.current = true;
      clearTimeout(resumeTimer.current);
      // deltaX for horizontal trackpad swipes, deltaY for scroll wheels
      x.set(normalise(x.get() - e.deltaX - e.deltaY * 0.8));
      resumeTimer.current = setTimeout(() => {
        isUserControlled.current = false;
      }, 1200);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []); // stable refs — empty deps is correct

  // ── Arrow-button nudge ─────────────────────────────────────────────────────
  const nudge = (dir: "left" | "right") => {
    isUserControlled.current = true;
    clearTimeout(resumeTimer.current);
    // Normalise first (no visual change) so the animated target is within range
    const current = normalise(x.get());
    x.set(current);
    const target = normalise(current + (dir === "left" ? 320 : -320));
    animate(x, target, {
      type: "tween",
      duration: 0.45,
      ease: "easeOut" as const,
      onComplete: () => {
        resumeTimer.current = setTimeout(() => {
          isUserControlled.current = false;
        }, 1500);
      },
    });
  };

  // ── Pointer drag (mouse + touch) ───────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isDragging.current = true;
    startPointerX.current = e.clientX;
    startX.current = x.get();
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !stripRef.current) return;
    x.set(normalise(startX.current + (e.clientX - startPointerX.current)));
  };

  const onPointerUp = () => { isDragging.current = false; };

  return (
    <div ref={outerRef} className="relative">
      {/* Scroll area */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none [touch-action:pan-y]"
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; }}
      >
        <motion.div
          ref={stripRef}
          style={{ x }}
          className={cn("flex gap-4", className)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {children}
        </motion.div>
      </div>

      {/* Fade edges — sit behind buttons */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden sm:block w-24 bg-gradient-to-r from-white to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden sm:block w-24 bg-gradient-to-l from-white to-transparent z-[1]" />

      {/* Arrow buttons — sit above fade edges */}
      <button
        onClick={() => nudge("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all"
        aria-label="Scroll left"
      >
        <ChevronLeft size={15} className="text-slate-600" />
      </button>
      <button
        onClick={() => nudge("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all"
        aria-label="Scroll right"
      >
        <ChevronRight size={15} className="text-slate-600" />
      </button>
    </div>
  );
}
