import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | OSPRE PT",
  description:
    "Terms of Service governing your use of the OSPRE PT website, a physical therapy practice in Nyack, NY.",
  alternates: { canonical: "https://www.osprept.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-deeper to-brand-deep py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-base font-medium mb-8 min-h-[44px]"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-slate-300 mt-4 text-base sm:text-base">Last updated: July 15, 2026</p>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-10 text-slate-600 leading-relaxed">
        <section className="space-y-4">
          <p>
            Welcome to OSPRE PT. These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the website at osprept.com (the &quot;Site&quot;), operated by OSPRE PT
            (&quot;OSPRE PT,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
            or using the Site, you agree to these Terms. If you do not agree, please do not use the
            Site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Informational Purpose Only — Not Medical Advice
          </h2>
          <p>
            The content on this Site is provided for general informational purposes about our
            services and is not medical advice. It is not a substitute for professional evaluation,
            diagnosis, or treatment. Always seek the advice of a qualified health provider with any
            questions about a medical condition. Never disregard professional medical advice or delay
            seeking it because of something you read on the Site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">No Provider Relationship</h2>
          <p>
            Using the Site, viewing its content, or submitting a contact or service-interest form
            does not create a physical therapist–patient or any other professional relationship
            between you and OSPRE PT. A treatment relationship is established only through an
            in-person evaluation and the appropriate intake process at our practice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contacting Us Through the Site</h2>
          <p>
            When you submit a form, you agree to provide accurate information. Please do not include
            sensitive medical details, as the Site is not a secure channel for protected health
            information. We will use your submission to respond to your inquiry as described in our{" "}
            <Link href="/privacy" className="text-brand-deep font-medium hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Appointments &amp; Services</h2>
          <p>
            Any appointment request submitted through the Site is a request only and is not confirmed
            until we contact you. Service descriptions on the Site are for general information and do
            not guarantee any particular outcome. Individual results vary.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Intellectual Property</h2>
          <p>
            The Site and its content — including text, graphics, logos, images, and design — are
            owned by OSPRE PT or its licensors and are protected by intellectual property laws. You
            may view and use the Site for personal, non-commercial purposes only. You may not copy,
            reproduce, distribute, or create derivative works without our prior written permission.
            &quot;PT Fit&quot; and related marks are trademarks of OSPRE PT.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites and services that we do not control.
            We are not responsible for their content, policies, or practices, and providing a link
            does not imply endorsement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
            warranties of any kind, whether express or implied, including warranties of
            merchantability, fitness for a particular purpose, and non-infringement. We do not
            warrant that the Site will be uninterrupted, error-free, or free of harmful components.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, OSPRE PT and its owners, employees, and agents
            will not be liable for any indirect, incidental, special, consequential, or punitive
            damages arising out of or related to your use of the Site, even if advised of the
            possibility of such damages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of New York, without regard to its
            conflict-of-law principles. Any dispute relating to the Site will be subject to the
            exclusive jurisdiction of the state and federal courts located in New York.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Changes are effective when posted on this
            page, and your continued use of the Site constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Us</h2>
          <p>Questions about these Terms? Contact us:</p>
          <div className="rounded-2xl bg-slate-50 p-6 text-sm space-y-1">
            <p className="font-semibold text-slate-800">OSPRE PT</p>
            <p>9 Ingalls Street, Central Nyack, NY 10960</p>
            <p>
              Phone:{" "}
              <a href="tel:8456341625" className="text-brand-deep font-medium hover:underline">
                (845) 634-1625
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:osprept@optimum.net"
                className="text-brand-deep font-medium hover:underline"
              >
                osprept@optimum.net
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
