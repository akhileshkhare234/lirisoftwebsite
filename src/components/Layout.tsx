import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our work', path: '/our-work' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blog' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [location]);

  // Ensure each tab navigation starts at the top of the new page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-brand/30">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-muted/20 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                aria-current={isActivePath(item.path) ? 'page' : undefined}
                className={`font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-brand underline underline-offset-8 decoration-2'
                    : 'text-muted hover:text-brand'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-muted/20 mx-2" />
            <ThemeToggle />
            <Link to="/contact" className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-brand/20 flex items-center gap-2 group">
              Contact Us <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2 text-muted" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-muted/20 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6 flex flex-col">
                {[
                  ...navItems,
                  { name: 'FAQ', path: '/faq' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    aria-current={isActivePath(item.path) ? 'page' : undefined}
                    className={`text-2xl font-bold transition-colors ${
                      isActivePath(item.path) ? 'text-brand' : 'text-foreground hover:text-brand'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-surface text-muted py-20 border-t border-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="mb-6 block">
                <Logo />
              </Link>
              <p className="max-w-md mb-8 leading-relaxed">
                Lirisoft is a global technology consulting firm. We specialize in building high-performance software and IoT & automation solutions for the modern enterprise.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-foreground font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services/custom-software" className="hover:text-brand transition-colors">Custom Software</Link></li>
                <li><Link to="/services/iot-automation" className="hover:text-brand transition-colors">IoT & Automation</Link></li>
                <li><Link to="/services/cloud-migration" className="hover:text-brand transition-colors">Cloud Migration</Link></li>
                <li><Link to="/services/cybersecurity" className="hover:text-brand transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
                <li><Link to="/our-work" className="hover:text-brand transition-colors">Our Work</Link></li>
                <li><Link to="/team" className="hover:text-brand transition-colors">Our Team</Link></li>
                <li><Link to="/blog" className="hover:text-brand transition-colors">Blog</Link></li>
                <li><Link to="/faq" className="hover:text-brand transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-muted/20 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Lirisoft. All rights reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
