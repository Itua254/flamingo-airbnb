import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Flamingo Airbnb | Premium Homestay & Guest House in Kabarnet",
  description: "Experience modern boutique hospitality at Flamingo Airbnb, the premier secure homestay in Kabarnet, Baringo County. Perfect for tourist excursions to Lake Bogoria.",
  keywords: [
    "Flamingo Airbnb",
    "Flamingo Airbnb Kabarnet",
    "homestay in Kabarnet",
    "guest house in Kabarnet",
    "hotels in Kabarnet",
    "best place to stay in Kabarnet",
    "Baringo County accommodation",
    "boutique guest house Baringo",
    "Lake Bogoria tourist stay",
    "secured stay Kabarnet",
    "luxury homestay Kabarnet"
  ],
  openGraph: {
    title: "Flamingo Airbnb | Premium Homestay & Guest House in Kabarnet",
    description: "Experience modern boutique hospitality at Flamingo Airbnb, the premier secure homestay in Kabarnet, Baringo County.",
    url: "https://flamingoairbnb.com",
    siteName: "Flamingo Airbnb",
    images: [
      {
        url: "/images/4.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flamingo Airbnb | Premium Homestay & Guest House in Kabarnet",
    description: "Experience modern boutique hospitality at Flamingo Airbnb, the premier secure homestay in Kabarnet, Baringo County.",
    images: ["/images/4.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Flamingo Airbnb",
  image: "https://flamingoairbnb.com/images/4.jpg",
  "@id": "https://flamingoairbnb.com",
  url: "https://flamingoairbnb.com",
  telephone: "+254718952244",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kabarnet Town",
    addressLocality: "Kabarnet",
    addressRegion: "Baringo County",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0.4938,
    longitude: 35.7335,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "28"
  },
  review: [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Beautiful clean property in a serene gated compound. Extremely cozy with modern green and gold details. The hosts were wonderfully hospitable!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David K."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Outstanding stay in Kabarnet! High-speed internet, secure gated parking, and scenic views of Baringo. Unmatched boutique hospitality."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
