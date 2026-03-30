import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage: React.FC = () => {
  const team = [
    {
      name: 'David Chen',
      role: 'Chief Executive Officer',
      bio: 'Former tech lead at major Silicon Valley firms with 15+ years of experience in enterprise architecture.',
      image: '/Company1.jpeg'
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Technology Officer',
      bio: 'Expert in cloud-native systems and distributed computing. Leading our engineering excellence.',
      image: '/Company2.jpeg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of IoT & Automation',
      bio: 'Specialist in Messaging, VoIP, and complex automation systems for global enterprise clients.',
      image: '/Company3.jpeg'
    },
    {
      name: 'Elena Petrova',
      role: 'VP of Engineering',
      bio: 'Driving our software development lifecycle and ensuring the highest standards of code quality.',
      image: '/Company4.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Our Team | Lirisoft"
        description="Meet the experts behind Lirisoft's innovative technology solutions. Our leadership team brings decades of experience in enterprise software and IoT & automation."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--brand)/0.05,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-8 tracking-tight">
                The minds behind the <span className="text-brand">innovation</span>.
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                We are a diverse team of engineers, designers, and strategists united by a single goal: to build technology that solves complex business challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-1 font-display">{member.name}</h4>
                <p className="text-brand font-medium mb-4">{member.role}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-surface rounded-[3rem] p-12 md:p-24 text-center border border-muted/20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-display tracking-tight">
              Want to join our <span className="text-brand">mission</span>?
            </h2>
            <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and solving complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-brand text-white px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group">
                View Open Positions <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
