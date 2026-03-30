import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { ArrowRight, Cloud, BarChart, Settings, Headphones, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurWorkPage: React.FC = () => {
  const projects = [
    {
      title: "Gen AI",
      tech: "Kotlin / Spring Boot",
      image: "/gen-ai.png",
      desc: "Unleash the Power of AI Agents at Scale. Build, Deploy, and Manage Intelligent AI Agents with Unprecedented Ease."
    },
    {
      title: "SMB Messaging",
      tech: "ReactJS / Spring Boot",
      image: "/smb-messaging.png",
      desc: "Empower your business with SMS and MMS Campaigns. Effortlessly connect with your customers and drive engagement."
    },
    {
      title: "Cyber security",
      tech: "Security / Infrastructure",
      image: "/cyber-security.png",
      desc: "Advanced security protocols and monitoring to protect your enterprise assets from digital threats."
    },
    {
      title: "Human Resource Management (HRM)",
      tech: "ReactJS / Spring Boot",
      image: "/hrm.png",
      desc: "Comprehensive HR solution for managing employees, payroll, and performance tracking."
    },
    {
      title: "Field Activity Tracker",
      tech: "Flutter / ReactJS / Spring Boot",
      image: "/field-activity-tracker.png",
      desc: "Real-time tracking and management for field operations and workforce optimization."
    },
    {
      title: "Responsive App for Retail Store",
      tech: "UX / ReactJS / Spring Boot",
      image: "/retail-store.png",
      desc: "Modern, high-performance retail application with seamless cross-device experience."
    }
  ];

  const features = [
    { icon: <Cloud className="text-[#e5a83b]" />, title: "Cloud-based infrastructure for scalability and flexibility" },
    { icon: <BarChart className="text-[#e5a83b]" />, title: "Advanced analytics and reporting tools" },
    { icon: <Settings className="text-[#e5a83b]" />, title: "Seamless integration with existing systems" },
    { icon: <Headphones className="text-[#e5a83b]" />, title: "24/7 customer support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Our Work - Portfolio & Case Studies | Lirisoft"
        description="Explore Lirisoft's portfolio of successful projects, key features of our solutions, and why global enterprises choose us as their technology partner."
        canonical="https://lirisoft.com/our-work"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#001a26] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-display leading-tight"
          >
            We help <span className="text-[#e5a83b]">companies</span> turn their <br />
            ideas into <span className="text-[#e5a83b]">products</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mt-12 relative"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white/10">
              <img 
                src="/serviceback2.png" 
                alt="Featured Product" 
                width={1200}
                height={675}
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="bg-white p-6 text-[#001a26]">
                <h3 className="text-xl md:text-2xl font-bold font-display">Maximize your Marketing Impact with Advanced</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-32 bg-white">
        <div className="container w-11/12 mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001a26] font-display">
              Take a look at some of <span className="text-[#e5a83b]">our work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg border border-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a26]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm leading-relaxed line-clamp-3">{project.desc}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[#e5a83b] text-xs font-bold uppercase tracking-widest">{project.tech}</p>
                  <h3 className="text-2xl font-bold text-[#001a26] font-display group-hover:text-[#e5a83b] transition-colors">{project.title}</h3>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#e5a83b] transition-colors pt-2">
                    READ MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="container w-11/12 mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001a26] font-display">
              Key <span className="text-[#e5a83b]">Features</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-medium text-slate-700 leading-tight">{feature.title}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/key-fetures.png" 
                  alt="Key Features" 
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e5a83b]/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container w-11/12 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#001a26] mb-8 font-display">Why Choose Us?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are committed to delivering exceptional value to our clients. Our team of experts works tirelessly to ensure that our solutions meet your unique needs and exceed your expectations.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                With years of experience in the industry, we pride ourselves on our ability to innovate and adapt to the ever-changing technological landscape. Our dedication to customer satisfaction, combined with our cutting-edge technology, makes us the ideal partner for your business. Trust us to help you achieve your goals with confidence and efficiency.
              </p>
              <div className="space-y-4">
                {["Proven Track Record", "Expert Engineering Team", "Client-Centric Approach"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#e5a83b]/20 rounded-full flex items-center justify-center text-[#e5a83b]">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-bold text-[#001a26]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <img 
                  src="/why-choose-us.png" 
                  alt="Why Choose Us" 
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#001a26] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[120px] -z-0" />
        <div className="container w-11/12 mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display">Get Started Today</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Contact us to learn more about our product and how it can benefit your business.
            </p>
            <Link to="/contact" className="bg-[#e5a83b] hover:bg-[#d4972a] text-white px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-xl inline-flex items-center gap-3 group">
              Contact Us <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
