import { useEffect, useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { writing, type Piece } from './writing';

function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  };

  return { path, navigate };
}

function Entry({ name, href, children }: { name: string; href?: string; children: React.ReactNode }) {
  return (
    <p className="leading-relaxed opacity-80">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
          {name}
        </a>
      ) : (
        <span className="text-foreground">{name}</span>
      )}
      {' — '}
      {children}
    </p>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="font-display italic text-xl text-muted-foreground mb-5">{label}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Home({ navigate }: { navigate: (to: string) => void }) {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-24 pb-20 sm:pt-36 fade-in">
      <header>
        <h1 className="font-display text-5xl tracking-tight">hursh shah</h1>
        <p className="mt-2 text-muted-foreground">founder of edviro (yc s26)</p>
      </header>

      <Section label="now">
        <Entry name="edviro" href="https://edviroenergy.com">
          ai for the people who run buildings. energy world models that catch
          waste, simulate fixes, and prove savings.
        </Entry>
        <Entry name="chatgpt lab">
          collaborating with the openai team.
        </Entry>
        <Entry name="research">
          ml for phage therapy at uc irvine.
        </Entry>
      </Section>

      <Section label="before">
        <p className="leading-relaxed opacity-80">
          helped build vr eye-tracking for early alzheimer's detection. the work
          became saccade, another yc startup.
        </p>
        <p className="leading-relaxed opacity-80">
          co-founded{' '}
          <a href="https://github.com/3x-dev/QViSTA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
            q-sight labs
          </a>
          {' '}(quantum ml, neurips 2024) and skyglass (ar preflight
          inspections for pilots). quant research at yale. 
        </p>
      </Section>

      <Section label="writing">
        {writing.length > 0 ? (
          writing.map((piece) => (
            <p key={piece.slug} className="leading-relaxed opacity-80">
              <a
                href={`/writing/${piece.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/writing/${piece.slug}`);
                }}
                className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
              >
                {piece.title}
              </a>
              <span className="text-muted-foreground"> — {piece.date}</span>
            </p>
          ))
        ) : (
          <p className="leading-relaxed opacity-80">nothing yet.</p>
        )}
      </Section>

      <footer className="mt-20 border-t border-border pt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <div className="flex gap-x-2">
          <a href="mailto:hursh@edviroenergy.com" className="hover:text-foreground transition-colors">
            email
          </a>
          <span>·</span>
          <a href="https://github.com/hursh-shah" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            github
          </a>
          <span>·</span>
          <a href="https://linkedin.com/in/hursh-shah" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            linkedin
          </a>
        </div>
        <a
          href="https://open.spotify.com/album/7zCODUHkfuRxsUjtuzNqbd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          house of balloons
        </a>
      </footer>
    </main>
  );
}

function WritingPage({ piece, onBack }: { piece: Piece; onBack: () => void }) {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-24 pb-20 sm:pt-36 fade-in">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onBack();
        }}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← back
      </a>
      <h1 className="mt-10 font-display text-4xl tracking-tight">{piece.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{piece.date}</p>
      <div className="mt-10 space-y-5">
        {piece.paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed opacity-80">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}

export default function App() {
  const { path, navigate } = usePath();
  const piece = writing.find((p) => path === `/writing/${p.slug}`);

  useEffect(() => {
    document.title = piece ? `${piece.title} · hursh shah` : 'hursh shah';
  }, [piece]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />
      {piece ? <WritingPage piece={piece} onBack={() => navigate('/')} /> : <Home navigate={navigate} />}
    </div>
  );
}
