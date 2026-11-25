export function Section({
  id,
  soft = false,
  className = "",
  children,
}: {
  id?: string;
  soft?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${soft ? "bg-soft" : "bg-white"} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-dark">
          <span className="h-px w-8 bg-gold" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">{title}</h2>
      <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
      {text ? <p className="mt-4 text-base leading-relaxed text-muted">{text}</p> : null}
    </div>
  );
}
