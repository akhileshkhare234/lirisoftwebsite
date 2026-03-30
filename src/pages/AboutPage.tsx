import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Target, Award, Globe, Shield, Zap, Heart, CheckCircle2, 
  ArrowRight, Star, Briefcase, Cpu, Layers, Activity, Database, 
  Search, Code, ShieldCheck, PieChart, CloudDownload, ChevronLeft, 
  ChevronRight, Beaker, Terminal, Settings, Smartphone, ClipboardCheck,
  BarChart3, Cloud, BrainCircuit, TrendingUp, Atom, Cable
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    name: "Generative AI Services",
    icon: <BrainCircuit size={18} />,
    mainIcon: <BrainCircuit size={32} />,
    details: "Invent, build, integrate, scale and upgrade your applications with Lirisoft! We have been harnessing digital technologies for the benefit of Fortune 500 businesses, mid and large enterprises, and startups across the variety of industries. We help you to build high-quality software solutions and products as well as deliver a wide range of related professional services.",
    additionalDetails: "Generative AI Services help businesses automate tasks and generate insights using AI.",
    imageSrc: "/gen-ai.png"
  },
  {
    name: "Automation",
    icon: <TrendingUp size={18} />,
    mainIcon: <TrendingUp size={32} />,
    details: "Our Automation services streamline your business processes, reduce manual effort, and increase efficiency. We implement intelligent automation solutions using the latest technologies to optimize workflows and drive productivity.",
    additionalDetails: "We offer RPA, workflow automation, and integration services tailored to your unique business needs.",
    imageSrc: "/trending-up-down.png"
  },
  {
    name: "Solution Development And Evolution",
    icon: <Atom size={18} />,
    mainIcon: <Atom size={32} />,
    details: "We provide end-to-end solution development services, from initial concept to deployment and beyond. Our team ensures your solutions evolve with your business needs.",
    additionalDetails: "Our expertise includes cloud integration, microservices architecture, and continuous delivery pipelines.",
    imageSrc: "/serviceback2.png"
  },
  {
    name: "End-To-End Solution Development",
    icon: <Cable size={18} />,
    mainIcon: <Cable size={32} />,
    details: "Our End-To-End Solution Development services cover every stage of the software lifecycle. From ideation to deployment, we ensure your product meets the highest standards.",
    additionalDetails: "We focus on scalability, performance, and user experience to deliver solutions that grow with your business.",
    imageSrc: "/custom-software-development.png"
  },
  {
    name: "Data Science Research",
    icon: <Database size={18} />,
    mainIcon: <Database size={32} />,
    details: "Our Data Science Research services explore innovative ways to leverage data for your business. We conduct in-depth research to uncover new opportunities and optimize existing processes.",
    additionalDetails: "Our team specializes in natural language processing, computer vision, and advanced statistical modeling.",
    imageSrc: "/Database.png"
  }
];

const sliderData = [
  {
    src: "/serviceback2.png",
    alt: "Requirements Gathering",
    highlight: "1. Requirements Gathering & Planning",
    title: "Translate the validated idea into functional and technical requirements. Define product vision, goals, key features, and success metrics. Create a product roadmap and resource plan."
  },
  {
    src: "/backimage1.jpeg",
    alt: "UI/UX Design",
    highlight: "2. UI/UX Design",
    title: "Design user-centric interfaces and experiences. Start with wireframes and move to interactive prototypes, ensuring usability, accessibility, and intuitive interaction."
  },
  {
    src: "/custom-software-development.png",
    alt: "Development",
    highlight: "3. Development",
    title: "Develop the application using best practices and modern technologies. Implement features, integrate systems, and ensure the solution meets all requirements."
  },
  {
    src: "/check-check.png",
    alt: "Testing & QA",
    highlight: "4. Testing & QA",
    title: "Conduct rigorous testing—unit, integration, functional, and user acceptance—to ensure performance, security, and reliability across platforms."
  },
  {
    src: "/monitor-cog.png",
    alt: "Launch & Deployment",
    highlight: "5. Launch & Deployment",
    title: "Deploy the product to production. Prepare support infrastructure, documentation, and monitor systems for early issues post-launch."
  },
  {
    src: "/gauge.png",
    alt: "Post-Launch Support",
    highlight: "6. Post-Launch Support & Iteration",
    title: "Gather user feedback, fix bugs, and plan enhancements. Continuously improve based on analytics, user behavior, and business goals."
  }
];

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Lirisoft - Our Mission, Values & Team"
        description="Learn about Lirisoft's journey, our commitment to excellence in IT consulting and software development, and the values that drive our success."
        canonical="https://lirisoft.com/about"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/serviceback2.png" 
            alt="Team Collaboration" 
            width={2070}
            height={1380}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="w-11/12 mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-sm p-12 max-w-xl rounded-sm shadow-2xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              <span className="text-brand">What</span> drives us,<br />
              defines us.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="w-11/12 mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold text-slate-900">About Us</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-3xl">
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Founded in 2017, Lirisoft has been a provider of IT consulting and software development services. We have helped non-IT organizations and software product companies improve business performance and quickly win new customers.
                </p>
                <ul className="space-y-6">
                  {[
                    "Help you create and manage any process for your business needs.",
                    "Improve your business performance, optimize customer service, and tap into digital transformation.",
                    "Expertise in Messaging, VoIP, Automation, Internet of Things and Computer Vision technologies."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1 w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-24 bg-white">
        <div className="w-11/12 mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-10 h-10 text-brand" />, value: "53+", label: "Completed Projects" },
              { icon: <Star className="w-10 h-10 text-brand" />, value: "37M", label: "Users Worldwide" },
              { icon: <Award className="w-10 h-10 text-brand" />, value: "4.3+", label: "App Ratings" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 text-center flex flex-col items-center group hover:shadow-xl transition-all"
              >
                <div className="mb-6 p-4 bg-brand/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Major Partners */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand/10 to-transparent pointer-events-none" />
        <div className="w-11/12 mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Our Major Partners</h2>
            <p className="text-slate-600 text-lg">Trusted by global teams across technology, healthcare, and enterprise services.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Netpace', src: '/partner-netpace.png' },
              { name: 'Departamento De Salud', src: '/partner-salud.png' },
              { name: 'Impressico', src: '/partner-impressico.png' },
              { name: 'Senseer', src: '/partner-senseer.png' },
              { name: 'Wytcote', src: '/partner-wytcote.png' },
              { name: 'Learners Ink', src: '/partner-learnersink.png' },
              { name: 'Infovision', src: '/partner-infovision.jpg' },
              { name: 'ProcureWiz', src: '/procurewizlogo.png' }
            ].map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white p-6 md:p-7 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center h-32 md:h-36 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={220}
                  height={80}
                  className="max-h-14 md:max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-24 bg-white">
        <div className="w-11/12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Consulting Services <span className="text-brand">we offer</span></h2>
          <p className="text-slate-600 mb-16 max-w-3xl">
            Invent, build, integrate, scale and upgrade your applications with Lirisoft! We have been harnessing digital technologies for the benefit of Fortune 500 businesses, mid and large enterprises, and startups across the variety of industries. We help you to build high-quality software solutions and products as well as deliver a wide range of related professional services.
          </p>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-3">
              {servicesData.map((tab, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full flex items-center gap-4 px-6 py-6 text-left rounded-lg transition-all ${activeTab === i ? 'bg-brand text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                >
                  {tab.icon}
                  <span className="font-semibold">{tab.name}</span>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-12 rounded-2xl border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 min-h-[400px]"
                >
                  <div className="hidden md:block shrink-0">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                      {servicesData[activeTab].mainIcon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{servicesData[activeTab].name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {servicesData[activeTab].details}
                    </p>
                    <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand">
                      <p className="text-slate-700 font-medium italic">
                        {servicesData[activeTab].additionalDetails}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software Development Section */}
      <section className="py-24 bg-slate-50">
        <div className="w-11/12 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/custom-software-development.png" 
                alt="Software Development Team" 
                width={1200}
                height={900}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                <span className="text-brand">Custom</span> Software development
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Invent, build, integrate, scale and upgrade your applications with Lirisoft! We have been harnessing digital technologies for the benefit of Fortune 500 businesses, mid and large enterprises, and startups across the variety of industries. We help you to build high-quality software solutions and products as well as deliver a wide range of related professional services.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you need a tailored enterprise system, a customer-facing mobile app, or complex cloud-based infrastructure, our team ensures the final product aligns perfectly with your business goals. From initial concept to deployment and ongoing support, we follow agile methodologies to deliver scalable, secure, and innovative solutions—on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work Section */}
      <section className="py-24 bg-white">
        <div className="w-11/12 mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center"><span className="text-brand">How</span> we work</h2>
          <p className="text-slate-600 mb-16 text-center max-w-3xl mx-auto">
            We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs of users.
          </p>

          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
            <div className="p-12">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className="relative group">
                    <img 
                      src={sliderData[currentSlide].src} 
                      alt={sliderData[currentSlide].alt} 
                      width={2070}
                      height={1164}
                      className="rounded-2xl shadow-lg w-full aspect-video object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all rounded-2xl" />
                    
                    <button 
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-slate-900 hover:bg-brand hover:text-white transition-all z-20"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-slate-900 hover:bg-brand hover:text-white transition-all z-20"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">{sliderData[currentSlide].highlight}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {sliderData[currentSlide].title}
                      </p>
                      
                      <div className="mt-12 flex gap-2">
                        {sliderData.map((_, i) => (
                          <button 
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'w-8 bg-brand' : 'w-2 bg-slate-200'}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Leading Managed Services Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-brand/10 to-transparent pointer-events-none" />
        <div className="w-11/12 mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display leading-tight">
              Industry Leading Managed <span className="text-brand">Services & Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team helps you transform operations with modern, practical capabilities that scale with your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: '/sliders-vertical.png', title: 'Flexible Engagement Models', desc: 'Flexible delivery and collaboration models tailored to your priorities.' },
              { image: '/ratio.png', title: 'Mobile Development', desc: 'High-quality mobile apps with performance-first architecture and UX.' },
              { image: '/headset.png', title: 'Integrated & Dedicated Teams', desc: 'Extension teams that blend seamlessly with your internal workflows.' },
              { image: '/monitor-cog.png', title: 'Custom Software Development', desc: 'Business-focused software engineered for long-term reliability and scale.' },
              { image: '/check-check.png', title: 'QA and Automation', desc: 'Automation-driven QA pipelines to improve release confidence and speed.' },
              { image: '/chart-column.png', title: 'Analytics and Review', desc: 'Actionable insights from clear reporting, metrics, and performance reviews.' },
              { image: '/lightbulb.png', title: 'Product Innovation & Technology', desc: 'Innovation strategy and technology guidance for future-ready solutions.' },
              { image: '/gauge.png', title: 'Enterprise Solutions', desc: 'Enterprise-grade implementations aligned with complex business needs.' },
              { image: '/Vector.png', title: 'Cloud Backup Systems', desc: 'Reliable backup and recovery systems to protect mission-critical data.' }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:border-brand/30 group-hover:bg-brand/5 transition-all">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-3 leading-snug uppercase tracking-wide">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="w-11/12 mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-display">Join Our Journey</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Whether you're looking for a technology partner or a place to grow your career, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-brand text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-xl inline-flex items-center gap-2">
                  Work With Us <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-xl inline-flex items-center gap-2">
                  View Careers
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
