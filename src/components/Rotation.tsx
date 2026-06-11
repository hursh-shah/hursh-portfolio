import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from './SectionHeader';

const albums = [
  { artist: 'The Weeknd', title: 'House of Balloons', cover: '/covers/house-of-balloons.jpg' },
  { artist: 'Ken Carson', title: 'More Chaos', cover: '/covers/more-chaos.jpg' },
  { artist: 'The Weeknd', title: 'Echoes of Silence', cover: '/covers/echoes-of-silence.jpg' },
  { artist: 'Yeat', title: 'Up 2 Më', cover: '/covers/up-2-me.jpg' },
  { artist: 'Ken Carson', title: 'A Great Chaos', cover: '/covers/a-great-chaos.jpg' },
  { artist: 'Metro Boomin', title: 'Heroes & Villains', cover: '/covers/heroes-villains.jpg' },
  { artist: 'Don Toliver', title: 'Love Sick', cover: '/covers/love-sick.jpg' },
  { artist: 'The Weeknd', title: 'After Hours', cover: '/covers/after-hours.jpg' },
];

export function Rotation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="rotation" className="px-6 sm:px-8 py-20 sm:py-28 scroll-mt-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="04" title="On Rotation" isInView={isInView} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {albums.map((album, i) => (
            <motion.div
              key={album.cover}
              className="group"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
            >
              <div className="relative overflow-hidden border border-border group-hover:border-crimson transition-colors duration-300">
                <img
                  src={album.cover}
                  alt={`${album.title} — ${album.artist}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                <div className="text-crimson">{album.artist}</div>
                <div className="text-muted-foreground">{album.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
