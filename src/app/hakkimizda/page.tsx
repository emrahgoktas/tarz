import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { reasons } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { addressLine, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Hakkımızda",
  description:
    "Tarz Yapı, Pendik Çınardere’de cam balkon, alüminyum doğrama, PVC kapı-pencere ve sineklik işi yapar. Ücretsiz keşif, yazılı teklif.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        description="Pendik’te atölye, Anadolu Yakası’nda keşif. İşi ölçerek fiyatlarız, montajı kendi ekibimizle kapatırız."
        image="/images/hakkimizda.jpg"
        alt="Aydınlık bir evin içinden geniş camlara bakış"
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-dark">Ne iş yapıyoruz</h2>
            <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Tarz Yapı, cam balkon, alüminyum doğrama, PVC kapı-pencere ve sineklik işlerini Pendik’ten yürütür. Atölye {addressLine()} adresindedir.
              </p>
              <p>
                Müşteri çoğu zaman tek bir balkon için arar, bakınca pencere ve sineklik de çıkar. Dört işi aynı keşifte toplarız. Ayrı ekipler arasında ölçü kaybolmasın diye montajı da biz yaparız.
              </p>
              <p>
                Fiyatı telefonda kapatmayız. Cam, profil, işçilik ve söküm teklifte ayrı durur. Süre de orada yazar. Çalışma saatimiz {site.hours.toLocaleLowerCase()}.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-soft">
            <Image
              src="/images/pvc.jpg"
              alt="Geniş camlı modern bir evin dış cephesi"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Section>
      <Section soft>
        <h2 className="text-3xl font-bold tracking-tight text-dark">Nasıl çalışırız</h2>
        <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={reason.title}>
              <span className="text-sm font-semibold tracking-[0.16em] text-gold">0{index + 1}</span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-dark">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}
