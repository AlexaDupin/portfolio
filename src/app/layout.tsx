import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexadupin.com"),
  title: {
    default: "Alexa Dupin · Full-stack engineer",
    template: "%s · Alexa Dupin",
  },
  description:
    "Full-stack engineer in New York. Currently running a production platform with 980+ users. TypeScript, React, Node, PostgreSQL.",
  openGraph: {
    title: "Alexa Dupin · Full-stack engineer",
    description:
      "Full-stack engineer in New York. Currently running a production platform with 980+ users.",
    url: "https://alexadupin.com",
    siteName: "Alexa Dupin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexa Dupin · Full-stack engineer",
    description:
      "Full-stack engineer in New York. Currently running a production platform with 980+ users.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
