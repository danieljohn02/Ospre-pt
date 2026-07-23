import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSPRE PT | Physical Therapy in Nyack, NY | Sports Rehab & Injury Prevention",
  description:
    "OSPRE PT is a physical therapy clinic in Central Nyack, NY specializing in sports rehabilitation, injury prevention, runners programs, balance disorders, and golf fitness. Book a free assessment with Sak Vanichpong, MSPT.",
  keywords: [
    "physical therapy Nyack NY",
    "sports rehabilitation Nyack",
    "injury prevention Nyack",
    "physical therapist Rockland County",
    "BPPV treatment Nyack",
    "runners program physical therapy",
    "golf fitness TPI Nyack",
    "Sak Vanichpong MSPT",
    "OSPRE PT",
    "sports conditioning Nyack",
  ],
  authors: [{ name: "Sak Vanichpong, MSPT" }],
  creator: "OSPRE PT",
  publisher: "OSPRE PT",
  metadataBase: new URL("https://www.osprept.com"),
  alternates: {
    canonical: "https://www.osprept.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.osprept.com",
    siteName: "OSPRE PT",
    title: "OSPRE PT | Physical Therapy in Nyack, NY",
    description:
      "Expert physical therapy in Central Nyack, NY. Specializing in sports rehab, injury prevention, runners programs, and balance disorders. Free assessment available.",
    images: [
      {
        url: "/sak.jpg",
        width: 800,
        height: 600,
        alt: "OSPRE PT — Physical Therapy in Nyack NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSPRE PT | Physical Therapy in Nyack, NY",
    description:
      "Expert physical therapy in Central Nyack, NY. Sports rehab, injury prevention, runners programs, and balance disorders.",
    images: ["/sak.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "OSPRE PT",
              description:
                "Optimum Sports Performance & Rehabilitation Center offering physical therapy, sports conditioning, runners programs, and balance disorder treatment.",
              url: "https://www.osprept.com",
              telephone: "+18456341625",
              email: "osprept@optimum.net",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Ingalls Street",
                addressLocality: "Central Nyack",
                addressRegion: "NY",
                postalCode: "10960",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.0951,
                longitude: -73.9179,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday", "Friday"],
                  opens: "06:00",
                  closes: "16:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday"],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/osprept/",
                "https://www.facebook.com/OSPREPT/",
              ],
              medicalSpecialty: "PhysicalTherapy",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased overflow-x-hidden max-w-[100vw]`}>
        {/* Hidden form for Netlify form detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: "none" }}>
          <input type="hidden" name="form-name" value="contact" />
          <input name="bot-field" />
          <input name="first-name" />
          <input name="last-name" />
          <input name="email" />
          <input name="phone" />
          <select name="service" />
          <textarea name="message" />
        </form>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
