import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { areas } from "@/lib/areas";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Hizmet Bölgeleri",
  description:
    "Tarz Yapı keşif bölgesi: Pendik merkezli İstanbul Anadolu Yakası ve Gebze. Cam balkon, PVC, alüminyum doğrama ve sineklik.",
  path: "/bolgeler",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        title="Hizmet bölgeleri"
        description="Atölye Pendik Çınardere’de. Keşif ve montajı aşağıdaki ilçelerde planlıyoruz. Listenin dışındaysanız önce arayın."
        image="/images/cam-balkon.jpg"
        alt="Balkonları olan modern bir apartman"
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Bölgeler" },
        ]}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {areas.map((area) => (
            <li key={area.slug} className="border border-black/10 p-6">
              <h2 className="text-xl font-bold tracking-tight text-dark">
                <Link href={`/bolgeler/${area.slug}`} className="hover:underline">
                  {area.name}
                </Link>
              </h2>
              <span className="mt-3 block h-0.5 w-10 bg-gold" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.intro}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/bolgeler/${area.slug}/${service.slug}`}
                      className="inline-flex min-h-9 items-center border border-black/10 px-3 text-xs font-semibold text-dark hover:border-gold"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
