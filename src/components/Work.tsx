import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader, Spark } from './SectionHeader';
import { MarginNote } from './Marginalia';

type StickerSpec = { label: string; variant: 'burst' | 'tape' };

const experiences = [
  {
    id: 1,
    company: 'Edviro',
    role: 'Founder',
    period: 'Mar 2025 - Present',
    description: 'Intelligence and simulation layer for energy-intensive infrastructure. Modeling how facilities consume energy, simulating upgrades, and verifying savings. Live across 7 schools, $400K+ saved, starting with K-12.',
  },
  {
    id: 2,
    company: 'ChatGPT Lab',
    role: 'Lab Member',
    period: 'Oct 2025 - Present',
    description: 'Collaborating with the OpenAI team. 1 of 30 selected. Talked as a student developer about Codex on the official @openai instagram account.',
  },
  {
    id: 3,
    company: 'Assistive Technology Club',
    role: 'Lead ML Engineer',
    period: 'Dec 2025 - Present',
    description: 'VR-based early Alzheimer\'s detection using Vision Pro eye-tracking. Clinical testing at Cottage Health (Q1 2026). Vision Pro hardware supplied by Apple. Sponsored by Google.',
  },
  {
    id: 4,
    company: 'UC Irvine - Whiteson Microbiology Lab',
    role: 'ML Research Assistant',
    period: 'Jan 2026 - Present',
    description: 'Building ML models to predict optimal phage therapy features and cocktail combinations. Developing a research database with phage cocktail data for the broader scientific community.',
  },
  {
    id: 5,
    company: 'Q-Sight Labs',
    role: 'Co-Founder',
    period: 'Dec 2023 - Jul 2025',
    description: 'Quantum ML research lab. Co-authored QViSTA, presented at NeurIPS 2024 GenAI4Health Workshop.',
  },
  {
    id: 6,
    company: 'SkyGlass',
    role: 'Co-Founder',
    period: 'Sep 2023 - Aug 2024',
    description: 'AR smartglasses for airline cockpit pre-flight inspections. 97.23% AP with YOLOv9, tested on 20 student pilots, finalist at Diamond Challenge 2024.',
  },
  {
    id: 7,
    company: 'Yale University',
    role: 'Research Intern',
    period: 'Jul 2023 - May 2024',
    description: 'Worked under a Yale PhD Student on building predictive models for the SPAC market.',
  },
  {
    id: 8,
    company: 'Minvest Finance',
    role: 'SWE Intern',
    period: 'Jun 2024 - Dec 2024',
    description: 'Built quantitative factor screens, backtests, and data pipelines which I deployed to the Minvest App to inform Gen-Z investors.',
  },
];

const projects = [
  {
    id: 1,
    title: 'QViSTA',
    link: 'https://github.com/3x-dev/QViSTA',
    description: 'Quantum Vision Transformer for early Alzheimer\'s detection. NeurIPS 2024, 2nd place Synopsys.',
    sticker: { label: 'NEURIPS 2024', variant: 'burst' } as StickerSpec,
  },
  {
    id: 2,
    title: 'Ecopact',
    link: 'https://github.com/hursh-shah/ecopact',
    description: 'AI sustainability scoring for consumer products using material lifecycle and emissions data. 1st place HackBytes II.',
    sticker: { label: '1ST PLACE', variant: 'burst' } as StickerSpec,
  },
  {
    id: 3,
    title: 'Medimations',
    link: 'https://github.com/hursh-shah/medimations',
    description: 'Agentic ML pipeline for medically accurate image-to-video generation.',
    sticker: { label: 'AGENTIC', variant: 'tape' } as StickerSpec,
  },
  {
    id: 4,
    title: 'Called It',
    link: 'https://github.com/hursh-shah/called-it',
    description: 'A lightweight prediction market for small private groups.',
    sticker: { label: 'WIP', variant: 'tape' } as StickerSpec,
  },
  {
    id: 5,
    title: 'CryptoSight',
    link: 'https://github.com/hursh-shah/cryptosight',
    description: 'A platform to learn and deploy pre-built cryptocurrency trading algorithms.',
    sticker: { label: 'ALGO', variant: 'tape' } as StickerSpec,
  },
  {
    id: 6,
    title: 'Minvest Models',
    link: 'https://github.com/hursh-shah/minvest-finance-models',
    description: 'Open-sourced version of the quantitative analytics models I built at Minvest',
    sticker: { label: 'OPEN SOURCE', variant: 'tape' } as StickerSpec,
  },
];

/* Fixed pseudo-random resting tilts so the sheet feels hand-applied */
const STICKER_TILTS = [-7, 6, -5, 8, -6, 4];

/* Jagged 14-spike burst polygon for award stickers */
const BURST_POINTS = Array.from({ length: 28 }, (_, i) => {
  const r = i % 2 === 0 ? 50 : 41;
  const a = (Math.PI * i) / 14 - Math.PI / 2;
  return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
}).join(' ');

/* "Mar 2025 - Present" -> "MAR 2025 — PRESENT" stamp format */
function stampPeriod(period: string) {
  return period.toUpperCase().replace(' - ', ' — ');
}

export function Work() {
  return (
    <>
      <Experience />
      <Projects />
    </>
  );
}

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="min-h-screen px-6 sm:px-8 py-20 sm:py-32 scroll-mt-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader index="02" title="Experience" isInView={isInView} />

        <div className="relative">
          {/* Red ink timeline rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-crimson/60" />

          <div className="space-y-12 sm:space-y-14">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 sm:pl-10"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Flash-sheet spark marker */}
      <Spark className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-1/2 text-crimson" />

      {/* Editor's note in the margin, flagging the current venture */}
      {experience.company === 'Edviro' && (
        <MarginNote className="absolute -left-16 top-0 hidden lg:inline-block" delay={0.5} />
      )}

      <div className="space-y-1.5">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
          <h3 className="font-display uppercase text-xl sm:text-2xl tracking-tight leading-tight">
            {experience.company}
          </h3>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.15em] text-crimson whitespace-nowrap">
            {stampPeriod(experience.period)}
          </span>
        </div>
        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {experience.role}
        </div>
        <p className="text-base opacity-80 leading-relaxed mt-2">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="min-h-screen px-6 sm:px-8 py-20 sm:py-32 scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="03" title="Projects" isInView={isInView} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Sticker({ sticker, tilt }: { sticker: StickerSpec; tilt: number }) {
  const reduceMotion = useReducedMotion();

  const entrance = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, rotate: tilt },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { scale: 2, rotate: tilt - 14, opacity: 0 },
        animate: { scale: 1, rotate: tilt, opacity: 1 },
        exit: {
          scale: 0.85,
          rotate: tilt + 8,
          opacity: 0,
          transition: { duration: 0.15, ease: 'easeIn' as const },
        },
        transition: { type: 'spring' as const, stiffness: 600, damping: 22 },
      };

  if (sticker.variant === 'burst') {
    return (
      <motion.div
        className="pointer-events-none absolute -top-6 -right-5 z-10 h-[96px] w-[96px]"
        aria-hidden="true"
        {...entrance}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full drop-shadow-[3px_4px_0_rgba(0,0,0,0.35)]"
        >
          <polygon points={BURST_POINTS} fill="#f4f1ea" stroke="#181210" strokeWidth="2.5" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-mono text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-[#181210]">
          {sticker.label}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute -top-3.5 -right-3 z-10 flex items-center gap-1.5 border-2 border-[#181210] bg-[#f4f1ea] px-3 py-1.5 shadow-[4px_4px_0_rgba(0,0,0,0.35)]"
      aria-hidden="true"
      {...entrance}
    >
      <Spark className="h-2.5 w-2.5 flex-shrink-0 text-crimson" />
      <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#181210]">
        {sticker.label}
      </span>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block p-6 sm:p-8 border border-border hover:border-crimson hover:bg-crimson transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Cover issue numeral, clipped to the card */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute -bottom-5 right-2 select-none font-display leading-none text-[6rem] sm:text-[7rem] text-crimson/10 group-hover:text-primary-foreground/15 transition-colors duration-300">
          {String(project.id).padStart(2, '0')}
        </span>
      </span>

      <AnimatePresence>
        {hovered && (
          <Sticker sticker={project.sticker} tilt={STICKER_TILTS[index % STICKER_TILTS.length]} />
        )}
      </AnimatePresence>

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson group-hover:text-primary-foreground/80 transition-colors duration-300">
            No. {String(project.id).padStart(2, '0')}
          </div>
          <h3 className="font-display uppercase text-2xl sm:text-3xl tracking-tight leading-none group-hover:text-primary-foreground transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm opacity-80 leading-relaxed group-hover:text-primary-foreground group-hover:opacity-90 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-crimson group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0 mt-1" />
      </div>
    </motion.a>
  );
}
