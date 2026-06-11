import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { Spark } from './SectionHeader';

/*
 * Hanging charm tag — pendulum on a string in the hero's upper-right.
 * Scroll velocity feeds angular impulses into an underdamped spring so it
 * swings with the page's momentum; it can be grabbed, dragged, and snaps back.
 */
export function Charm({ introDone }: { introDone: boolean }) {
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const scrollVel = useVelocity(scrollY);
  const impulse = useTransform(scrollVel, [-3000, 3000], [26, -26], { clamp: true });
  const swing = useSpring(impulse, { stiffness: 170, damping: 5, mass: 0.9 });

  // Gentle idle sway so it never looks frozen
  const sway = useMotionValue(0);
  useAnimationFrame((t) => {
    if (!reduceMotion) sway.set(Math.sin(t / 950) * 1.8);
  });

  const rotate = useTransform([swing, sway], (values) =>
    reduceMotion ? 0 : Number(values[0]) + Number(values[1]),
  );

  return (
    <motion.div
      className="absolute right-5 xl:right-12 top-0 z-10 hidden lg:block"
      aria-hidden="true"
      initial={{ opacity: 0, y: -36 }}
      animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: -36 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.9 }}
    >
      <motion.div
        drag={!reduceMotion}
        dragSnapToOrigin
        dragConstraints={{ top: -20, bottom: 180, left: -140, right: 60 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 260, bounceDamping: 9 }}
        whileDrag={{ scale: 1.05 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex flex-col items-center"
          style={{ rotate, transformOrigin: 'top center' }}
        >
          {/* String */}
          <div className="h-20 w-px bg-foreground/35" />
          {/* Ring */}
          <div className="-mb-px h-2.5 w-2.5 rounded-full border border-foreground/50" />
          {/* Tag */}
          <div className="flex w-11 flex-col items-center gap-2 border-2 border-[#181210] bg-[#f4f1ea] px-1.5 pb-3 pt-2.5 shadow-[3px_4px_0_rgba(0,0,0,0.3)]">
            <Spark className="h-3 w-3 text-crimson" />
            <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#181210] [writing-mode:vertical-rl]">
              HS — 2026
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
