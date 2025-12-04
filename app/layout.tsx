import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kausal Upadhayaya - IT Student & Web Developer",
  description: "Third year bachelor in IT student. Passionate about web development and technology.",
  keywords: [
    "Kausal Upadhayaya",
    "IT Student",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Kausal Upadhayaya" }],
  creator: "Kausal Upadhayaya",
  publisher: "Kausal Upadhayaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kausaldev.me",
    title: "Kausal Upadhayaya - IT Student & Web Developer",
    description: "Third year bachelor in IT student. Passionate about web development and technology.",
    siteName: "Kausal Upadhayaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kausal Upadhayaya - IT Student & Web Developer",
    description: "Third year bachelor in IT student. Passionate about web development and technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kausaldev.me" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
