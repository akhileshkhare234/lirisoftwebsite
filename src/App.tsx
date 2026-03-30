import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesListPage = lazy(() => import('./pages/ServicesListPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const GeoServicePage = lazy(() => import('./pages/GeoServicePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const RouteLoader = () => (
  <div className="min-h-[50vh] grid place-items-center px-6">
    <div className="text-center">
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-brand/20 border-t-brand" />
      <p className="mt-4 text-muted">Loading page...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <Layout>
            <Suspense fallback={<RouteLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesListPage />} />
                <Route path="/:slug" element={<ServicePage />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/services/:serviceSlug/:locationSlug" element={<GeoServicePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/our-work" element={<OurWorkPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
