export interface PropertyListing {
  id: number;
  slug: string;
  title: string;
  price: string;
  priceNumeric: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  description: string;
  excerpt: string;
  mainImage: string;
  gallery: string[];
  status: string;
  category: string;
  features: string[];
  wpPostUrl: string;
  dateModified: string;
}
