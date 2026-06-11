import { motion } from 'framer-motion';

export function SectionHeader({
  index,
  title,
  isInView,
}: {
  index: string;
  title: string;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="mb-12 sm:mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-end gap-4 sm:gap-6">
        <span
          className="font-display text-crimson leading-[0.8] text-[clamp(4rem,10vw,7.5rem)] select-none"
          aria-hidden="true"
        >
          {index}
        </span>
        <div className="pb-1 sm:pb-2 min-w-0">
          <h2 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(2.25rem,6vw,4.5rem)]">
            {title}
          </h2>
        </div>
      </div>
      <motion.div
        className="mt-5 sm:mt-7 h-px bg-crimson origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
      />
    </motion.div>
  );
}

/* Four-pointed spark ornament, a nod to the red-ink flash sheets */
export function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M6 0 L7.1 4.9 L12 6 L7.1 7.1 L6 12 L4.9 7.1 L0 6 L4.9 4.9 Z" fill="currentColor" />
    </svg>
  );
}
