import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Spark } from './SectionHeader';

const EXIT_AT_MS = 1850;

const PLATE_FULL = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
const PLATE_MID = 'polygon(0% 0%, 100% 0%, 100% 38%, 0% 78%)';
const PLATE_GONE = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';

export function Intro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setShow(false);
    // Fire as the wipe starts so the site entrances play under the reveal
    onDone();
  }, [onDone]);

  useEffect(() => {
    if (reduced) {
      finish();
      return;
    }
    const timer = setTimeout(finish, EXIT_AT_MS);
    const skip = () => finish();
    window.addEventListener('pointerdown', skip);
    window.addEventListener('keydown', skip);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [reduced, finish]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[80] bg-crimson flex items-center justify-center overflow-hidden"
          initial={{ clipPath: PLATE_FULL }}
          exit={{ clipPath: [PLATE_FULL, PLATE_MID, PLATE_GONE] }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], times: [0, 0.45, 1] }}
          aria-hidden="true"
        >
          {/* Printed grain on the plate */}
          <div className="absolute inset-0 texture-grain opacity-[0.08]" />

          {/* Faint giant numeral behind the name */}
          <motion.span
            className="pointer-events-none select-none absolute -bottom-[0.12em] -right-[0.02em] font-display leading-none text-background/10 text-[clamp(14rem,42vw,38rem)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            1
          </motion.span>

          <div className="relative px-6 text-center">
            {/* Letterpress strike */}
            <motion.div
              className="font-display uppercase text-background leading-[0.85] tracking-tight text-[clamp(3.25rem,13vw,11rem)]"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.15 }}
            >
              Hursh Shah
            </motion.div>

            <motion.div
              className="mt-6 sm:mt-8 flex items-center justify-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-background/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{ duration: 0.45, delay: 0.62, times: [0, 0.4, 0.7, 1] }}
            >
              <Spark className="w-3 h-3" />
              <span>Portfolio — 2026</span>
              <Spark className="w-3 h-3" />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
