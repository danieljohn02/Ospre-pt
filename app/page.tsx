import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CertBanner from "@/components/CertBanner";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Insurance from "@/components/Insurance";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import SocialSection from "@/components/SocialSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CertBanner />
      {/* slate-900 (CertBanner) → slate-900 (Stats top) — seamless, no bridge needed */}
      <Stats />
      {/* Stats bottom is slate-700 → Services is white */}
      <div className="h-12 bg-gradient-to-b from-slate-700 to-white" />
      <Services />
      <HowItWorks />
      {/* HowItWorks is slate-50 → Insurance top is slate-700 */}
      <div className="h-12 bg-gradient-to-b from-slate-50 to-slate-700" />
      <Insurance />
      {/* Insurance bottom is slate-900 → Testimonials is white */}
      <div className="h-12 bg-gradient-to-b from-slate-900 to-white" />
      <Testimonials />
      <Team />
      {/* Team is slate-50 → CTA is slate-900 */}
      <div className="h-12 bg-gradient-to-b from-slate-50 to-slate-900" />
      <CTA />
      {/* CTA bottom is slate-800 → SocialSection is slate-100 */}
      <div className="h-12 bg-gradient-to-b from-slate-800 to-slate-100" />
      <SocialSection />
      <ContactForm />
      {/* ContactForm is white → Footer is slate-900 */}
      <div className="h-10 bg-gradient-to-b from-white to-slate-900" />
      <Footer />
    </main>
  );
}
