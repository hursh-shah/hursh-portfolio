import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'ChatGPT Lab',
    role: 'Lab Member',
    period: 'Oct 2025 - Present',
    description: 'Collaborating with the OpenAI team. 1 of 30 selected.',
  },
  {
    id: 2,
    company: 'Edviro',
    role: 'Founder',
    period: 'Feb 2025 - Present',
    description: 'Energy analytics SaaS for school districts. Multiple pilots, $360K+ savings identified.',
  },
  {
    id: 3,
    company: 'Assistive Technology',
    role: 'Lead ML Engineer',
    period: 'Nov 2025 - Present',
    description: 'VR-based early Alzheimer\'s detection using Vision Pro eye-tracking. Clinical testing at Cottage Health (Q1 2026). Vision Pro hardware supplied by Apple. Sponsored by Google.',
  },
  {
    id: 4,
    company: 'Q-Sight Labs',
    role: 'Co-Founder',
    period: 'Dec 2023 - Jul 2025',
    description: 'Quantum ML research lab. Co-authored QViSTA, presented at NeurIPS 2024 GenAI4Health Workshop.',
  },
  {
    id: 5,
    company: 'SkyGlass',
    role: 'Co-Founder',
    period: 'Sep 2023 - Aug 2024',
    description: 'AR smartglasses for airline cockpit pre-flight inspections. 97.23% AP with YOLOv9, tested on 20 student pilots, finalist at Diamond Challenge 2024.',
  },
  {
    id: 6,
    company: 'Yale University',
    role: 'Research Intern',
    period: 'Jul 2023 - May 2024',
    description: 'Worked under a Yale PhD Student on building predictive models for the SPAC market.',
  },
  {
    id: 7,
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
  },
  {
    id: 2,
    title: 'Ecopact',
    link: 'https://github.com/hursh-shah/ecopact',
    description: 'AI sustainability scoring for consumer products using material lifecycle and emissions data. 1st place HackBytes II.',
  },
  {
    id: 3,
    title: 'Medimations',
    link: 'https://github.com/hursh-shah/medimations',
    description: 'Agentic ML pipeline for medically accurate image-to-video generation.',
  },
  {
    id: 4,
    title: 'Called It',
    link: 'https://github.com/hursh-shah/called-it',
    description: 'A lightweight prediction market for small private groups.',
  },
  {
    id: 5,
    title: 'CryptoSight',
    link: 'https://github.com/hursh-shah/cryptosight',
    description: 'A platform to learn and deploy pre-built cryptocurrency trading algorithms.',
  },
  {
    id: 6,
    title: 'Minvest Models',
    link: 'https://github.com/hursh-shah/minvest-finance-models',
    description: 'Open-sourced version of the quantitative analytics models I built at Minvest',
  },
];

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
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl mb-12 sm:mb-20 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/60" />
          
          <div className="space-y-12">
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
      className="relative pl-8"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-foreground" />
      
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-xl sm:text-2xl tracking-tight">{experience.company}</h3>
          <span className="text-sm opacity-60">{experience.period}</span>
        </div>
        <div className="text-sm uppercase tracking-wider opacity-60">
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
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl mb-12 sm:mb-20 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 border border-border/60 hover:border-foreground/30 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl tracking-tight group-hover:opacity-60 transition-opacity">
              {project.title}
            </h3>
          <p className="text-sm opacity-80 leading-relaxed">
              {project.description}
            </p>
        </div>
        <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
      </div>
    </motion.a>
  );
}
