import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { blogs } from '../data/blogs';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Not Found</h1>
          <p className="text-muted mb-8">The blog article you are looking for does not exist.</p>
          <Link
            to="/blog"
            state={{ restoreScroll: true }}
            className="bg-brand text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: [blog.image],
    datePublished: blog.date,
    author: {
      '@type': 'Organization',
      name: 'Lirisoft Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lirisoft',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lirisoft.com/logo.png'
      }
    },
    mainEntityOfPage: `https://lirisoft.com/blog/${blog.id}`
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lirisoft.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://lirisoft.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: `https://lirisoft.com/blog/${blog.id}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        canonical={`https://lirisoft.com/blog/${blog.id}`}
        ogType="article"
        ogImage={blog.image}
        structuredData={[articleSchema, breadcrumbSchema]}
      />

      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/45 to-slate-950/75" />

        <div className="w-11/12 mx-auto px-6 relative z-10 h-full flex items-end pb-10">
          <div className="max-w-5xl text-white">
            <Link
              to="/blog"
              state={{ restoreScroll: true }}
              className="inline-flex items-center gap-2 text-white/90 font-semibold mb-6 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4"
            >
              {blog.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/85">
              <div className="inline-flex items-center gap-2"><User size={14} /> {blog.author}</div>
              <div className="inline-flex items-center gap-2"><Calendar size={14} /> {blog.date}</div>
              <div className="inline-flex items-center gap-2"><Clock size={14} /> {blog.readTime}</div>
              <span className="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="w-11/12 mx-auto px-6">
          <article className="max-w-6xl mx-auto bg-surface border border-muted/20 rounded-[2rem] p-6 md:p-10 shadow-lg">
            <div className="grid lg:grid-cols-4 gap-10 items-start">
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-28 space-y-6">
                  {blog.leftImage && (
                    <div className="rounded-2xl overflow-hidden border border-muted/20 shadow-sm">
                      <img
                        src={blog.leftImage}
                        alt={`${blog.title} related visual`}
                        className="w-full h-56 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="rounded-2xl border border-muted/20 bg-background p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand mb-2">Author</div>
                    <div className="font-semibold text-foreground">{blog.author}</div>
                    <div className="text-sm text-muted mt-1">Technology Experts & Software Consultants</div>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-3">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">{blog.content.intro}</p>
                <div className="space-y-6">
                  {blog.content.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-muted/20 flex flex-wrap items-center gap-4 justify-between">
                  <div className="inline-flex items-center gap-3 text-sm text-muted">
                    <div className="w-9 h-9 rounded-full bg-brand/15 text-brand font-bold flex items-center justify-center">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{blog.author}</div>
                      <div>Technology Experts & Software Consultants</div>
                    </div>
                  </div>

                  <Link
                    to="/blog"
                    state={{ restoreScroll: true }}
                    className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 font-bold hover:bg-brand-dark transition-all"
                  >
                    <ArrowLeft size={16} /> Back to All Blogs
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
