import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms of Service | Lirisoft"
        description="Lirisoft's terms of service govern your use of our website and services. Please read them carefully."
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold font-display text-foreground mb-8 tracking-tight">
              Terms of <span className="text-brand">Service</span>.
            </h1>
            <p className="text-muted mb-12">Last Updated: March 23, 2026</p>
            
            <div className="prose dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted leading-relaxed">
                  By accessing or using the Lirisoft website (lirisoft.com) and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Our Services</h2>
                <p className="text-muted leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
                </p>
                <p className="text-muted leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p className="text-muted leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Lirisoft or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
                <p className="text-muted leading-relaxed">
                  To the maximum extent permitted by law, Lirisoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
                <p className="text-muted leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at legal@lirisoft.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
