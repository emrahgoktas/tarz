import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { addressLine, site } from "@/lib/site";

export function ContactPanel({
  defaultService = "",
  source,
  heading = "Ücretsiz keşif için yazın",
}: {
  defaultService?: string;
  source?: string;
  heading?: string;
}) {
  return (
    <div id="form" className="scroll-mt-28 grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-dark">{heading}</h2>
        <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Ad, telefon ve hizmet yeterli. Mesaj alanına ilçe ve kat yazarsanız dönüş daha net olur.
        </p>
        <div className="mt-8">
          <Suspense fallback={<div className="h-80 bg-soft" aria-hidden />}>
            <ContactForm defaultService={defaultService} source={source} />
          </Suspense>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold tracking-tight text-dark">Atölye</h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-muted">Telefon</dt>
            <dd className="mt-1 font-semibold text-dark">
              <a href={site.phoneHref}>{site.phone}</a>
              <span className="mx-2 text-muted">/</span>
              <a href={site.phone2Href}>{site.phone2}</a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">E-posta</dt>
            <dd className="mt-1 font-semibold text-dark">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Saat</dt>
            <dd className="mt-1 font-semibold text-dark">{site.hours}</dd>
          </div>
          <div>
            <dt className="text-muted">Adres</dt>
            <dd className="mt-1 max-w-sm font-semibold leading-relaxed text-dark">{addressLine()}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
