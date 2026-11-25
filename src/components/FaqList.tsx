import type { Faq } from "@/lib/services";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-dark">
            <span>{item.q}</span>
            <span className="mt-0.5 text-xl leading-none text-gold transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
