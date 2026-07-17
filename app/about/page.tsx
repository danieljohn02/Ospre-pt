import type { Metadata } from "next";
import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About OSPRE PT | Physical Therapy in Nyack, NY",
  description:
    "Learn about OSPRE PT — a community-based physical therapy practice in Nyack, NY owned by Sak Vanichpong, MSPT. Rehabilitation, injury prevention, fitness testing, sports training, and PT Fit personal training.",
  alternates: { canonical: "https://www.osprept.com/about" },
};

const team = [
  {
    name: "Sak Vanichpong, MSPT · TPI MP2",
    role: "Owner & Licensed Physical Therapist",
    image: "/sak.jpg",
    bio: "OSPRE PT is owned and managed by Somsak Vanichpong. Mr. Vanichpong received his B.S. in Biochemistry from SUNY Geneseo, and obtained a B.S. in Health Sciences and Master's Degree in Physical Therapy from the College of Staten Island. Mr. Vanichpong has been a practicing physical therapist since 1999 and has a specialty in orthopedic and sports physical therapy. He is also certified by the American Institute of Balance in vestibular rehabilitation, trained in the Selective Functional Movement Assessment, a SPORTSMETRICS certified provider, and a Titleist Performance Institute MP2 provider. Mr. Vanichpong has been continually employed at physical therapy clinics in the area since graduating.",
  },
  {
    name: "Shoba Mammen, MSPT",
    role: "Licensed Physical Therapist",
    image: "/shoba.jpg",
    bio: "Shoba Mammen is a highly experienced physical therapist. She earned her B.S. in Integrative Neuroscience from Binghamton University and completed her Master of Science in Physical Therapy from the University of Rhode Island in 1999. With decades of clinical experience across outpatient orthopedic and home care settings, she specializes in orthopedics with a focus on spine rehabilitation. Committed to ongoing professional development, her certifications include Sacroiliac (SI) joint specialization through the Hesch Institute, Mat Pilates through Polestar, LSVT BIG for movement disorders, and the Infinity Method from the Dr. Madsen clinic in Iowa. Her holistic, patient-centered approach combines evidence-based care with a deep understanding of movement and neurological integration to help patients restore function, reduce pain, and improve overall quality of life.",
  },
];

const mission = [
  "Rehabilitation",
  "Injury Prevention and Recovery",
  "Fitness Testing",
  "Sports Training",
  "PT Fit™ Personal Training",
];

const gallery = [
  "/clinic.jpg",
  "/clinic2.jpg",
  "/clinic3.jpg",
  "/clinic5.jpg",
  "/clinic6.jpg",
  "/clinic7.jpg",
  "/clinic8.jpg",
  "/movement testing.JPG",
  "/sports conditioning.JPG",
  "/runners program.JPG",
  "/Balance Progrmas.JPG",
  "/rehabilitation.JPG",
  "/injury prevention.JPG",
  "/PT Fit.JPG",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-deeper to-brand-deep py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-base font-medium mb-8 min-h-[44px]"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About OSPRE PT</h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Physical Therapy in Nyack, New York — helping individuals reach their peak
            performance at any age.
          </p>
        </div>
      </div>

      {/* The OSPRE PT Difference */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <span className="text-brand font-semibold text-sm uppercase tracking-widest">
          Who We Are
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 mb-6">
          The OSPRE PT Difference
        </h2>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          OSPRE PT&apos;s mission is to assist individuals in reaching their peak performance at any
          age. OSPRE PT is focused on promoting and preserving the health and wellness of its
          patients through its core practice areas of rehabilitation, injury prevention and
          recovery, fitness testing, and sports training. OSPRE PT strongly believes that most
          injuries are preventable with proper fitness assessments and training. OSPRE PT provides
          cutting-edge services in a 1,300 square foot state-of-the-art facility, using equipment
          not found elsewhere in the area. It is a community-based business operated by Sak
          Vanichpong, MSPT, a licensed physical therapist for over 19 years.
        </p>
      </section>

      {/* Team bios */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14 sm:space-y-20">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 sm:gap-12 items-start"
            >
              <div
                className={`relative aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 overflow-hidden rounded-3xl shadow-lg ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — OSPRE PT, Nyack NY`}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover object-center"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-brand-deep font-semibold mt-1">{member.role}</p>
                <p className="text-slate-600 leading-relaxed text-base mt-5">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gradient-to-b from-brand-deeper to-brand-deep py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest">
            Our Mission
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4">
            A program built around you
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            No matter where you are on day one, OSPRE PT will develop a specific program to help
            achieve your goals through:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {mission.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-brand-deep border border-brand-mid text-white font-semibold px-4 py-2.5 rounded-full text-sm"
              >
                <CheckCircle2 size={16} className="text-teal-300 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-10">
          <span className="text-brand font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">Inside OSPRE PT</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={src}
                alt={`OSPRE PT facility and training — photo ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-brand-deeper py-14 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to reach your peak?</h2>
        <p className="text-slate-300 mt-3 max-w-lg mx-auto text-base sm:text-base">
          Call us and we&apos;ll help you find the right starting point.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="tel:8456341625"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-deep hover:bg-slate-100 font-semibold px-8 py-4 rounded-full transition-all min-h-[44px]"
          >
            <Phone size={18} />
            (845) 634-1625
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all min-h-[44px]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
