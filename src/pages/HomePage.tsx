import React, { useEffect, useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Globe, ShieldCheck, Zap, Users, 
   CheckCircle2, Server, Cpu, ChevronLeft, ChevronRight, Quote, PlayCircle 
} from 'lucide-react';
import { Link, useLocation, useNavigationType } from 'react-router-dom';

const testimonials = [
  {
    quote: "We had an outstanding experience collaborating with Lirisoft. Their development team demonstrated exceptional expertise, reliability, and a commitment to meeting deadlines. They delivered high-quality solutions tailored to our needs, ensuring a seamless partnership. We wholeheartedly recommend Lirisoft for their professionalism and technical excellence.",
    author: "Mahendra",
    role: "CEO Canyon Tech",
    avatar: "/Company1.jpeg"
  },
  {
    quote: "Lirisoft's team transformed our vision into a robust digital product. Their attention to detail and proactive communication made the entire development process smooth and efficient. They are truly a partner you can trust for complex software projects.",
    author: "Sarah Jenkins",
    role: "Product Manager, InnovateX",
    avatar: "/Company2.jpeg"
  },
  {
    quote: "The level of technical proficiency at Lirisoft is unmatched. They helped us scale our infrastructure and optimize our workflows, resulting in a 40% increase in operational efficiency. Highly recommended for any enterprise-level IT consulting.",
    author: "David Chen",
    role: "CTO, Global Systems",
    avatar: "/Company3.jpeg"
  }
];

const HomePage: React.FC = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lirisoft",
    "url": "https://lirisoft.com",
    "logo": "https://lirisoft.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/lirisoft",
      "https://twitter.com/lirisoft"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut' as const
  };

  const effortlessTracks = [
    {
      title: 'Web Development',
      description: 'Build high-performance products with modern architecture and clean engineering practices.',
      link: '/custom-software-development',
      icon: <Cpu size={24} />
    },
    {
      title: 'Cloud Migration',
      description: 'Move your workloads with confidence using secure, low-downtime migration blueprints.',
      link: '/cloud-migration',
      icon: <Globe size={24} />
    },
    {
      title: 'Cyber Security',
      description: 'Protect systems and customer data with layered controls, auditing, and proactive monitoring.',
      link: '/cybersecurity',
      icon: <ShieldCheck size={24} />
    }
  ];

  const itEcosystemSectionData = {
    imageSrc: '/serviceback2.png',
    imageAlt: 'Comprehensive IT ecosystem management and digital infrastructure',
    title: 'Comprehensive Care for',
    subtitle: 'Your IT Ecosystem',
    description:
      'We help businesses manage infrastructure, cloud, security, and operations in one coordinated ecosystem so your teams can move faster with confidence.',
    buttonText: 'View Our Work'
  };

  useEffect(() => {
    const routeState = location.state as { restoreScroll?: boolean } | null;
    const hasPendingRestore = sessionStorage.getItem('home-restore-pending') === '1';
    const shouldRestore = Boolean(routeState?.restoreScroll) || (navigationType === 'POP' && hasPendingRestore);
    if (!shouldRestore) return;

    const savedY = sessionStorage.getItem('home-last-scroll-y');
    if (!savedY) return;

    const y = Number(savedY);
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number.isFinite(y) ? y : 0, behavior: 'auto' });
    });
    sessionStorage.removeItem('home-last-scroll-y');
    sessionStorage.removeItem('home-restore-pending');
  }, [location, navigationType]);

  const handleLearnMoreNavigation = () => {
    sessionStorage.setItem('home-last-scroll-y', String(window.scrollY));
    sessionStorage.setItem('home-restore-pending', '1');
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Your Trusted Partner for IT Consulting and Software Development"
        description="Founded in 2017, Lirisoft provides IT consulting and software development services, helping organizations improve performance and win new customers through digital transformation."
        canonical="https://lirisoft.com/"
        structuredData={organizationSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-12 lg:pt-12 lg:pb-12 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8fafc] -z-10 skew-x-[-12deg] translate-x-1/4" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10" />
        
        <div className="container w-11/12  mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand/10 text-brand text-sm font-bold tracking-wide uppercase"
              >
                Innovation Meets Vision
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 font-display leading-[1.1] text-[#001a26]">
                Lirisoft Vision Into <span className="text-brand">Innovation</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-12 max-w-xl leading-relaxed">
                Founded in 2017, Lirisoft has been a provider of IT consulting and software development services. We have helped non-IT organizations and software product companies improve business performance and quickly win new customers.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="bg-[#e5a83b] hover:bg-[#d4972a] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 w-fit group">
                  Request a Consultation <ArrowRight size={20} className="bg-white/20 rounded-full p-0.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-lg font-bold text-[#001a26] border-2 border-[#001a26]/10 hover:bg-[#001a26]/5 transition-all">
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
     <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto h-[540px] w-full max-w-[320px] sm:h-[720px] sm:max-w-[420px] md:h-[760px] md:max-w-[570px] lg:h-[800px] flex justify-center items-center overflow-hidden"
              aria-label="Hero image showcase"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={floatingTransition}
                className="absolute inset-0"
              >

                           {/* Floating Stats or Icons */}
                {/* <div className="absolute top-10 -right-0 bg-white p-4 rounded-2xl shadow-lg z-30 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Clients</div>
                      <div className="text-lg font-bold text-[#001a26]">500+</div>
                    </div>
                  </div>
                </div> */}
              

                <motion.div
                  aria-hidden="true"
                  className="w-[70px] h-[130px] absolute top-[250px] left-[8px] rounded-[180.5px] border border-[#0B9DE0] z-[12] md:w-[100px] md:h-[183px] md:top-[336px] md:left-[35px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ ...floatingTransition, duration: 5 }}
                />

                <motion.div
                  aria-hidden="true"
                  className="w-[95px] h-[180px] absolute top-[340px] left-[18px] rounded-[180.5px] bg-[#043A53] z-[11] md:w-[159px] md:h-[293px] md:top-[450px] md:left-[58px]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ ...floatingTransition, duration: 7 }}
                />

                <div className="w-[220px] h-[410px] absolute top-[35px] left-[56px] rounded-[180.5px] z-10 md:w-[361px] md:h-[668px] md:top-[75px] md:left-[119px]">
                  <img
                    src="/backimage1.jpeg"
                    alt="Professional working on laptop for digital innovation"
                    width={361}
                    height={668}
                    className="object-cover w-full h-full rounded-[180.5px]"
                    loading="eager"
                  />
                </div>

                <motion.div
                  aria-hidden="true"
                  className="w-[230px] h-[430px] absolute top-[50px] left-[72px] rounded-[180.5px] bg-[#043A5333] z-[9] md:w-[373px] md:h-[687px] md:top-[93px] md:left-[197px]"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ ...floatingTransition, duration: 8 }}
                />
              </motion.div>
            </motion.div>
         
          </div>
        </div>
      </section>

      {/* Elite Teams Section */}
      <section className="py-32 bg-[#001a26] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e5a83b]/5 rounded-full blur-[150px] -z-0" />
        
        <div className="container w-11/12 mx-auto px-6 relative z-10">
          <div className="text-left max-w-6xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 font-display"
            >
              Elite Teams <br/><span className='text-brand'>& Expert Professionals</span>
            </motion.h2>
            {/* <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg"
            >
              We are committed to providing our customers with the best possible service.
            </motion.p> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-14"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-black">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/85 to-transparent z-20" />
              <video
                src="/aboutus.mp4"
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                className="w-full aspect-video object-cover"
                aria-label="About us video"
              >
                Your browser does not support the video tag.
              </video>

              <div className="absolute top-4 left-4 md:left-6 z-30">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e5a83b]/95 text-[#001a26] px-4 py-2 font-bold text-xs md:text-sm tracking-wide uppercase shadow-lg">
                  <PlayCircle size={16} />
                  About Lirisoft
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="text-[#e5a83b]" size={32} />, 
                title: "Expert Professionals", 
                desc: "Our team consists of highly skilled professionals with years of experience in their respective fields." 
              },
              { 
                icon: <ShieldCheck className="text-[#e5a83b]" size={32} />, 
                title: "Elite Teams", 
                desc: "We build elite teams that are dedicated to delivering high-quality solutions tailored to your needs." 
              },
              { 
                icon: <Zap className="text-[#e5a83b]" size={32} />, 
                title: "Customer Service", 
                desc: "We prioritize our customers and ensure that they receive the best possible support and service." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Effortless Work Section */}
      <section className="py-28 bg-background overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,_var(--tw-gradient-stops))] from-brand/15 to-transparent pointer-events-none" />
        <div className="container w-11/12 mx-auto px-6 relative z-10">
          <div className="grid xl:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-4"
            >
              <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 text-brand px-5 py-2 text-sm font-bold uppercase tracking-wider mb-6">
                Why choose us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display text-foreground leading-[1.1]">
                We Make Your Work <span className="text-brand">Effortless</span>
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">
                From planning to delivery, our teams simplify complex implementation so you can focus on outcomes, not overhead.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Clear delivery milestones and transparency',
                  'Automation-first engineering practices',
                  'Security and performance built in from day one'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-brand/15 text-brand flex items-center justify-center">
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="text-foreground/90 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 group"
              >
                Explore All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-8"
            >
              <div className="grid md:grid-cols-3 gap-5">
                {effortlessTracks.map((track, i) => (
                  <Link
                    key={track.title}
                    to={track.link}
                    onClick={handleLearnMoreNavigation}
                    className="group rounded-[1.75rem] border border-muted/20 bg-surface p-7 shadow-sm hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all flex h-full flex-col"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-all">
                      {track.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-display leading-tight">{track.title}</h3>
                    <p className="text-muted leading-relaxed mb-6 text-sm md:text-base">{track.description}</p>

                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-brand font-bold">
                        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>

                      <motion.div
                        initial={false}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2.4 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                        className="mt-6 h-1 rounded-full bg-gradient-to-r from-brand/15 via-brand/40 to-transparent"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Ecosystem Section */}
      <section className="w-full py-14 md:py-24 bg-surface overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-0 h-auto md:h-[687px]"
        >
          <div className="w-full md:w-1/2 h-[300px] md:h-full">
            <img
              src={itEcosystemSectionData.imageSrc}
              alt={itEcosystemSectionData.imageAlt}
              width={1200}
              height={687}
              className="object-cover w-full h-full rounded-tr-xl rounded-br-xl"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 px-6 md:px-20 text-left mt-8 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-semibold text-foreground mb-4 md:mb-6 leading-tight md:leading-[60px] font-display">
              {itEcosystemSectionData.title}
              <br />
              <span className="pt-2 text-muted">{itEcosystemSectionData.subtitle}</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/85 mb-6 md:mb-8 leading-relaxed max-w-xl">
              {itEcosystemSectionData.description}
            </p>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 group"
            >
              {itEcosystemSectionData.buttonText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Section with Testimonial Slider */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-brand/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold mb-6 font-display text-[#001a26] leading-tight"
            >
              Trust is at the <span className="text-brand">Core</span> of Everything We Do
            </motion.h2>
            {/* <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg lg:text-xl"
            >
              We are committed to providing our customers with the best possible service and building long-lasting partnerships.
            </motion.p> */}
          </div>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-10 md:p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative group"
              >
                <div className="text-brand/20">
                  <Quote size={20} fill="currentColor" />
                </div>
                
                <div className="relative z-10">
                  <p className="text-md md:text-md text-slate-800 leading-relaxed mb-10 font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand rounded-full blur-md opacity-20" />
                      <img 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].author} 
                        width={100}
                        height={100}
                        className="w-18 h-18 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#001a26]">{testimonials[currentTestimonial].author}</div>
                      <div className="text-brand font-bold uppercase tracking-widest text-sm">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows - More prominent and styled */}
                <div className="absolute inset-y-0 -left-6 md:-left-10 flex items-center">
                  <button 
                    onClick={prevTestimonial}
                    className="w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:scale-110 transition-all z-20 border border-slate-100"
                  >
                    <ChevronLeft size={28} />
                  </button>
                </div>
                <div className="absolute inset-y-0 -right-6 md:-right-10 flex items-center">
                  <button 
                    onClick={nextTestimonial}
                    className="w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:scale-110 transition-all z-20 border border-slate-100"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots - Styled to match theme */}
            <div className="flex justify-center gap-3 mt-16">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${currentTestimonial === i ? 'w-12 bg-brand' : 'w-3 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Commitment Section */}
      <section className="bg-[#0b1022] py-20 lg:py-0" aria-labelledby="customer-service-title">
        <div className="w-11/12 mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 id="customer-service-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display">
                We are committed to our <span className='text-brand'>customer service</span>
              </h2>
              <p className="mt-5 text-slate-300 max-w-lg leading-relaxed">
                Our team delivers responsive support, strategic guidance, and reliable software services that help your business scale with confidence.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F0B73F] px-7 py-4 text-[#0b1022] font-bold hover:brightness-95 transition-all"
              >
                Connect with us
                <span className="w-8 h-8 rounded-full bg-black/20 text-white flex items-center justify-center">
                  <ArrowRight size={16} />
                </span>
              </Link>
              {/* <p className="mt-5 text-slate-300">Call us on 1800-123-4567</p> */}
            </div>

            <div className="relative mx-auto h-[420px] w-full max-w-[360px] overflow-hidden sm:h-[480px] sm:max-w-[520px] lg:h-[520px] lg:max-w-none">
             

              <div aria-hidden="true" className="absolute z-0 right-[8%] top-[22%] w-[72px] h-[250px] rounded-[1000px] bg-[#F0B73F] sm:w-[90px] sm:h-[340px] sm:right-[10%] sm:top-[20%] lg:w-[104px] lg:h-[502px] lg:right-[16%] lg:top-[190px]">
                <img src="/Icons.svg" alt="" width={72} height={72} className="w-14 h-14 absolute left-1/2 top-4 -translate-x-1/2 lg:w-[72px] lg:h-[72px]" />
              </div>
 <img
                src="/backimage5.png"
                alt="Lirisoft support specialist helping a customer"
                width={910}
                height={700}
                className="absolute z-[5] w-[520px] max-w-none left-[-86px] top-[-26px] sm:w-[650px] sm:left-[-132px] sm:top-[-42px] lg:w-[910px] lg:left-[-90px] lg:top-[24px]"
                loading="lazy"
              />
              <div aria-hidden="true" className="absolute right-[28%] bottom-[4%] w-[72px] h-[190px] rounded-[1000px] bg-[#043A53] z-30 sm:w-[88px] sm:h-[270px] sm:right-[26%] sm:bottom-[2%] lg:w-[104px] lg:h-[413px] lg:right-[32%] lg:top-[331px] lg:bottom-auto">
                <img src="/Icons1.svg" alt="" width={72} height={72} className="w-14 h-14 absolute left-1/2 top-4 -translate-x-1/2 lg:w-[72px] lg:h-[72px]" />
              </div>

              <img src="/Icons2.svg" alt="" aria-hidden="true" width={72} height={72} className="absolute z-0 left-[4%] bottom-[7%] w-12 h-12 sm:w-14 sm:h-14 sm:left-[6%] sm:bottom-[6%] lg:w-[72px] lg:h-[72px] lg:left-[18px] lg:bottom-[20px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
