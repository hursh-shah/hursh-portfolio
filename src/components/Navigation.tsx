import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';

export function Navigation() {
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/60 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, '#top')}
            className="text-sm tracking-wide hover:opacity-60 transition-opacity"
          >
            Hursh Shah
          </a>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-12">
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={(e) => scrollToSection(e, '#experience')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, '#projects')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Contact
              </a>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              className="md:hidden p-2 hover:opacity-60 transition-opacity"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="md:hidden mt-4 pt-4 border-t border-border/60">
            <div className="flex flex-col gap-3">
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={(e) => scrollToSection(e, '#experience')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, '#projects')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Contact
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </motion.nav>
  );
}
