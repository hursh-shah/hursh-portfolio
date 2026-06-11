import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center px-6 sm:px-8 overflow-hidden"
    >
      {/* Crop marks */}
      <div className="pointer-events-none absolute inset-5 sm:inset-8" aria-hidden="true">
        <span className="absolute left-0 top-16 sm:top-20 h-5 w-5 border-l border-t border-crimson/70" />
        <span className="absolute right-0 top-16 sm:top-20 h-5 w-5 border-r border-t border-crimson/70" />
        <span className="absolute left-0 bottom-0 h-5 w-5 border-l border-b border-crimson/70" />
        <span className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-crimson/70" />
      </div>

      {/* Giant chapter numeral, like a cover issue number */}
      <motion.span
        className="pointer-events-none select-none absolute -bottom-[0.12em] -right-[0.02em] font-display leading-none text-crimson/10 dark:text-crimson/15 text-[clamp(14rem,42vw,38rem)]"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
      >
        1
      </motion.span>

      {/* Vertical katakana detail */}
      <motion.span
        className="pointer-events-none select-none hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[11px] tracking-[0.5em] text-muted-foreground/70 [writing-mode:vertical-rl]"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        ハーシュ・シャー
      </motion.span>

      <div className="relative max-w-7xl w-full">
        <div className="relative">
          <motion.h1
            className="font-display uppercase text-crimson text-[clamp(3.5rem,12vw,11.5rem)] leading-[0.85] tracking-tight mb-6 sm:mb-8 lg:max-w-[70%] pb-[0.1em]"
            initial={{ clipPath: 'inset(0 50% 0 50%)' }}
            animate={{ clipPath: 'inset(0 0% 0 0%)' }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <TypeAnimation
              sequence={[
                'Founder',
                2000,
                'Student',
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
            className="mt-6 max-w-sm font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground lg:absolute lg:top-8 lg:right-0 lg:mt-0 lg:pr-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-crimson">//</span> building at the intersection of ML,
            climate tech, and healthcare
          </motion.p>
        </div>

      </div>
    </section>
  );
}
