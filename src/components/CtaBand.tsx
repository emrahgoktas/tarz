import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ölçü için bugün yazın",
  text = "Ad ve telefon yeterli. Yerinde bakar, fiyatı kalem kalem yazarız.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ücretsiz keşif</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/iletisim#form">Ücretsiz Keşif Al</ButtonLink>
          <ButtonLink href={site.phoneHref} variant="outline">
            Hemen Ara
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
