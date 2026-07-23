import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CertBanner from "@/components/CertBanner";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import SocialSection from "@/components/SocialSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { getGoogleRating } from "@/lib/reviews";

export default async function Home() {
  const { rating, total } = await getGoogleRating();
  return (
    <main>
      <Navbar />
      <Hero />
      <CertBanner />
      {/* slate-900 (CertBanner) → slate-900 (Stats top) — seamless, no bridge needed */}
      <Stats />
      {/* Stats bottom is slate-700 → Services is white */}
      <div className="h-12 bg-gradient-to-b from-brand-mid to-white" />
      <Services />
      {/* Services (white) → HowItWorks (blue) */}
      <div className="h-12 bg-gradient-to-b from-white to-brand-deeper" />
      <HowItWorks />
      {/* HowItWorks (blue) → Testimonials (white) */}
      <div className="h-12 bg-gradient-to-b from-brand-deep to-white" />
      <Testimonials rating={rating} total={total} />
      <Team />
      {/* Team is slate-50 → CTA is slate-900 */}
      <div className="h-12 bg-gradient-to-b from-slate-50 to-brand-deeper" />
      <CTA />
      {/* CTA bottom is slate-800 → SocialSection is slate-100 */}
      <div className="h-12 bg-gradient-to-b from-brand-deep to-slate-100" />
      <SocialSection />
      <ContactForm />
      {/* ContactForm is white → Footer is slate-900 */}
      <div className="h-10 bg-gradient-to-b from-white to-brand-deeper" />
      <Footer />
    </main>
  );
}
