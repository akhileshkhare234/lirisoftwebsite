import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Privacy Policy | Lirisoft"
        description="Lirisoft's privacy policy outlines how we collect, use, and protect your personal information."
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold font-display text-foreground mb-8 tracking-tight">
              Privacy <span className="text-brand">Policy</span>.
            </h1>
            <p className="text-muted mb-12">Last Updated: March 23, 2026</p>
            
            <div className="prose dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted leading-relaxed">
                  Lirisoft ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website lirisoft.com and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted leading-relaxed mb-4">
                  We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or engage with our services. This may include:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company details and job title</li>
                  <li>Information about your project or service requirements</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Responding to your inquiries and providing support</li>
                  <li>Sending you technical notices, updates, and security alerts</li>
                  <li>Communicating with you about products, services, and events</li>
                  <li>Improving our website and user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted leading-relaxed">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                <p className="text-muted leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact us at privacy@lirisoft.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
