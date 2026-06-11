import { Mail, Linkedin, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Spark } from './SectionHeader';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      className="min-h-screen min-h-[100svh] flex items-center justify-center px-6 sm:px-8 py-20 sm:py-32 scroll-mt-24"
    >
      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-crimson">04</span>
        </motion.div>

        <motion.h2
          className="font-display uppercase text-[clamp(2.75rem,9vw,8.5rem)] leading-[0.85] mb-10 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Let's work
          <br />
          <span className="text-crimson">together</span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl opacity-80 mb-12 sm:mb-16 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interested in research, early-stage startups, and technically-ambitious projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:hursh@edviroenergy.com"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-crimson text-primary-foreground hover:bg-crimson-deep transition-colors font-mono text-xs sm:text-sm uppercase tracking-[0.2em] w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Ornament divider */}
          <div className="flex items-center gap-4 text-crimson mb-10 sm:mb-12" aria-hidden="true">
            <span className="h-px flex-1 bg-crimson/50" />
            <Spark className="w-3 h-3" />
            <span className="h-px flex-1 bg-crimson/50" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              © 2026 Hursh Shah
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/hursh-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-crimson transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/hursh-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-crimson transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
