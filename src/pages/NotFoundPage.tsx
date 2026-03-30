import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-[65vh] grid place-items-center px-6 py-20 bg-slate-50">
      <SEOHead
        title="404 - Page Not Found | Lirisoft"
        description="The page you are looking for does not exist. Explore Lirisoft services, case studies, and contact options."
        canonical="https://lirisoft.com/404"
        noIndex={true}
      />

      <div className="max-w-xl text-center">
        <p className="text-brand font-bold tracking-widest uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          This URL may have moved or no longer exists. Use the links below to continue browsing.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-lg bg-brand px-6 py-3 text-white font-bold hover:bg-brand-dark transition-colors">
            Go Home
          </Link>
          <Link to="/services" className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:bg-white transition-colors">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
