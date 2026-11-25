import { mapDirectionsHref, mapEmbedSrc } from "@/lib/site";

export function MapEmbed() {
  return (
    <div>
      <iframe
        title="Tarz Yapı konumu, Çınardere Mahallesi Ayazma Caddesi, Pendik"
        src={mapEmbedSrc()}
        className="h-72 w-full border border-black/10"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={mapDirectionsHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex text-sm font-semibold text-dark underline decoration-gold decoration-2 underline-offset-4"
      >
        Yol tarifi al
      </a>
    </div>
  );
}
