"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Clock } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Object.fromEntries(data) as Record<string, string>).toString(),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-slate-400 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            Service Interest Form
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            No referral needed. Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 bg-slate-50 rounded-2xl p-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                  <Send size={28} className="text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll be in touch within 24 hours to set up an appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
                {error && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or call us at (845) 634-1625.
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      required
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-2">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(845) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-600 mb-2">What brings you in?</label>
                  <select id="service" name="service" required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 transition bg-white">
                    <option value="">Select a service</option>
                    <option>Movement Testing</option>
                    <option>Sports Conditioning</option>
                    <option>Runners Program</option>
                    <option>Balance Programs</option>
                    <option>Rehabilitation</option>
                    <option>Injury Prevention</option>
                    <option>PT Fit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">Message (optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    placeholder="Tell us a little about your situation..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-deep hover:bg-brand-mid text-white rounded-xl py-6 text-lg font-semibold"
                >
                  Submit
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-slate-500 mt-1">9 Ingalls Street<br />Central Nyack, NY 10960</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <a href="tel:8456341625" className="text-slate-500 hover:text-slate-700 mt-1 block transition-colors">
                    (845) 634-1625
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Hours</p>
                  <div className="text-slate-500 mt-1 space-y-1">
                    <p>Mon / Wed / Fri: 6am – 4pm</p>
                    <p>Tue / Thu: 10am – 7pm</p>
                    <p>Sat / Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 h-64 lg:flex-1 relative">
              <iframe
                src="https://maps.google.com/maps?q=9+Ingalls+St,+Central+Nyack,+NY+10960&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OSPRE PT Location"
              >
                <p>9 Ingalls Street, Central Nyack, NY 10960</p>
              </iframe>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9+Ingalls+St,+Central+Nyack,+NY+10960"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow hover:bg-slate-50 transition-colors"
              >
                Get directions →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
