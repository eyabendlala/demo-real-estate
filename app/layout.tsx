import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Denver Real Estate Portal | Powered by WordPress API",
  description: "Real estate portal fetching actual property listings from live WordPress API with Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-gray-200 bg-white py-10 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="font-bold text-gray-900 text-sm block">
                DENVER REAL ESTATE PORTAL
              </span>
              <span className="text-gray-500">
                Connected to live WordPress API (indigo-ram-908666.hostingersite.com)
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <span className="px-3 py-1 rounded bg-gray-100 border border-gray-200 text-gray-700 font-medium">
                Node.js Backend
              </span>
              <span className="px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-medium">
                WordPress REST API
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


