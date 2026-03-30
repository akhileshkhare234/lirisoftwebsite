import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CORE_SERVICES } from '../constants';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Code, Database, Globe, ShieldCheck, Server, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../components/OptimizedImage';

const ServicesListPage: React.FC = () => {
  const serviceIcons: Record<string, React.ReactNode> = {
    'custom-software': <Code size={32} />,
    'tax-tech': <Database size={32} />,
    'cloud-migration': <Globe size={32} />,
    'cybersecurity': <ShieldCheck size={32} />,
    'data-analytics': <Cpu size={32} />
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
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: CORE_SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        url: `https://lirisoft.com/services/${service.slug}`,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Our Services - Specialized Technology Solutions | Lirisoft"
        description="Explore Lirisoft's range of enterprise technology services, including custom software development, tax technology, cloud infrastructure, and AI solutions."
        canonical="https://lirisoft.com/services"
        structuredData={[breadcrumbSchema, itemListSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8fafc] -z-10 skew-x-[-12deg] translate-x-1/4" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand/10 text-brand text-sm font-bold tracking-wide uppercase"
            >
              Our Capabilities
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-8xl font-bold mb-8 font-display leading-[1.1] text-[#001a26]"
            >
              Specialized <span className="text-brand">Solutions</span> <br />
              for Global Scale
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl leading-relaxed"
            >
              We provide a comprehensive suite of technology services designed to solve your most complex business challenges and drive digital transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full relative overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {serviceIcons[service.id] || <Zap size={32} />}
                </div>
                
                <h2 className="text-2xl font-bold mb-4 font-display text-[#001a26] group-hover:text-brand transition-colors">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-10">
                  {["Scalable Architecture", "Security First", "Enterprise Ready"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/services/${service.slug}`} 
                  className="inline-flex items-center justify-between w-full bg-[#001a26] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00334e] transition-all group/btn"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a26] font-display mb-6">How We Deliver Outcomes</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Every engagement follows a delivery framework built for enterprise predictability: discovery, architecture,
              implementation, and measurable optimization. This helps teams launch faster while keeping compliance,
              reliability, and long-term maintainability in focus.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '1. Discovery & Roadmap',
                  desc: 'We align business goals, technical constraints, and KPIs before implementation begins.',
                },
                {
                  title: '2. Build & Integrate',
                  desc: 'Our teams ship in short cycles with security reviews, QA automation, and stakeholder demos.',
                },
                {
                  title: '3. Operate & Improve',
                  desc: 'After launch, we monitor performance and iterate to increase efficiency and business value.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                  <h3 className="text-lg font-bold text-[#001a26] mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
                <OptimizedImage
                  src="/serviceback2.png"
                  alt="Why Choose Us"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#e5a83b]/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-0" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-4 font-mono">Why Lirisoft</h2>
              <h3 className="text-4xl lg:text-5xl font-bold mb-8 font-display text-[#001a26] leading-tight">Expertise That Delivers Results</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We don't just provide services; we provide solutions. Our team of expert engineers and consultants work closely with you to ensure every project is delivered on time, within budget, and to the highest standards of quality.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                  <div className="text-4xl font-bold text-brand mb-1">98%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Client Satisfaction</div>
                </div>
                <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                  <div className="text-4xl font-bold text-brand mb-1">250+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Projects Completed</div>
                </div>
              </div>

              <Link to="/contact" className="bg-[#001a26] hover:bg-[#00334e] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg inline-flex items-center gap-2 group">
                Work With Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#001a26] rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e5a83b]/5 rounded-full blur-[150px] -z-0" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-display">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Contact us today for a free consultation and discover how our specialized technology solutions can help your business grow.
              </p>
              <Link to="/contact" className="bg-[#e5a83b] hover:bg-[#d4972a] text-white px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-xl inline-flex items-center gap-3 group">
                Get a Free Quote <ArrowRight size={24} className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesListPage;
