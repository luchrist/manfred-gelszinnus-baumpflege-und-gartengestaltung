import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { galabau } from "@/lib/galabau";
import { restaurant } from "@/lib/restaurant";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"]
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

// The generated restaurant.seo block carries gastro boilerplate, so the
// Baumpflege metadata is defined here from the verified company record.
const city = restaurant.address.city;
const owner = restaurant.legal.ownerName || restaurant.name;
const SEO_TITLE = `Baumpflege in ${city} | ${owner}`;
const SEO_DESCRIPTION = `Baumpflege, Baumfällung, Baumkontrolle und Neupflanzung in ${city}, Karlsruhe und Umgebung. ${owner}: Besichtigung vor Ort, ehrliche Einschätzung, ein Ansprechpartner.`;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    `Baumpflege ${city}`,
    `Baumfällung ${city}`,
    `Baumkontrolle ${city}`,
    `Baumschnitt ${city}`,
    "Baumpflege Karlsruhe",
    "Baumfällung Karlsruhe",
    owner
  ],
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    locale: restaurant.seo.locale
  }
};

// No schema.org type for arborists exists; HomeAndConstructionBusiness is the
// closest LocalBusiness subtype for property-related trade services.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: restaurant.name,
  description: SEO_DESCRIPTION,
  telephone: galabau.contact.phone || restaurant.phone,
  ...(galabau.contact.email || restaurant.email ? { email: galabau.contact.email || restaurant.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    postalCode: restaurant.address.cityLine.split(" ")[0],
    addressLocality: city,
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE"
  },
  ...(galabau.serviceArea.center
    ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: galabau.serviceArea.center.lat,
          longitude: galabau.serviceArea.center.lng
        }
      }
    : {}),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00"
    }
  ],
  areaServed: galabau.serviceArea.places.length ? galabau.serviceArea.places : [city],
  hasMap: restaurant.mapsUrl,
  makesOffer: galabau.services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.label, description: service.teaser }
  }))
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="grain overflow-x-hidden bg-bone text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
