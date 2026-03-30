import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does Lirisoft provide?",
        a: "Lirisoft provides a comprehensive range of IT services, including IT consulting, custom software development, Generative AI integration, automation solutions, data science research, and managed IT services. We cater to Fortune 500 companies, mid-sized enterprises, and startups."
      },
      {
        q: "When was Lirisoft founded?",
        a: "Lirisoft was founded in 2017 with a vision to help organizations improve business performance and quickly win new customers through innovative technology solutions."
      },
      {
        q: "What industries do you specialize in?",
        a: "We have extensive experience across various industries, including Healthcare, Finance, E-commerce, Logistics, and Telecommunications. Our expertise in Messaging, VoIP, and IoT allows us to serve diverse business needs."
      }
    ]
  },
  {
    category: "Development Process",
    questions: [
      {
        q: "What is your software development methodology?",
        a: "We follow an Agile development methodology, which ensures transparency, flexibility, and continuous improvement. Our process typically includes requirements gathering, UI/UX design, development, rigorous QA testing, and post-launch support."
      },
      {
        q: "How do you ensure the security of the solutions you build?",
        a: "Security is integrated into every stage of our development lifecycle. We follow industry best practices for secure coding, conduct regular security audits, and implement robust encryption and authentication protocols to protect your data."
      },
      {
        q: "Can you help with legacy system modernization?",
        a: "Yes, we specialize in helping organizations upgrade and scale their legacy applications. We can integrate modern technologies, migrate your systems to the cloud, and improve overall performance and maintainability."
      }
    ]
  },
  {
    category: "Engagement & Support",
    questions: [
      {
        q: "What engagement models do you offer?",
        a: "We offer flexible engagement models tailored to your project needs, including dedicated development teams, fixed-price projects, and time-and-materials arrangements. We work closely with you to determine the best fit for your goals and budget."
      },
      {
        q: "Do you provide post-launch support?",
        a: "Absolutely. We offer comprehensive post-launch support and maintenance services to ensure your solution remains up-to-date, secure, and continues to meet your evolving business requirements."
      },
      {
        q: "How do I get started with a project?",
        a: "Getting started is easy! You can reach out to us through our contact page or request a consultation. Our experts will discuss your requirements, provide initial insights, and outline a roadmap for your project."
      }
    ]
  }
];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>("General-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
           q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="FAQ - Frequently Asked Questions | Lirisoft"
        description="Find answers to common questions about Lirisoft's IT consulting services, software development process, and how we can help your business grow."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-bold mb-8"
            >
              <HelpCircle size={16} /> Help Center
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 font-display leading-tight"
            >
              How can we <span className="text-brand">help you?</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input 
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-6 pl-16 pr-8 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand transition-all text-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, catIdx) => (
                <div key={catIdx} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white text-sm">
                      {catIdx + 1}
                    </span>
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, qIdx) => {
                      const id = `${category.category}-${qIdx}`;
                      const isOpen = openIndex === id;
                      
                      return (
                        <motion.div 
                          key={qIdx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-brand shadow-xl' : 'border-slate-200 hover:border-brand/50 shadow-sm'}`}
                        >
                          <button 
                            onClick={() => toggleFAQ(id)}
                            className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
                          >
                            <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand' : 'text-slate-900'}`}>
                              {faq.q}
                            </span>
                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No results found</h3>
                <p className="text-slate-500">We couldn't find any answers matching your search term. Please try again or contact us.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-brand rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-12deg] translate-x-1/4" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Still have questions?</h2>
                <p className="text-xl text-blue-50 mb-10 leading-relaxed">
                  Our team is here to help you with any technical or business inquiries. Let's discuss how we can drive your innovation forward.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="bg-white text-brand px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg">
                    Contact Support <ArrowRight size={20} />
                  </Link>
                  <a href="mailto:info@lirisoft.com" className="bg-brand-dark text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    <MessageCircle size={20} /> Email Us
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" 
                    alt="Support Team" 
                    className="relative z-10 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
