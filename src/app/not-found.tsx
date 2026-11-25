import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-dark">
        <span className="h-px w-8 bg-gold" aria-hidden />
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-dark">Bu sayfa yok</h1>
      <p className="mt-4 max-w-lg text-muted">
        Adres değişmiş veya hiç açılmamış olabilir. Hizmetlere dönebilir ya da keşif için yazabilirsiniz.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Ana sayfa</ButtonLink>
        <ButtonLink href="/iletisim#form" variant="outlineDark">
          Teklif al
        </ButtonLink>
      </div>
    </section>
  );
}
