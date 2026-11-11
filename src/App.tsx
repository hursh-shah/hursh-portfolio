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

const linkClass = 'underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors';

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="font-display italic text-xl text-muted-foreground mb-6">{label}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function Entry({ name, href, children }: { name: string; href?: string; children: React.ReactNode }) {
  return (
    <p className="leading-relaxed opacity-80">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`text-foreground ${linkClass}`}>
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

// two-column list for "before": a muted category, then the facts
function Rows({ children }: { children: React.ReactNode }) {
  return (
    <dl className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-x-4 gap-y-6 leading-normal text-pretty">
      {children}
    </dl>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="opacity-80">{label}</dt>
      <dd className="opacity-80 space-y-2">{children}</dd>
    </>
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
          building foundation models to make infrastructure run itself.
        </Entry>
      </Section>

      <Section label="before">
        <Rows>
          <Row label="programs">one of 30 students in openai's chatgpt lab</Row>
          <Row label="research">
            <p>
              <a href="https://github.com/3x-dev/QViSTA" target="_blank" rel="noopener noreferrer" className={linkClass}>
                quantum ml paper
              </a>{' '}
              for alzheimer's detection, neurips 2024
            </p>
            <p>ml for phage therapy, uc irvine</p>
            <p>quant research, yale</p>
          </Row>
          <Row label="startups">
            <p>started ucsb's first startup accelerator</p>
            <p>co-founded skyglass, ar for pilots</p>
            <p>helped build the vr eye&#8209;tracking that became saccade (yc)</p>
          </Row>
          <Row label="other">competitive chess for 12 years, top 0.6% on chess.com</Row>
        </Rows>
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
                className={`text-foreground ${linkClass}`}
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

      <div className="relative mt-24 h-10 border-b border-border">
        <span aria-hidden="true" className="crow absolute right-2 -bottom-px w-[34px] aspect-[110/188] bg-foreground" />
      </div>

      <footer className="pt-7 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <div className="flex gap-x-2">
          <a href="https://x.com/hursheybar2" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            x
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
          href="https://milton.host.dartmouth.edu/reading_room/pl/book_1/text.shtml#line105"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display italic text-base text-crimson hover:opacity-70 transition-opacity"
        >
          all is not lost
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
