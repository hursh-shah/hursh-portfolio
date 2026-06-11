function formatStamp(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

export function Overlay() {
  const stamp = formatStamp(new Date());

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden="true">
      {/* Paper/film grain */}
      <div className="absolute inset-0 texture-grain opacity-[0.05] dark:opacity-[0.07]" />

      {/* CRT scanlines, dark mode only */}
      <div className="absolute inset-0 hidden dark:block texture-scanlines opacity-[0.04]" />

      {/* HUD corner stamp */}
      <div className="hidden sm:block absolute bottom-4 right-6 font-mono text-[10px] tracking-[0.25em] text-muted-foreground/80">
        {stamp}
      </div>
    </div>
  );
}
