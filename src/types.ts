export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: any;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortAnswer: string;
  faqs: { question: string; answer: string }[];
}

export interface GeoLocation {
  city: string;
  state: string;
  country: string;
  slug: string;
}
