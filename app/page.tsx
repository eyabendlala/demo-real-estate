import React from 'react';
import { fetchAllWordPressProperties } from '@/lib/wordpress';
import PropertyCard from '@/components/PropertyCard';
import { Globe, CheckCircle2 } from 'lucide-react';


export default async function HomePage() {
  const properties = await fetchAllWordPressProperties();

  return (
    <div className="space-y-12 pb-16 pt-8 bg-gray-50">
      {/* LIVE WORDPRESS API STATUS BANNER */}
      <section id="about-api" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#66bb92] text-white flex items-center justify-center shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">
                Real-Time Node.js Backend &amp; WordPress Headless Integration
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                Authenticated API connection fetching Denver listings from <span className="font-semibold">wp/v2/estate_property</span>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2a684b] bg-[#66bb92]/15 border border-[#66bb92]/30 px-3 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4" />
            <span>API Synchronized ({properties.length} Properties Active)</span>
          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Available homes</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Showing active listings from the WordPress database
            </p>
          </div>
          <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
            {properties.length} Results
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              priority={index === 0 || property.slug === 'euhabitat' || property.title.toLowerCase().includes('euhabitat')}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
