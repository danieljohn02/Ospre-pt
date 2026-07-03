"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Meet the Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="block bg-white rounded-xl px-3 py-1.5 shadow-sm">
          <Image
            src="/logo.jpg"
            alt="OSPRE PT"
            width={200}
            height={64}
            className="h-10 sm:h-14 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors font-medium ${scrolled ? "text-slate-500 hover:text-slate-800" : "text-white/80 hover:text-white"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:8456341625"
            className={`flex items-center gap-2 font-semibold px-4 py-2 rounded-full transition-all border ${scrolled ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200" : "bg-white/10 hover:bg-white/20 text-white border-white/20"}`}
          >
            <Phone size={15} />
            <span>(845) 634-1625</span>
          </a>
          <a href="#contact" className="bg-brand-deep hover:bg-brand-deeper text-white font-semibold rounded-full px-6 py-2.5 transition-colors text-sm">
            Contact Us
          </a>
        </div>

        <button
          className={`md:hidden w-11 h-11 flex items-center justify-center rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 font-medium py-3 px-2 min-h-[44px] flex items-center border-b border-slate-100 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
