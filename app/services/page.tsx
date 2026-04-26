import { Activity, Dumbbell, PersonStanding, Brain, Heart, ShieldCheck, Zap, ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Activity,
    slug: "movement-testing",
    title: "Movement Testing",
    tagline: "Find the root cause before it becomes an injury",
    description:
      "Our movement testing program uses the Selective Functional Movement Assessment (SFMA) to identify dysfunctional movement patterns before they lead to pain or injury. Through a series of top-tier movement patterns, Sak evaluates mobility, stability, and neuromuscular control to build a precise picture of how your body moves — and where it breaks down.",
    benefits: [
      "Identifies movement deficiencies before symptoms appear",
      "Reduces injury risk for athletes and active individuals",
      "Creates a baseline to track progress over time",
      "Informs a targeted, individualized treatment plan",
    ],
    who: "Athletes, weekend warriors, office workers, or anyone experiencing recurring pain or wanting to move better.",
  },
  {
    icon: Dumbbell,
    slug: "sports-conditioning",
    title: "Sports Conditioning",
    tagline: "Train smarter, perform better, recover faster",
    description:
      "Our sports conditioning program is built around you — your sport, your position, your body, and your goals. Whether you need a straightforward strength program or a highly detailed periodized training plan, Sak designs and adjusts your program as you progress. Conditioning is paired with injury prevention strategies so you stay healthy while pushing your limits.",
    benefits: [
      "Individualized programming from simple to highly detailed",
      "Sport-specific strength and power development",
      "Injury prevention integrated into every session",
      "Ongoing assessment and program adjustment",
    ],
    who: "Competitive athletes, recreational players, or anyone looking to improve athletic performance at any level.",
  },
  {
    icon: PersonStanding,
    slug: "runners-program",
    title: "Runners Program",
    tagline: "Run pain-free and set your next personal best",
    description:
      "Running injuries are almost always the result of poor mechanics, training errors, or muscular imbalances — all of which are correctable. Our Runners Program uses video gait analysis and functional movement screening to identify exactly why you're getting hurt or slowing down. We then build an efficiency-focused training plan that addresses the root cause and keeps you running.",
    benefits: [
      "Video gait analysis to identify form inefficiencies",
      "Targeted strength and mobility work for runners",
      "Return-to-run protocol after injury",
      "Training load management to prevent overuse injuries",
    ],
    who: "Recreational joggers, marathon runners, or anyone dealing with shin splints, IT band issues, plantar fasciitis, or knee pain.",
  },
  {
    icon: Brain,
    slug: "balance-programs",
    title: "Balance Programs",
    tagline: "Regain confidence and stability in your daily life",
    description:
      "Sak is certified in vestibular rehabilitation and uses evidence-based techniques to treat BPPV (benign paroxysmal positional vertigo) and other balance disorders. BPPV is one of the most common causes of dizziness and can be highly disruptive — but it's also highly treatable. Most patients see significant improvement within just a few sessions using canalith repositioning procedures.",
    benefits: [
      "Canalith repositioning (Epley maneuver) for BPPV",
      "Vestibular rehab exercises to retrain balance",
      "Fall prevention training for older adults",
      "Customized home exercise programs",
    ],
    who: "Adults experiencing dizziness, vertigo, unsteadiness, or a history of falls — including post-concussion patients.",
  },
  {
    icon: Heart,
    slug: "rehabilitation",
    title: "Rehabilitation",
    tagline: "Recover fully and come back stronger",
    description:
      "Whether you're recovering from surgery, a sports injury, or chronic pain that's been limiting you for years, our rehabilitation programs are designed to get you back to full function — not just pain-free. Sak takes a hands-on, one-on-one approach combining manual therapy, therapeutic exercise, and patient education so you understand your body and know how to maintain your progress long-term.",
    benefits: [
      "Post-surgical rehab (ACL, rotator cuff, joint replacement, etc.)",
      "Chronic pain management and resolution",
      "Manual therapy and soft tissue mobilization",
      "Home exercise programs to maintain gains",
    ],
    who: "Anyone recovering from surgery, a sports injury, workplace injury, or dealing with chronic musculoskeletal pain.",
  },
  {
    icon: ShieldCheck,
    slug: "injury-prevention",
    title: "Injury Prevention",
    tagline: "Stay healthy before problems start",
    description:
      "Injury prevention at OSPRE PT goes beyond stretching — it's a proactive, evidence-based approach to identifying the physical vulnerabilities that put you at risk before symptoms appear. Using movement screens, strength assessments, and biomechanical analysis, Sak builds a targeted program to close the gaps in your body's resilience so you can train hard, compete, and move through daily life without setbacks.",
    benefits: [
      "Proactive movement and strength screening",
      "Identification of asymmetries and weak links",
      "Sport- and activity-specific risk reduction programs",
      "Education on load management and recovery",
    ],
    who: "Athletes, active individuals, or anyone who wants to stay ahead of injury rather than react to it.",
  },
  {
    icon: Zap,
    slug: "pt-fit",
    title: "PT Fit",
    tagline: "Keep building after rehab ends",
    description:
      "Recovery doesn't stop when formal rehabilitation ends — it transitions. PT Fit is a performance-focused continuation program designed for patients who have completed rehab and want to keep progressing. Rather than returning to generic gym routines, you'll work with Sak on structured strength, conditioning, and mobility programming that builds directly on your rehab gains. The goal is to come out of injury not just recovered, but stronger and more durable than before.",
    benefits: [
      "Seamless transition from rehab to performance training",
      "Progressive strength and conditioning programming",
      "Ongoing movement quality monitoring",
      "Reduced risk of re-injury through structured progression",
    ],
    who: "Patients who have completed a rehabilitation program and want structured, PT-guided training to continue building strength, resilience, and long-term health.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium mb-8 min-h-[44px]"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Our Services</h1>
          <p className="text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Every program at OSPRE PT is built around you — your goals, your body, and your life.
            Practicing since 1999, Sak delivers individualized care you won&apos;t find anywhere else.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-14 sm:space-y-20">
        {services.map((service, i) => (
          <div key={service.title} id={service.slug} className="flex flex-col gap-8 scroll-mt-24">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                <service.icon size={24} className="text-slate-600" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">
                  Service {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-slate-500 text-base sm:text-lg mt-1 italic">{service.tagline}</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{service.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-800 mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-500 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-800 mb-3">Who Is This For?</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.who}</p>

                <a
                  href="tel:8456341625"
                  className="inline-flex items-center gap-2 mt-6 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                >
                  <Phone size={14} />
                  Call to Book
                </a>
              </div>
            </div>

            {i < services.length - 1 && (
              <div className="border-b border-slate-100" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 py-14 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Not sure which service is right for you?</h2>
        <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm sm:text-base">
          Call us and we&apos;ll help you figure out the best starting point.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="tel:8456341625"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full transition-all min-h-[44px]"
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
