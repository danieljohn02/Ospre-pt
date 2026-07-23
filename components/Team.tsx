"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Sak Vanichpong, MSPT",
    role: "Owner & Licensed Physical Therapist",
    image: "/sak.jpg",
    bio: "Practicing since 1999, Sak holds degrees in Biochemistry (SUNY Geneseo), Health Sciences, and a Master's in Physical Therapy from the College of Staten Island. He specializes in orthopedic and sports physical therapy with certifications in vestibular rehabilitation, Selective Functional Movement Assessment, SPORTSMETRICS, and Titleist Performance Institute MP2.",
    certs: ["MSPT", "SFMA", "SPORTSMETRICS", "TPI MP2", "Vestibular Rehab"],
  },
  {
    name: "Shoba Mammen, MSPT",
    role: "Licensed Physical Therapist",
    image: "/shoba.jpg",
    bio: "Practicing since 1999, Shoba holds degrees in Integrative Neuroscience (Binghamton University) and a Master's in Physical Therapy from the University of Rhode Island. She specializes in orthopedic physical therapy with a focus on spine rehabilitation, with certifications in Sacroiliac joint specialization (Hesch Institute), Mat Pilates (Polestar), LSVT BIG for movement disorders, and the Infinity Method.",
    certs: ["MSPT", "SI Joint Specialist", "Mat Pilates", "LSVT BIG", "Infinity Method"],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-10 sm:py-16 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-slate-500 font-semibold text-base uppercase tracking-widest">
            Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            Meet the Team
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow flex flex-col items-center p-8"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-md mb-6">
                <Image src={member.image} alt={member.name} width={192} height={192} className="w-full h-full object-cover object-center" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center">{member.name}</h3>
              <p className="text-slate-600 font-medium mt-1 text-center">{member.role}</p>
              <p className="text-slate-500 text-base mt-4 leading-relaxed text-center">
                {member.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {member.certs.map((cert) => (
                  <span key={cert} className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-brand-deep hover:bg-brand-mid text-white font-semibold px-6 py-3 rounded-full transition-all text-sm min-h-[44px]"
          >
            More About Us <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
