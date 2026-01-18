import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen min-h-[100svh] flex items-center justify-center px-6 sm:px-8 py-20 sm:py-32 scroll-mt-24">
      <div className="max-w-4xl" ref={ref}>
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h2>
        
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm Hursh Shah, a CS student at UC Santa Barbara. Currently a ChatGPT Lab member
            collaborating with the OpenAI team - one of 30 selected.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My work spans ML research, climate tech, and healthcare. I've presented at 
            NeurIPS, built energy analytics software for school districts, and developed 
            assistive technology for early Alzheimer's detection.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Previously founded Q-Sight Labs and SkyGlass, conducted research at Yale, 
            and interned at Minvest Finance building quantitative models.
          </motion.p>
        </div>
        
        <motion.div 
          className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            <div className="text-sm uppercase tracking-wider opacity-60 mb-2">
              CS Experience
            </div>
            <div className="text-2xl">
              6 Years
            </div>
          </div>
          
          <div>
            <div className="text-sm uppercase tracking-wider opacity-60 mb-2">
              Startups Founded
            </div>
            <div className="text-2xl">
              2
            </div>
          </div>
          
          <div>
            <div className="text-sm uppercase tracking-wider opacity-60 mb-2">
              Presented
            </div>
            <div className="text-2xl">
              NeurIPS 2024
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
