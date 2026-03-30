import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { CORE_SERVICES } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle2, HelpCircle, ArrowLeft, ArrowRight, Shield, Zap, BarChart3, Users } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = CORE_SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted mb-8">The service you are looking for does not exist or has been moved.</p>
          <Link to="/services" className="bg-brand text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Lirisoft"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${service.title} | Lirisoft`}
        description={service.description}
        structuredData={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--brand)/0.05,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              state={{ restoreScroll: true }}
              className="inline-flex items-center gap-2 text-brand font-bold mb-8 hover:gap-3 transition-all group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-8 tracking-tight leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Snippet Answer Block */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-brand p-10 md:p-16 rounded-[3rem] text-white shadow-2xl shadow-brand/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100 mb-8">The Core Value</h2>
              <p className="text-2xl md:text-4xl font-medium leading-relaxed font-display italic">
                "{service.shortAnswer}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-display tracking-tight">
                Why partner with us for <span className="text-brand">success</span>?
              </h2>
              <p className="text-lg text-muted mb-12 leading-relaxed">
                We don't just deliver services; we build long-term partnerships. Our approach combines deep technical expertise with a thorough understanding of your business objectives.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Rapid Delivery", desc: "Accelerated development cycles without compromising on quality or security." },
                  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security protocols integrated into every layer of our solutions." },
                  { icon: BarChart3, title: "Data-Driven", desc: "Leveraging analytics to optimize performance and drive measurable results." },
                  { icon: Users, title: "Expert Team", desc: "Access to a global pool of specialized engineers and domain experts." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-foreground font-display">{item.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-surface rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src={`https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800`} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                    <p className="text-white font-medium italic">"Lirisoft transformed our legacy infrastructure into a high-performance cloud environment in record time."</p>
                    <p className="text-brand-light text-sm mt-4 font-bold">— CTO, Fortune 500 Company</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 blur-3xl rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand mb-4">Expert Insights</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground font-display tracking-tight">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-3xl border border-muted/20 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all group"
              >
                <div className="flex gap-6">
                  <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-display leading-tight">{faq.question}</h4>
                    <p className="text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand rounded-[3.5rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-brand/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display tracking-tight">Ready to elevate your business?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our {service.title.toLowerCase()} can drive innovation and efficiency for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-white text-brand px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2 group">
                  Get a Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="bg-brand-dark backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center">
                  Explore Other Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
