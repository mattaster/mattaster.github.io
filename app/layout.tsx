import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MAster Marketing and Strategy",
    default: "MAster Marketing and Strategy | Fractional CMO & Strategic Advisory",
  },
  description:
    "Expert fractional CMO services and strategic marketing advisory for growth-focused companies. Led by Matt Aster.",
  metadataBase: new URL("https://mattaster.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mattaster.github.io",
    title: "MAster Marketing and Strategy",
    description:
      "Expert fractional CMO services and strategic marketing advisory for growth-focused companies.",
    siteName: "MAster Marketing and Strategy",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAster Marketing and Strategy",
    description:
      "Expert fractional CMO services and strategic marketing advisory for growth-focused companies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConsultingService",
    name: "MAster Marketing and Strategy",
    url: "https://mattaster.github.io",
    logo: "https://mattaster.github.io/logo.png", // Placeholder
    founder: {
      "@type": "Person",
      name: "Matt Aster",
    },
    description:
      "Strategic marketing advisory and fractional CMO services for growth-stage companies.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-off-white text-slate-900 flex flex-col min-h-screen">
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
