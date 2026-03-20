import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darwebsolutions.co.tz"),
  title: {
    default: "Dar Web Solutions | Websites for Dar es Salaam Businesses",
    template: "%s | Dar Web Solutions",
  },
  description:
    "Dar Web Solutions builds simple, mobile-first websites with WhatsApp integration for small and medium businesses in Dar es Salaam.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dar Web Solutions | Websites for Dar es Salaam Businesses",
    description:
      "Simple, mobile-first websites with WhatsApp integration for Tanzanian businesses.",
    url: "/",
    siteName: "Dar Web Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dar Web Solutions",
    description:
      "Simple, mobile-first websites with WhatsApp integration for Tanzanian businesses.",
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
