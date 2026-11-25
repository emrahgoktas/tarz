import { steps } from "@/lib/content";

export function ProcessList() {
  return (
    <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="text-sm font-semibold tracking-[0.16em] text-gold">0{index + 1}</span>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-dark">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
