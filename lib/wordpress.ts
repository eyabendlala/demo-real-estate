import { PropertyListing } from '@/types/wordpress';

export const WP_API_BASE = 'https://indigo-ram-908666.hostingersite.com';
export const WP_USERNAME = 'Eya';
export const WP_PASSWORD = 'bOqwATeUgO(^5OYd3F^mPTsB';

// Fallback Denver listings from https://indigo-ram-908666.hostingersite.com/ in case of network timeout
const DENVER_REAL_PROPERTIES_FALLBACK: PropertyListing[] = [
  {
    id: 21715,
    slug: 'studio-in-denver',
    title: 'Studio in Denver',
    price: '$120,000',
    priceNumeric: 120000,
    address: 'Washington Park, Denver, CO',
    city: 'Denver',
    bedrooms: 5,
    bathrooms: 3,
    size: '1,200 Sq Ft',
    description: `Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage. Master bedroom includes both a standard closet and custom closet wall unit. Large windows face many directions for tons of natural light.

Inside this enchanting home, the great room enjoys a fireplace and views of the rear patio. The secluded master suite offers high ceilings, walk-in closets and spa-inspired bath.`,
    excerpt: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood featuring hardwood floors throughout and modern amenities.',
    mainImage: 'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/kitchen_modern2-800.webp',
    gallery: [
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/kitchen_modern2-800.webp',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/white_living-1.webp',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/interior-1.webp',
    ],
    status: 'Active',
    category: 'Studio',
    features: ['Attached Garage', 'Central Air', 'Equipped Kitchen', 'Fireplace', 'Hardwood Floors', 'Laundry Room', 'Swimming Pool'],
    wpPostUrl: 'https://indigo-ram-908666.hostingersite.com/property/studio-in-denver/',
    dateModified: '2026-07-10',
  },
  {
    id: 21725,
    slug: 'studio-in-denver-2',
    title: 'Office for rent in Denver',
    price: '$1,200 / mo',
    priceNumeric: 1200,
    address: 'Downtown Core, Denver, CO',
    city: 'Denver',
    bedrooms: 2,
    bathrooms: 2,
    size: '1,850 Sq Ft',
    description: `Prime commercial and residential flexible office space located in the heart of Denver. Offering open-concept work zones, executive meeting suites, high-speed fiber internet connection, and dedicated covered parking.

Conveniently situated near major transit hubs, popular dining spots, and urban parks.`,
    excerpt: 'Prime flexible office space located in the heart of Denver with executive suites and fiber internet.',
    mainImage: 'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/industrial.webp',
    gallery: [
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/industrial.webp',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/white_living-1.webp',
    ],
    status: 'For Rent',
    category: 'Office',
    features: ['High Speed Internet', '24/7 Security Access', 'Conference Facilities', 'Covered Parking', 'HVAC Controlled'],
    wpPostUrl: 'https://indigo-ram-908666.hostingersite.com/property/studio-in-denver-2/',
    dateModified: '2026-07-10',
  },
  {
    id: 20017,
    slug: 'gorgeous-condo-in-denver',
    title: 'Gorgeous Condo in Denver',
    price: '$485,000',
    priceNumeric: 485000,
    address: 'Cherry Creek, Denver, CO',
    city: 'Denver',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,640 Sq Ft',
    description: `Stunning modern condominium located in the vibrant Cherry Creek district of Denver. Floor-to-ceiling windows showcase mountain and city skyline views. Gourmet kitchen equipped with stainless steel appliances, quartz countertops, and custom cabinetry.

Spacious primary suite with walk-in closet and luxurious en-suite bathroom featuring dual vanities and soaking tub.`,
    excerpt: 'Stunning modern condominium in vibrant Cherry Creek with mountain and city skyline views.',
    mainImage: 'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2014/05/2-1-2.jpeg',
    gallery: [
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2014/05/2-1-2.jpeg',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2014/05/interior-1500-4.jpeg',
    ],
    status: 'For Sale',
    category: 'Condo',
    features: ['Mountain Views', 'Quartz Countertops', 'Stainless Appliances', 'Balcony', 'Fitness Center Access', 'Covered Parking'],
    wpPostUrl: 'https://indigo-ram-908666.hostingersite.com/property/gorgeous-condo-in-denver/',
    dateModified: '2026-07-10',
  },
  {
    id: 21857,
    slug: 'euhabitat',
    title: 'About Euhabitat Residential Estate',
    price: '$770,000',
    priceNumeric: 770000,
    address: 'Jalan Eunos District 14, Metropolitan Area',
    city: 'Denver Metro',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,380 Sq Ft',
    description: `Euhabitat is a premier residential community offering low-rise condominium residences with resort-style amenities. Units are catered to residents of all lifestyles, from young professionals to large families.

Featuring lush landscaped gardens, lap pools, clubhouse facilities, and excellent connectivity to urban conveniences.`,
    excerpt: 'Premier residential community offering low-rise condominium residences with resort-style amenities.',
    mainImage: 'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/Euhabitat-Eunos-Geylang-Paya-Lebar-Singapore.jpg',
    gallery: [
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/Euhabitat-Eunos-Geylang-Paya-Lebar-Singapore.jpg',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/kitchen_modern2-800.webp',
    ],
    status: 'For Sale',
    category: 'Condo',
    features: ['Resort Pool', 'Clubhouse', 'Landscaped Gardens', '24/7 Security', 'Private Parking'],
    wpPostUrl: 'https://indigo-ram-908666.hostingersite.com/property/euhabitat/',
    dateModified: '2026-07-10',
  },
  {
    id: 19386,
    slug: 'awesome-family-apartment',
    title: 'Awesome Family Apartment',
    price: '$340,000',
    priceNumeric: 340000,
    address: 'Park Avenue, Highlands District, CO',
    city: 'Denver',
    bedrooms: 4,
    bathrooms: 3,
    size: '2,100 Sq Ft',
    description: `An exceptional family residence combining generous living proportions with warm contemporary finishes. Open layout living and dining areas open onto a sunny private terrace.

Designed for comfortable everyday family living with top-rated schools and neighborhood parks just steps away.`,
    excerpt: 'Exceptional family residence combining generous living proportions with warm contemporary finishes.',
    mainImage: 'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2021/10/3-2.jpeg',
    gallery: [
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2021/10/3-2.jpeg',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2021/10/1-2.jpeg',
    ],
    status: 'For Sale',
    category: 'Apartment',
    features: ['Private Terrace', 'Family Room', 'Chef Kitchen', 'Storage Room', 'Walk-in Closets'],
    wpPostUrl: 'https://indigo-ram-908666.hostingersite.com/property/awesome-family-apartment/',
    dateModified: '2026-07-10',
  },
  {
    id: 20022,
    slug: 'modern-penthouse-apartment',
    title: 'Modern Penthouse Apartment',
    price: '$890,000',
    priceNumeric: 890000,
    address: 'Skyline Boulevard, Downtown Denver, CO',
    city: 'Denver',
    bedrooms: 3,
    bathrooms: 3,
    size: '2,450 Sq Ft',
    description: `Penthouse residence atop one of the most sought-after addresses in the city. Expansive private rooftop deck ideal for entertaining. Premium hardwood flooring, smart home lighting and climate control, and direct private elevator access.`,
    excerpt: 'Penthouse residence with expansive private rooftop deck and panoramic skyline views.',
    mainImage: 'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2014/05/house-2.jpg',
    gallery: [
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2014/05/house-2.jpg',
      'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2014/05/3-2.jpeg',
    ],
    status: 'For Sale',
    category: 'Penthouse',
    features: ['Private Rooftop Deck', 'Direct Elevator Access', 'Smart Home Automation', 'Wine Storage', '2 Reserved Parking Bays'],
    wpPostUrl: 'https://indigo-ram-908666.hostingersite.com/property/modern-penthouse-apartment/',
    dateModified: '2026-07-10',
  },
];

function cleanHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>?/gm, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .trim();
}

interface PropertyCatalogItem {
  price: string;
  priceNumeric: number;
  bedrooms: number;
  bathrooms: number;
  size: string;
  category: string;
  status: string;
}

const PROPERTY_CMS_CATALOG: Record<number, PropertyCatalogItem> = {
  21857: { price: '$770,000', priceNumeric: 770000, bedrooms: 3, bathrooms: 2, size: '1,380 Sq Ft', category: 'Condo', status: 'For Sale' },
  21720: { price: '$770,000', priceNumeric: 770000, bedrooms: 3, bathrooms: 2, size: '1,400 Sq Ft', category: 'Condo', status: 'For Sale' },
  21725: { price: '$1,200 / mo', priceNumeric: 1200, bedrooms: 2, bathrooms: 2, size: '1,850 Sq Ft', category: 'Commercial', status: 'For Rent' },
  21715: { price: '$120,000', priceNumeric: 120000, bedrooms: 1, bathrooms: 1, size: '650 Sq Ft', category: 'Studio', status: 'For Sale' },
  21702: { price: '$145,000', priceNumeric: 145000, bedrooms: 1, bathrooms: 1, size: '720 Sq Ft', category: 'Studio', status: 'For Sale' },
  21703: { price: '$135,000', priceNumeric: 135000, bedrooms: 1, bathrooms: 1, size: '680 Sq Ft', category: 'Studio', status: 'For Sale' },
  19386: { price: '$340,000', priceNumeric: 340000, bedrooms: 4, bathrooms: 3, size: '2,100 Sq Ft', category: 'Apartment', status: 'For Sale' },
  19371: { price: '$260,000', priceNumeric: 260000, bedrooms: 2, bathrooms: 1, size: '950 Sq Ft', category: 'Apartment', status: 'For Sale' },
  19365: { price: '$1,850 / mo', priceNumeric: 1850, bedrooms: 2, bathrooms: 2, size: '1,100 Sq Ft', category: 'Apartment', status: 'For Rent' },
  20025: { price: '$590,000', priceNumeric: 590000, bedrooms: 4, bathrooms: 3, size: '2,650 Sq Ft', category: 'Single Family', status: 'For Sale' },
  20024: { price: '$450,000', priceNumeric: 450000, bedrooms: 2, bathrooms: 2, size: '1,350 Sq Ft', category: 'Apartment', status: 'For Sale' },
  20023: { price: '$2,400 / mo', priceNumeric: 2400, bedrooms: 2, bathrooms: 2, size: '1,280 Sq Ft', category: 'Condo', status: 'For Rent' },
  20022: { price: '$890,000', priceNumeric: 890000, bedrooms: 3, bathrooms: 3, size: '2,450 Sq Ft', category: 'Penthouse', status: 'For Sale' },
  20021: { price: '$1,250,000', priceNumeric: 1250000, bedrooms: 5, bathrooms: 4, size: '4,200 Sq Ft', category: 'Villa', status: 'For Sale' },
  20020: { price: '$425,000', priceNumeric: 425000, bedrooms: 3, bathrooms: 2, size: '1,750 Sq Ft', category: 'Townhouse', status: 'For Sale' },
  20019: { price: '$1,450,000', priceNumeric: 1450000, bedrooms: 6, bathrooms: 5, size: '5,100 Sq Ft', category: 'Villa', status: 'For Sale' },
  20018: { price: '$2,800 / mo', priceNumeric: 2800, bedrooms: 3, bathrooms: 3, size: '1,820 Sq Ft', category: 'Townhouse', status: 'For Rent' },
  20017: { price: '$485,000', priceNumeric: 485000, bedrooms: 3, bathrooms: 2, size: '1,640 Sq Ft', category: 'Condo', status: 'For Sale' },
  59: { price: '$1,350 / mo', priceNumeric: 1350, bedrooms: 1, bathrooms: 1, size: '620 Sq Ft', category: 'Studio', status: 'For Rent' },
  31: { price: '$1,400 / mo', priceNumeric: 1400, bedrooms: 1, bathrooms: 1, size: '640 Sq Ft', category: 'Studio', status: 'For Rent' },
};

const DEFAULT_CATALOG_ITEM: PropertyCatalogItem = {
  price: '$525,000',
  priceNumeric: 525000,
  bedrooms: 3,
  bathrooms: 2,
  size: '1,750 Sq Ft',
  category: 'Residential',
  status: 'For Sale',
};

export async function fetchAllWordPressProperties(): Promise<PropertyListing[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const res = await fetch(`${WP_API_BASE}/wp-json/wp/v2/estate_property?per_page=20&_embed`, {
      next: { revalidate: 1 },
      //cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn('WordPress API returned status:', res.status, 'using Denver fallback properties.');
      return DENVER_REAL_PROPERTIES_FALLBACK;
    }

    const posts = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) {
      return DENVER_REAL_PROPERTIES_FALLBACK;
    }

    const properties: PropertyListing[] = posts.map((post: any) => {
      const title = cleanHtml(post.title?.rendered || 'Untitled Property');
      const slug = post.slug || '';
      const id = Number(post.id);
      const content = cleanHtml(post.content?.rendered || '');
      const excerpt = cleanHtml(post.excerpt?.rendered || content.slice(0, 160) + '...');
      const mainImage =
        post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        'https://indigo-ram-908666.hostingersite.com/wp-content/uploads/2023/08/kitchen_modern2-800.webp';

      // Parse tags from class_list
      const cityClass = post.class_list?.find((c: string) => c.startsWith('property_city-'));
      const areaClass = post.class_list?.find((c: string) => c.startsWith('property_area-'));
      const city = cityClass
        ? cityClass.replace('property_city-', '').replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
        : 'Denver';
      const area = areaClass
        ? areaClass.replace('property_area-', '').replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
        : 'Washington Park';

      const address = `${area}, ${city}, CO`;

      const fallbackMatch = DENVER_REAL_PROPERTIES_FALLBACK.find((item) => item.id === id || item.slug === slug);

      // Dynamic price extraction from live WordPress custom meta field (property_price or headless_details)
      let rawPriceStr = post.property_price || post.headless_details?.price || '';
      let price = fallbackMatch ? fallbackMatch.price : DEFAULT_CATALOG_ITEM.price;
      let priceNumeric = fallbackMatch ? fallbackMatch.priceNumeric : DEFAULT_CATALOG_ITEM.priceNumeric;

      if (rawPriceStr !== '' && rawPriceStr !== null && rawPriceStr !== undefined) {
        const cleanStr = String(rawPriceStr).trim();
        const num = Number(cleanStr.replace(/[^0-9.]/g, ''));
        if (!isNaN(num) && num > 0) {
          priceNumeric = num;
          // Format with dollar sign and commas if raw string was purely numeric
          price = /^[0-9,.]+$/.test(cleanStr) ? `$${num.toLocaleString()}` : cleanStr;
        } else {
          price = cleanStr;
        }
      }

      // Title-based price extraction if a currency pattern is explicitly included in the title
      const titlePriceMatch = title.match(/(?:S\$|\$)\s*(\d[\d,]*)/);
      if (titlePriceMatch && titlePriceMatch[0]) {
        price = titlePriceMatch[0].trim();
        const num = Number(price.replace(/[^0-9.]/g, ''));
        if (!isNaN(num) && num > 0) {
          priceNumeric = num;
        }
      }

      // Dynamic status extraction from custom taxonomy (property_status / headless_details)
      const dynamicStatus =
        (Array.isArray(post.property_status) && post.property_status.length > 0 ? post.property_status[0] : '') ||
        post.headless_details?.status;
      const status = dynamicStatus || (fallbackMatch ? fallbackMatch.status : DEFAULT_CATALOG_ITEM.status);

      // Dynamic category/type extraction from custom taxonomy (property_type / headless_details)
      const dynamicCategory =
        (Array.isArray(post.property_type) && post.property_type.length > 0 ? post.property_type[0] : '') ||
        post.headless_details?.category;
      const category = dynamicCategory || (fallbackMatch ? fallbackMatch.category : DEFAULT_CATALOG_ITEM.category);

      const bedrooms = post.headless_details?.bedrooms || (fallbackMatch ? fallbackMatch.bedrooms : DEFAULT_CATALOG_ITEM.bedrooms);
      const bathrooms = post.headless_details?.bathrooms || (fallbackMatch ? fallbackMatch.bathrooms : DEFAULT_CATALOG_ITEM.bathrooms);
      const size = post.headless_details?.size || (fallbackMatch ? fallbackMatch.size : DEFAULT_CATALOG_ITEM.size);

      return {
        id,
        slug,
        title,
        price,
        priceNumeric,
        address,
        city,
        bedrooms,
        bathrooms,
        size,
        description: content || excerpt,
        excerpt,
        mainImage,
        gallery: [mainImage],
        status,
        category,
        features: [
          'Hardwood Floors',
          'Equipped Kitchen',
          'Central Air Conditioning',
          'Laundry Facilities',
          'Attached Parking',
          'High Speed Internet Ready',
        ],
        wpPostUrl: post.link || `${WP_API_BASE}/property/${slug}/`,
        dateModified: post.modified || '2026-07-10',
      };
    });

    return properties;
  } catch (error) {
    console.error('Error fetching from WordPress API:', error);
    return DENVER_REAL_PROPERTIES_FALLBACK;
  }
}

export async function fetchPropertyBySlug(slug: string): Promise<PropertyListing | null> {
  const allProperties = await fetchAllWordPressProperties();
  const matched = allProperties.find((p) => p.slug === slug);
  if (matched) return matched;

  // Check fallback as secondary safety
  const fallbackMatched = DENVER_REAL_PROPERTIES_FALLBACK.find((p) => p.slug === slug);
  return fallbackMatched || null;
}
