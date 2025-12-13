import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://razorbilltechnologies.com"),
  title: "'Razorbill Technologies- Enterprise Solutions for Modern Businesses",
  description: 'Empowering businesses with intelligent digital systems, automation, and seamless CRM solutions.',
  keywords: "virtual assistant, executive support, business assistance, remote work, productivity",
  authors: [{ name: "Razorbill Technologies" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Razorbill Technologies- Enterprise Solutions for Modern Businesses",
    description: "Empowering businesses with intelligent digital systems, automation, and seamless CRM solutions.",
    url: "https://razorbilltechnologies.com",
    siteName: "Razorbill Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razorbill Technologies - Enterprise Solutions for Modern Businesses",
    description: "Empowering businesses with intelligent digital systems, automation, and seamless CRM solutions.",
    creator: "@razorbilltech",
  },
  alternates: {
    canonical: "https://razorbilltechnologies.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code when you get it
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/razorbiill/crm-dashboard.png"
          fetchPriority="high"
        />
      </head>
      <body className={`${dmSans.className}`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
