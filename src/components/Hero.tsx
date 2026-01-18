import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="top" className="min-h-screen min-h-[100svh] flex items-center justify-center px-6 sm:px-8">
      <div className="max-w-7xl w-full">
        <div className="relative overflow-hidden">
          <motion.h1 
            className="text-[clamp(3.5rem,12vw,12rem)] leading-[0.9] tracking-tight mb-6 sm:mb-8"
            initial={{ clipPath: 'inset(0 50% 0 50%)' }}
            animate={{ clipPath: 'inset(0 0% 0 0%)' }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <TypeAnimation
              sequence={[
                'Student',
                2000,
                'Founder',
                2000,
                'Researcher',
                2000,
                'Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          
          <motion.p 
            className="mt-6 max-w-sm text-sm leading-relaxed opacity-80 md:absolute md:top-8 md:right-0 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            building at the intersection of ML, climate tech, and healthcare
          </motion.p>
        </div>
      </div>
    </section>
  );
}
