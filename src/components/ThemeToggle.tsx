import { useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  );

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.style.colorScheme = next ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? 'light' : 'dark'}
    </button>
  );
}
