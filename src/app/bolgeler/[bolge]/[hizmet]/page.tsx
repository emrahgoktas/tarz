import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/ContactPanel";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { areaServiceParams, getArea, relatedAreas } from "@/lib/areas";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { getService } from "@/lib/services";

type Props = { params: Promise<{ bolge: string; hizmet: string }> };

export function generateStaticParams() {
  return areaServiceParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { bolge, hizmet } = await params;
  const area = getArea(bolge);
  const service = getService(hizmet);
  if (!area || !service) return {};
  return pageMetadata({
    title: `${area.name} ${service.title}`,
    description: `${area.name} ${service.short} için yerinde ücretsiz keşif ve montaj. ${service.summary} Tarz Yapı, Pendik.`,
    path: `/bolgeler/${area.slug}/${service.slug}`,
  });
}

export default async function AreaServicePage({ params }: Props) {
  const { bolge, hizmet } = await params;
  const area = getArea(bolge);
  const service = getService(hizmet);
  if (!area || !service) notFound();

  const path = `/bolgeler/${area.slug}/${service.slug}`;
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Bölgeler", path: "/bolgeler" },
    { name: area.name, path: `/bolgeler/${area.slug}` },
    { name: service.title, path },
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd(service, path, area.name)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        title={`${area.name} ${service.title}`}
        description={area.intro}
        image={service.image}
        alt={service.alt}
        crumbs={crumbs.map((crumb, index) => ({
          label: crumb.name,
          href: index === crumbs.length - 1 ? undefined : crumb.path,
        }))}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="max-w-3xl lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-dark">
              {area.name} için {service.short}
            </h2>
            <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
            <p className="mt-5 text-base leading-relaxed text-muted">{area.housing}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{service.description}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Sistemin tamamı{" "}
              <Link
                href={`/hizmetler/${service.slug}`}
                className="font-semibold text-dark underline decoration-gold decoration-2 underline-offset-4"
              >
                {service.title} sayfasında
              </Link>
              .
            </p>
          </div>
          <ul className="space-y-4 lg:col-span-5">
            {service.points.map((point) => (
              <li key={point} className="border-t-2 border-gold bg-soft p-5 text-sm leading-relaxed text-ink">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section soft>
        <SectionTitle eyebrow="Sistemler" title="Bu işte kullanılan seçenekler" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {service.systems.map((system) => (
            <article key={system.title} className="bg-white p-6">
              <h3 className="text-lg font-bold tracking-tight text-dark">{system.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{system.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="SSS" title="Kısa cevaplar" />
        <div className="mt-10">
          <FaqList items={service.faqs} />
        </div>
        <ul className="mt-10 flex flex-wrap gap-2">
          {relatedAreas(area.slug, 3).map((item) => (
            <li key={item.slug}>
              <Link
                href={`/bolgeler/${item.slug}/${service.slug}`}
                className="inline-flex min-h-10 items-center border border-black/10 px-3 text-sm text-dark hover:border-gold"
              >
                {item.name} {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section soft>
        <ContactPanel
          key={`${area.slug}-${service.slug}`}
          defaultService={service.title}
          source={`${area.name} / ${service.title}`}
          heading={`${area.name} için keşif yazın`}
        />
      </Section>
    </>
  );
}
