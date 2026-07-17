import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PropertyListing } from '@/types/wordpress';
import { Bed, Bath, Maximize2, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: PropertyListing;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group portal-card portal-card-hover rounded-xl overflow-hidden flex flex-col justify-between h-full bg-white transition-all duration-300 hover:shadow-lg block"
    >
      <div>
        {/* Main Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <Image
            src={property.mainImage}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2.5 py-1 rounded bg-[#66bb92] text-white text-xs font-semibold uppercase tracking-wide shadow-sm">
              {property.status}
            </span>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1.5 rounded-lg bg-gray-900/85 backdrop-blur-sm text-white font-bold text-base shadow-sm">
              {property.price}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#66bb92]" />
            <span>{property.address}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-[#66bb92] transition-colors">
            {property.title}
          </h3>

          <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
            {property.excerpt}
          </p>

          {/* Property details grid */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-600">
            <div className="flex items-center gap-1.5 font-medium">
              <Bed className="w-4 h-4 text-[#66bb92]" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Bath className="w-4 h-4 text-[#66bb92]" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Maximize2 className="w-4 h-4 text-[#66bb92]" />
              <span>{property.size}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
