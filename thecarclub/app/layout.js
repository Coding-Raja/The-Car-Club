import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Car Club",
  description: "A blog for Car lovers",
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
        <Footer/>
      </body>
    </html>
  );
}
