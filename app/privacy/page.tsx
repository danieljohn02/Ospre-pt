import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | OSPRE PT",
  description:
    "Privacy Policy for OSPRE PT — how we collect, use, and protect the information you share with our physical therapy practice in Nyack, NY.",
  alternates: { canonical: "https://www.osprept.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-slate-300 mt-4 text-base sm:text-base">Last updated: July 15, 2026</p>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-10 text-slate-600 leading-relaxed">
        <section className="space-y-4">
          <p>
            OSPRE PT (&quot;OSPRE PT,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
            your privacy. This Privacy Policy explains what information we collect through our website
            at osprept.com (the &quot;Site&quot;), how we use it, and the choices you have. By using
            the Site, you agree to the practices described here.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Information We Collect</h2>
          <p>
            <strong className="text-slate-800">Information you provide.</strong> When you fill out our
            contact or service-interest form, we collect the information you submit — typically your
            name, email address, phone number, the service you are interested in, and any details you
            choose to include about your situation.
          </p>
          <p>
            <strong className="text-slate-800">Information collected automatically.</strong> Like most
            websites, we and our hosting and analytics providers may automatically collect limited
            technical information such as your IP address, browser type, device information, pages
            viewed, and referring pages. This information is used to operate and improve the Site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            A Note About Health Information
          </h2>
          <p>
            This Site is an informational and marketing website — it is not a patient portal and is
            not a secure channel for protected health information. Please do <strong>not</strong>{" "}
            submit detailed medical history, diagnoses, or other sensitive health information through
            the contact form. Any health-related details you voluntarily share are used only to
            respond to your inquiry and schedule appropriate care. Information you provide as an
            established patient during treatment is governed separately by our clinical privacy
            practices under applicable law, including HIPAA where it applies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your inquiries and contact you about services;</li>
            <li>To schedule assessments, appointments, and follow-ups;</li>
            <li>To operate, maintain, and improve the Site;</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not share it for third-party
            advertising.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Service Providers</h2>
          <p>
            We use trusted third-party providers to host the Site and to process form submissions
            (for example, our website host and form-handling service). These providers process your
            information only to provide services to us and are expected to safeguard it. Your form
            submissions may pass through and be stored by these providers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Cookies &amp; Analytics</h2>
          <p>
            The Site may use cookies or similar technologies to remember preferences and to
            understand how the Site is used. You can control cookies through your browser settings.
            Disabling cookies may affect some functionality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Retention</h2>
          <p>
            We retain the information you submit for as long as needed to respond to your inquiry,
            provide services, and meet our legal and recordkeeping obligations, after which it is
            deleted or de-identified.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Your Choices &amp; Rights</h2>
          <p>
            You may request to access, correct, or delete the personal information you have submitted
            through the Site by contacting us using the details below. Depending on where you live,
            you may have additional rights under applicable privacy laws. We will respond to
            reasonable requests consistent with those laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Children&apos;s Privacy</h2>
          <p>
            The Site is not directed to children under 13, and we do not knowingly collect personal
            information from children under 13. If you believe a child has provided us information,
            please contact us and we will delete it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Security</h2>
          <p>
            We take reasonable measures to protect the information submitted through the Site.
            However, no method of transmission over the internet is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Links</h2>
          <p>
            The Site may link to third-party websites and social media pages (such as Instagram and
            Facebook). We are not responsible for the privacy practices of those sites, and we
            encourage you to review their policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes are effective when posted on
            this page, and we will update the &quot;Last updated&quot; date above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Us</h2>
          <p>If you have questions about this Privacy Policy or your information, contact us:</p>
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
