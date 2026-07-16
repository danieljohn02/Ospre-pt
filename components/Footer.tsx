import { MapPin, Phone, Mail, Clock, Printer, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-deeper text-slate-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">OSPRE</span>
              <span className="text-2xl font-light text-slate-400">PT</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Your Optimum Sports Performance & Rehabilitation Center in Nyack, NY.
              Helping you reach your peak performance at any age.
            </p>
            <div className="flex gap-3 mt-6 mb-4">
              <a href="https://www.instagram.com/osprept/" target="_blank" rel="noopener noreferrer" aria-label="OSPRE PT on Instagram"
                className="w-9 h-9 rounded-full bg-brand-deep border border-brand-mid flex items-center justify-center hover:bg-brand-mid transition-colors">
                <Instagram size={16} className="text-slate-400" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/OSPREPT/" target="_blank" rel="noopener noreferrer" aria-label="OSPRE PT on Facebook"
                className="w-9 h-9 rounded-full bg-brand-deep border border-brand-mid flex items-center justify-center hover:bg-brand-mid transition-colors">
                <Facebook size={16} className="text-slate-400" aria-hidden="true" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {[
                { src: "/logos/apta.svg", alt: "APTA" },
                { src: "/logos/sportsmetrics.png", alt: "SportsMetrics" },
                { src: "/logos/tpi.svg", alt: "Titleist Performance Institute" },
                { src: "/logos/dizzy.png", alt: "Dizzy.com" },
              ].map((logo) => (
                <div key={logo.alt} className="bg-white rounded-lg px-3 py-2 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">9 Ingalls Street, Central Nyack, NY 10960</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-slate-400 shrink-0" />
                <a href="tel:8456341625" className="text-slate-400 hover:text-white transition-colors">
                  (845) 634-1625
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={16} className="text-slate-400 shrink-0" />
                <span className="text-slate-400">(845) 215-0193</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-slate-400 shrink-0" />
                <a href="mailto:osprept@optimum.net" className="text-slate-400 hover:text-white transition-colors">
                  osprept@optimum.net
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Clock size={16} className="text-slate-400" />
              Hours
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex justify-between gap-4">
                <span>Mon / Wed / Fri</span>
                <span className="text-slate-300 font-medium">6am – 4pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Tue / Thu</span>
                <span className="text-slate-300 font-medium">10am – 7pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sat / Sun</span>
                <span className="text-slate-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-deep pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-500 text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} OSPRE PT. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
