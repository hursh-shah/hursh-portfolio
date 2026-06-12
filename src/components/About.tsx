import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from './SectionHeader';
import { CircleMark, ScribbleUnderline } from './Marginalia';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="flex items-center justify-center px-6 sm:px-8 py-24 sm:py-32 scroll-mt-24"
    >
      <div className="max-w-4xl w-full" ref={ref}>
        <SectionHeader index="01" title="About" isInView={isInView} />

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm Hursh Shah, a CS student at UC Santa Barbara. Currently the founder of{' '}
            <ScribbleUnderline delay={0.7}>Edviro</ScribbleUnderline>, and a{' '}
            <ScribbleUnderline delay={0.95}>ChatGPT Lab</ScribbleUnderline> member
            collaborating with the OpenAI team - one of 30 selected.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I first got into CS through financial markets research at Yale, before expanding 
            into applied AI across healthcare, climate, and aviation. My work includes a{' '}
            <CircleMark delay={0.85}>NeurIPS 2024</CircleMark> workshop-accepted quantum ML 
            model for early Alzheimer's detection and a patent-pending VR Alzheimer's 
            screening system.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            In high school, I founded an aviation AR smart-glasses startup that got into 
            PearX (didn't attend). Along the way: USACO Gold, top 90 in national 
            debate, and the Diamond Challenge entrepreneurship finals.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
