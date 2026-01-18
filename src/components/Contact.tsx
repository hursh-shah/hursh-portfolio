import { Mail, Linkedin, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="min-h-screen min-h-[100svh] flex items-center justify-center px-6 sm:px-8 py-20 sm:py-32 scroll-mt-24">
      <div className="max-w-4xl w-full" ref={ref}>
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-10 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Let's work
          <br />
          together
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl opacity-80 mb-12 sm:mb-16 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Open to research collaborations, internships, and interesting projects.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:hurshshah483@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wide w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </a>
        </motion.div>
        
        <motion.div 
          className="pt-12 sm:pt-20 border-t border-border/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="text-sm opacity-60">
              © 2026 Hursh Shah
            </div>
            
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/hursh-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/hursh-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
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
