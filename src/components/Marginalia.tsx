import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

/*
 * Red-ink proofreader marks that draw themselves in when scrolled into view,
 * like an edited magazine draft. All paths are slightly irregular on purpose.
 */

/* Wavy hand-drawn underline beneath a word or phrase */
export function ScribbleUnderline({
  children,
  delay = 0.7,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const reduceMotion = useReducedMotion();

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 h-2 w-full text-crimson"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M2 5.5 C 18 2.5, 34 7, 52 4 S 86 6.5, 98 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: reduceMotion ? 1 : 0 }}
          transition={{ duration: 0.55, delay, ease: 'easeInOut' }}
        />
      </svg>
    </span>
  );
}

/* Rough hand-sketched ellipse around a phrase */
export function CircleMark({
  children,
  delay = 0.8,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const reduceMotion = useReducedMotion();

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 text-crimson"
        viewBox="0 0 114 44"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M108 20 C 104 6, 70 2, 50 4 C 26 6, 4 12, 6 23 C 8 35, 40 42, 66 39 C 92 36, 110 28, 106 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: reduceMotion ? 1 : 0 }}
          transition={{ duration: 0.7, delay, ease: 'easeInOut' }}
        />
      </svg>
    </span>
  );
}

/* Circled "!" editor's note for the page margin */
export function MarginNote({
  className,
  delay = 0.5,
}: {
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });
  const reduceMotion = useReducedMotion();

  const stroke = (d: string, extraDelay: number, width = 2.4) => (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      initial={{ pathLength: reduceMotion ? 1 : 0 }}
      animate={isInView ? { pathLength: 1 } : { pathLength: reduceMotion ? 1 : 0 }}
      transition={{ duration: 0.4, delay: delay + extraDelay, ease: 'easeInOut' }}
    />
  );

  return (
    <span ref={ref} className={className} aria-hidden="true">
      <svg viewBox="0 0 40 40" className="h-9 w-9 text-crimson">
        {/* Rough open circle */}
        {stroke('M33 11 C 28 3.5, 11 3, 6.5 12 C 2 21, 6 33, 17 36.5 C 28 40, 37.5 30, 35.5 18', 0, 2)}
        {/* Exclamation bar */}
        {stroke('M21 10 C 20.4 14, 20.4 18, 19.8 23', 0.35)}
        {/* Exclamation dot */}
        {stroke('M19.6 29 L 19.5 29.6', 0.55, 3)}
      </svg>
    </span>
  );
}
