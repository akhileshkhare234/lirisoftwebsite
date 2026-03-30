import React from 'react';
import { useParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { CORE_SERVICES, POPULAR_LOCATIONS } from '../constants';

const GeoServicePage: React.FC = () => {
  const { serviceSlug, locationSlug } = useParams<{ serviceSlug: string; locationSlug: string }>();
  
  const service = CORE_SERVICES.find(s => s.slug === serviceSlug);
  const location = POPULAR_LOCATIONS.find(l => l.slug === locationSlug);

  if (!service || !location) {
    return <div className="py-20 text-center">Page not found.</div>;
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Lirisoft ${location.city}`,
    "description": `Expert ${service.title} in ${location.city}, ${location.state}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.state,
      "addressCountry": location.country
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lirisoft.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://lirisoft.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://lirisoft.com/services/${service.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${service.title} in ${location.city}`,
        item: `https://lirisoft.com/services/${service.slug}/${location.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${service.title} in ${location.city}, ${location.state}`}
        description={`Looking for ${service.title} in ${location.city}? Lirisoft offers top-tier ${service.id} solutions tailored for businesses in ${location.city}, ${location.state}.`}
        canonical={`https://lirisoft.com/services/${service.slug}/${location.slug}`}
        structuredData={[localBusinessSchema, breadcrumbSchema]}
      />

      <section className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            {service.title} in <span className="text-brand">{location.city}</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl">
            Lirisoft provides specialized {service.title.toLowerCase()} for enterprises and startups in {location.city}, {location.state}. Our local expertise combined with global standards ensures your success.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="prose prose-lg max-w-4xl dark:prose-invert">
            <h2>Local Expertise, Global Scale</h2>
            <p>
              As a leading provider of {service.title.toLowerCase()} in {location.city}, we understand the unique challenges faced by businesses in the {location.state} region. Whether you are a tech startup in Silicon Valley or a financial firm in Austin, our solutions are built to scale.
            </p>
            <h3>Why {location.city} Businesses Trust Lirisoft</h3>
            <ul>
              <li>Proximity to key tech hubs</li>
              <li>Deep understanding of local regulatory requirements</li>
              <li>24/7 support across multiple time zones</li>
              <li>Proven track record with {location.country}-based clients</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Internal Linking for SEO */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-6">
          <h4 className="font-bold mb-4 text-foreground">Other Locations for {service.title}</h4>
          <div className="flex flex-wrap gap-4">
            {POPULAR_LOCATIONS.filter(l => l.slug !== locationSlug).map(l => (
              <a key={l.slug} href={`/services/${serviceSlug}/${l.slug}`} className="text-brand hover:underline">
                {service.title} in {l.city}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeoServicePage;
