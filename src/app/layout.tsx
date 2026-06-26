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
  title: "Flamingo Airbnb | Premium Homestay in Kabarnet",
  description: "Experience modern boutique hospitality at Flamingo Airbnb, your premier homestay in Baringo County.",
  openGraph: {
    title: "Flamingo Airbnb | Premium Homestay in Kabarnet",
    description: "Experience modern boutique hospitality at Flamingo Airbnb, your premier homestay in Baringo County.",
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
    title: "Flamingo Airbnb | Premium Homestay in Kabarnet",
    description: "Experience modern boutique hospitality at Flamingo Airbnb, your premier homestay in Baringo County.",
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
