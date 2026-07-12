import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  fetchPropertyBySlug,
  fetchAllWordPressProperties,
} from '@/lib/wordpress';
import ContactForm from '@/components/ContactForm';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const properties = await fetchAllWordPressProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = await fetchPropertyBySlug(slug);

  if (!property) {
    return {
      title: 'Property Not Found | Denver Real Estate Portal',
    };
  }

  return {
    title: `${property.title} | ${property.price} | Denver Real Estate Portal`,
    description: property.excerpt || property.description.slice(0, 160),
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await fetchPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Bar */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#66bb92] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Listings</span>
          </Link>

          <a
            href={property.wpPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-[#66bb92] transition-colors"
          >
            <span>WordPress Post #{property.id}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* STRICT 2-COLUMN DESKTOP LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT COLUMN (MAIN CONTENT) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main White Background Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6 text-gray-900">
              {/* Title & Price Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-gray-100 pb-6">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-[#66bb92]/15 text-[#2a684b] text-xs font-bold uppercase tracking-wider mb-2">
                    {property.status}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 mt-2">
                    <MapPin className="w-4 h-4 text-[#66bb92] flex-shrink-0" />
                    <span>{property.address}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs text-gray-500 block">Listing Price</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#66bb92]">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Property Image Gallery */}
              <div className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <div className="h-72 sm:h-96 w-full">
                  <img
                    src={property.mainImage}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* FEATURE BADGES (Bedrooms, Bathrooms, Size inside subtle light gray cards) */}
              <div className="grid grid-cols-3 gap-3 border-y border-gray-200 py-5">
                <div className="bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl flex flex-col items-center sm:items-start">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Bedrooms
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Bed className="w-5 h-5 text-[#66bb92]" />
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {property.bedrooms} Beds
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl flex flex-col items-center sm:items-start">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Bathrooms
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Bath className="w-5 h-5 text-[#66bb92]" />
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {property.bathrooms} Baths
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl flex flex-col items-center sm:items-start">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Property Size
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Maximize2 className="w-5 h-5 text-[#66bb92]" />
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {property.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-3 pt-2">
                <h2 className="text-lg font-bold text-gray-900">Property Description</h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {property.description}
                </div>
              </div>

              {/* Features & Amenities */}
              {property.features && property.features.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-base font-bold text-gray-900">Features &amp; Amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {property.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#66bb92] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN (SIDEBAR - CONTACT FORM WITH STICKY TOP-6) */}
          <div className="lg:col-span-1 sticky top-6">
            <ContactForm propertyTitle={property.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
