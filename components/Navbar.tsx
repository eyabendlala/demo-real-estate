'use client';

import React from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#66bb92] flex items-center justify-center text-white shadow-sm">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-gray-900 text-lg tracking-tight block">
              Denver Real Estate Portal
            </span>
            <span className="text-[11px] text-gray-500 block -mt-1">
              Connected to WordPress Live API
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#66bb92] transition-colors">
            Property Listings
          </Link>
          <Link href="/#about-api" className="hover:text-[#66bb92] transition-colors">
            API Connection
          </Link>
          <Link href="/#contact" className="hover:text-[#66bb92] transition-colors">
            Contact Desk
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#66bb92]/15 text-[#2a684b] border border-[#66bb92]/30 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#66bb92] inline-block" />
            WordPress API Active
          </span>

          <Link
            href="/#contact"
            className="px-4 py-2 rounded-lg bg-[#66bb92] hover:bg-[#52a67d] text-white text-sm font-medium transition-colors shadow-sm"
          >
            Request Info
          </Link>
        </div>
      </div>
    </header>
  );
}
