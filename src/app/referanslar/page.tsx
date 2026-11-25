import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { gallery } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Referanslar",
  description:
    "Cam balkon, alüminyum doğrama, PVC pencere ve sineklik için baktığımız açıklık tipleri. Tarz Yapı, Pendik.",
  path: "/referanslar",
});

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        title="Referanslar"
        description="Sistem, açıklığın ölçüsüne göre seçilir. Aşağıdaki kareler bu seçimde baktığımız cephe ve pencere tipleridir."
        image="/images/galeri-1.jpg"
        alt="Geniş camlı bir yaşam alanı"
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Referanslar" },
        ]}
      />
      <Section>
        <GalleryGrid items={gallery} />
      </Section>
      <CtaBand title="Kendi balkonunuz için ölçü alalım" />
    </>
  );
}
