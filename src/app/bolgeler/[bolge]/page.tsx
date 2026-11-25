import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { areas, getArea, relatedAreas } from "@/lib/areas";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

type Props = { params: Promise<{ bolge: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ bolge: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { bolge } = await params;
  const area = getArea(bolge);
  if (!area) return {};
  return pageMetadata({
    title: `${area.name} Cam Balkon ve Doğrama`,
    description: `${area.name} cam balkon, PVC, alüminyum doğrama ve sineklik keşfi. ${area.intro}`,
    path: `/bolgeler/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { bolge } = await params;
  const area = getArea(bolge);
  if (!area) notFound();

  const path = `/bolgeler/${area.slug}`;
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Bölgeler", path: "/bolgeler" },
    { name: area.name, path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        title={`${area.name} cam balkon ve doğrama`}
        description={area.intro}
        image="/images/hero.jpg"
        alt="Geniş cam açıklıklı modern bir konut"
        crumbs={crumbs.map((crumb, index) => ({
          label: crumb.name,
          href: index === crumbs.length - 1 ? undefined : crumb.path,
        }))}
      />
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-dark">Bu bölgede neye bakıyoruz</h2>
          <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
          <p className="mt-5 text-base leading-relaxed text-muted">{area.housing}</p>
        </div>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              href={`/bolgeler/${area.slug}/${service.slug}`}
            />
          ))}
        </div>
      </Section>
      <Section soft>
        <SectionTitle eyebrow="Yakın bölgeler" title="Aynı hatta baktığımız ilçeler" />
        <ul className="mt-8 flex flex-wrap gap-2">
          {relatedAreas(area.slug).map((item) => (
            <li key={item.slug}>
              <Link
                href={`/bolgeler/${item.slug}`}
                className="inline-flex min-h-10 items-center border border-black/10 bg-white px-3 text-sm text-dark hover:border-gold"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title={`${area.name} için ücretsiz keşif`} text={area.intro} />
    </>
  );
}
