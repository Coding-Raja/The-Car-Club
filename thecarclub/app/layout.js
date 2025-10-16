import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Car Club - Your Ultimate Automotive Community | Car Reviews & News",
  description: "Join The Car Club - Pakistan's fastest growing automotive community. Get expert car reviews, latest auto news, buying guides & connect with car enthusiasts.",
  keywords: "car reviews, automotive news, car buying guide, auto community, car accessories, vehicle maintenance, car modifications",
  authors: [{ name: "The Car Club" }],
  openGraph: {
    title: "The Car Club - Automotive Community & Car Reviews",
    description: "Your ultimate destination for car reviews, automotive news and community discussions",
    url: "https://the-car-club.vercel.app",
    siteName: "The Car Club",
    images: [
      {
        url: "/og-image.jpg", // Aap ek image bana sakte hain baad mein
        width: 1200,
        height: 630,
        alt: "The Car Club - Automotive Community",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Car Club - Automotive Community",
    description: "Car reviews, news & community for enthusiasts", 
    images: ["/og-image.jpg"],
  },
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
  icons: {
    icon: {
      url: '/Hacker.png',
      type: 'image/png',
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}