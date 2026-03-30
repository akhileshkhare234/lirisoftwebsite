import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, MessageSquare, Instagram, Linkedin, ChevronDown, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [captchaValue, setCaptchaValue] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleVerify = () => {
    if (captchaValue === '9') {
      setIsCaptchaVerified(true);
    } else {
      alert('Incorrect captcha answer. Please try again.');
    }
  };

  const handleReset = () => {
    setCaptchaValue('');
    setIsCaptchaVerified(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      alert('Please verify the captcha first.');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', service: '', message: '' });
      setIsCaptchaVerified(false);
      setCaptchaValue('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Lirisoft for custom software development, IoT & automation, and cloud consulting services. Help is here when you need it."
        canonical="https://lirisoft.com/contact"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface text-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-bold mb-8 uppercase tracking-widest"
            >
              <MessageSquare size={16} /> Get In Touch
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 font-display leading-tight"
            >
              Help is here when <span className="text-brand">you need it</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Whether you have a specific project in mind or just want to explore how we can help your business grow, our team of experts is ready to talk.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-8 md:p-16 rounded-[3rem] shadow-2xl border border-muted/20 relative mb-24"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-foreground font-display">
                  Write <span className="text-brand">Us</span>
                </h2>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h3>
                    <p className="text-muted text-lg mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-brand text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground ml-1">
                        Service I am looking for <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          required
                          value={formState.service}
                          onChange={e => setFormState({...formState, service: e.target.value})}
                          className="w-full appearance-none bg-background border border-muted/20 rounded-2xl px-6 py-4 text-foreground focus:bg-background focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium"
                        >
                          <option value="">Select a service</option>
                          <option value="software">Custom Software Development</option>
                          <option value="iot">IoT & Automation Solutions</option>
                          <option value="cloud">Cloud & Infrastructure</option>
                          <option value="cyber">Cybersecurity Services</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={20} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground ml-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-background border border-muted/20 rounded-2xl px-6 py-4 text-foreground focus:bg-background focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground ml-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-background border border-muted/20 rounded-2xl px-6 py-4 text-foreground focus:bg-background focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground ml-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-background border border-muted/20 rounded-2xl px-6 py-4 text-foreground focus:bg-background focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium resize-none"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                      <div className="flex flex-wrap items-center gap-4 bg-background p-4 rounded-2xl border border-muted/20">
                        <span className="text-foreground font-bold text-sm">Captcha: What is 3 + 6?</span>
                        <input 
                          type="text"
                          value={captchaValue}
                          onChange={e => setCaptchaValue(e.target.value)}
                          disabled={isCaptchaVerified}
                          className="w-16 border border-muted/20 rounded-xl px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-brand disabled:bg-surface text-center font-bold"
                        />
                        <div className="flex gap-2">
                          <button 
                            type="button"
                            onClick={handleVerify}
                            disabled={isCaptchaVerified}
                            className="bg-brand text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-brand-dark transition-all disabled:bg-green-500"
                          >
                            {isCaptchaVerified ? 'Verified' : 'Verify'}
                          </button>
                          <button 
                            type="button"
                            onClick={handleReset}
                            className="bg-surface text-muted px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full md:w-auto bg-brand text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand/20 disabled:opacity-50 group"
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message'} 
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Info Grid */}
            <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-muted/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-brand mb-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">US Office</h3>
                </div>
                <p className="text-muted leading-relaxed">California, USA</p>
                <a href="mailto:support@lirisoft.com" className="flex items-center gap-2 text-muted hover:text-brand transition-colors">
                  <Mail size={16} /> support@lirisoft.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-brand mb-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">India Office</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  1660, 18th Cross Rd, MC Layout,<br />
                  Vijayanagar, Bengaluru
                </p>
                <a href="mailto:support.india@lirisoft.com" className="flex items-center gap-2 text-muted hover:text-brand transition-colors">
                  <Mail size={16} /> support.india@lirisoft.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-brand mb-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                    <Linkedin size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Connect with Us</h3>
                </div>
                <p className="text-muted mb-6">Follow us for the latest updates and insights.</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-surface border border-muted/20 flex items-center justify-center text-muted hover:bg-brand hover:text-white transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-surface border border-muted/20 flex items-center justify-center text-muted hover:bg-brand hover:text-white transition-all">
                    <Linkedin size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
