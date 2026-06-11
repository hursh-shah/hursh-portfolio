import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { index: '01', label: 'About', href: '#about' },
  { index: '02', label: 'Experience', href: '#experience' },
  { index: '03', label: 'Projects', href: '#projects' },
  { index: '04', label: 'Rotation', href: '#rotation' },
  { index: '05', label: 'Contact', href: '#contact' },
];

export function Navigation({ introDone }: { introDone: boolean }) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setTheme = (nextIsDark: boolean) => {
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);
    document.documentElement.style.colorScheme = nextIsDark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
    } catch {}
  };

  const toggleTheme = () => setTheme(!isDark);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm border-b border-crimson/40 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={introDone ? { y: 0 } : { y: -100 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, '#top')}
            className="font-display uppercase tracking-wide text-base sm:text-lg leading-none hover:text-crimson transition-colors"
          >
            Hursh Shah
          </a>

          <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group font-mono text-xs uppercase tracking-[0.2em] hover:text-crimson transition-colors"
                >
                  <span className="text-crimson mr-1.5">{item.index}</span>
                  <span className="group-hover:underline underline-offset-4 decoration-crimson">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 border border-border hover:border-crimson hover:text-crimson transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              className="md:hidden p-2 border border-border hover:border-crimson hover:text-crimson transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="md:hidden mt-4 pt-4 border-t border-crimson/40">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="font-mono text-xs uppercase tracking-[0.2em] hover:text-crimson transition-colors"
                >
                  <span className="text-crimson mr-2">{item.index}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.nav>
  );
}
