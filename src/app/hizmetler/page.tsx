import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ProcessList } from "@/components/ProcessList";
import { Section, SectionTitle } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Hizmetler",
  description:
    "Alüminyum doğrama, PVC kapı-pencere, cam balkon ve sineklik. Pendik merkezli Tarz Yapı, ücretsiz keşif ve yazılı teklif sunar.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Hizmetler"
        description="Cam balkon, doğrama ve sineklik aynı ekipte. Ölçüyü yerinde alır, sistemi buna göre öneririz."
        image="/images/hero.jpg"
        alt="Geniş cam açıklıklı modern bir konut"
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler" },
        ]}
      />
      <Section>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section soft>
        <SectionTitle
          eyebrow="Süreç"
          title="Dört adım"
          text="Keşif ücretsizdir. Üretim, yazılı onaydan sonra başlar."
        />
        <ProcessList />
      </Section>
      <CtaBand />
    </>
  );
}
