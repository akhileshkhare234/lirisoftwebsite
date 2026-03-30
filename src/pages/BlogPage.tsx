import React, { useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Search, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigationType } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPage: React.FC = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const posts = blogs;

  useEffect(() => {
    const routeState = location.state as { restoreScroll?: boolean } | null;
    const hasPendingRestore = sessionStorage.getItem('blog-restore-pending') === '1';
    const shouldRestore = Boolean(routeState?.restoreScroll) || (navigationType === 'POP' && hasPendingRestore);
    if (!shouldRestore) return;

    const savedY = sessionStorage.getItem('blog-last-scroll-y');
    if (!savedY) return;

    const y = Number(savedY);
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number.isFinite(y) ? y : 0, behavior: 'auto' });
    });

    sessionStorage.removeItem('blog-last-scroll-y');
    sessionStorage.removeItem('blog-restore-pending');
  }, [location, navigationType]);

  const handleReadMoreNavigation = () => {
    sessionStorage.setItem('blog-last-scroll-y', String(window.scrollY));
    sessionStorage.setItem('blog-restore-pending', '1');
  };

  const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Blog & Insights - Technology, Engineering & Strategy | Lirisoft"
        description="Stay updated with the latest trends in custom software development, IoT & automation, and enterprise digital transformation from Lirisoft experts."
        canonical="https://lirisoft.com/blog"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background text-foreground overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand/10 to-transparent opacity-50" />
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-bold mb-8"
          >
            Expert Insights
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-bold mb-8 font-display leading-[1.1]"
          >
            Ideas that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand">Transform</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Perspectives on technology, engineering, and business strategy from the team at Lirisoft.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-sm text-muted mt-6 font-mono"
          >
            {posts.length} published articles
          </motion.p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-surface rounded-[3rem] overflow-hidden border border-muted/20 hover:border-brand transition-all shadow-xl">
              <div className="aspect-[16/10] lg:aspect-square overflow-hidden">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-12 lg:p-20">
                <span className="bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Featured Post</span>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-display text-foreground leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted mb-10">
                  <div className="flex items-center gap-2 font-bold text-foreground">
                    <div className="w-8 h-8 bg-brand/10 rounded-full" />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-2"><Calendar size={16} /> {posts[0].date}</div>
                  <div className="flex items-center gap-2 font-mono">{posts[0].readTime}</div>
                </div>
                <Link
                  to={`/blog/${posts[0].id}`}
                  onClick={handleReadMoreNavigation}
                  className="inline-flex items-center gap-2 text-brand font-bold text-lg hover:gap-4 transition-all group/link"
                >
                  Read Full Article <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Feed Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Feed */}
            <div className="lg:w-2/3 space-y-16">
              {posts.slice(1).map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group grid md:grid-cols-5 gap-10 items-start"
                >
                  <div className="md:col-span-2 aspect-[16/10] bg-background rounded-[2rem] overflow-hidden border border-muted/20 group-hover:border-brand transition-all shadow-sm group-hover:shadow-xl">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:col-span-3 py-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand font-mono">{post.category}</span>
                      <span className="w-1 h-1 bg-muted/30 rounded-full" />
                      <span className="text-xs text-muted font-mono">{post.date}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-display text-foreground group-hover:text-brand transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted mb-6 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      onClick={handleReadMoreNavigation}
                      className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand transition-colors"
                    >
                      Read More <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="p-8 bg-background border border-muted/20 rounded-[2rem] shadow-sm">
                <h4 className="text-lg font-bold mb-6 font-display">Search Articles</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search insights..." 
                    className="w-full bg-surface border border-muted/20 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-brand transition-all"
                  />
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                </div>
              </div>

              {/* Categories */}
              <div className="p-8 bg-background border border-muted/20 rounded-[2rem] shadow-sm">
                <h4 className="text-lg font-bold mb-6 font-display">Categories</h4>
                <div className="space-y-3">
                  {categories.map(([cat, count]) => (
                    <div key={cat} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-muted group-hover:text-brand transition-colors">{cat}</span>
                      <span className="text-xs font-mono text-muted bg-surface px-2 py-1 rounded-md">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-8 bg-brand text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-2xl rounded-full" />
                <h4 className="text-xl font-bold mb-4 font-display relative z-10">Stay Informed</h4>
                <p className="text-sm text-white/80 mb-6 relative z-10 leading-relaxed">Get the latest technology insights delivered straight to your inbox.</p>
                <div className="space-y-3 relative z-10">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-all"
                  />
                  <button className="w-full bg-white text-brand font-bold py-3 rounded-full hover:bg-slate-50 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-brand rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-display">Have a Story to Tell?</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                We're always looking for guest contributors and expert perspectives. Reach out to our editorial team.
              </p>
              <Link to="/contact" className="bg-white text-brand px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl inline-flex items-center gap-2">
                Contact Editorial <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BlogPage;
