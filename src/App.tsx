import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesListPage from './pages/ServicesListPage';
import ServicePage from './pages/ServicePage';
import GeoServicePage from './pages/GeoServicePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import OurWorkPage from './pages/OurWorkPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <Layout>
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
              {/* Add more routes as needed */}
              <Route path="*" element={<div className="py-20 text-center">404 - Page Not Found</div>} />
            </Routes>
          </Layout>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
