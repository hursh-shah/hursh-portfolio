import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from './SectionHeader';

const stats = [
  { label: 'CS Experience', value: '6 Years' },
  { label: 'Startups Founded', value: '2' },
  { label: 'Presented', value: 'NeurIPS 2024' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="min-h-screen min-h-[100svh] flex items-center justify-center px-6 sm:px-8 py-20 sm:py-32 scroll-mt-24"
    >
      <div className="max-w-4xl w-full" ref={ref}>
        <SectionHeader index="01" title="About" isInView={isInView} />

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm Hursh Shah, a CS student at UC Santa Barbara. Currently the founder of Edviro, and a ChatGPT Lab member
            collaborating with the OpenAI team - one of 30 selected.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My work spans ML research, climate tech, and healthcare. I've presented at 
            NeurIPS, built energy analytics software for school districts, and developed 
            assistive technology for early Alzheimer's detection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Previously founded Q-Sight Labs and SkyGlass, conducted ML/quant research at Yale, 
            and built quantitative models at Minvest Finance.
          </motion.p>
        </div>

        {/* Spec plate — watch-dial style stats */}
        <motion.div
          className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 border border-crimson/50 divide-y sm:divide-y-0 sm:divide-x divide-crimson/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 sm:p-6">
              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-crimson mb-2 sm:mb-3">
                {stat.label}
              </div>
              <div className="font-display uppercase text-2xl sm:text-3xl leading-none">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
