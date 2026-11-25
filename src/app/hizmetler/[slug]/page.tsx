import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/ContactPanel";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProcessList } from "@/components/ProcessList";
import { Section, SectionTitle } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { areas } from "@/lib/areas";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { getService, otherServices, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: `${service.summary} Pendik ve Anadolu Yakası’nda ücretsiz keşif. Tarz Yapı.`,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/hizmetler/${service.slug}`;
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.title, path },
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd(service, path)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        title={service.title}
        description={service.summary}
        image={service.image}
        alt={service.alt}
        crumbs={crumbs.map((crumb, index) => ({
          label: crumb.name,
          href: index === crumbs.length - 1 ? undefined : crumb.path,
        }))}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-dark">Ne yapıyoruz</h2>
            <span className="mt-4 block h-0.5 w-12 bg-gold" aria-hidden />
            <p className="mt-5 text-base leading-relaxed text-muted">{service.description}</p>
            <ul className="mt-8 space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border border-black/10 bg-soft p-6 sm:p-8 lg:col-span-5">
            <h2 className="text-xl font-bold tracking-tight text-dark">Teklifte ne yazar</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>Ölçü, kanat sayısı ve açılım yönü</li>
              <li>Cam cinsi ve profil</li>
              <li>İşçilik, montaj ve varsa söküm</li>
              <li>Süre ve garanti koşulu</li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Onaylamadığınız satır üretime girmez.
            </p>
            <Link
              href="/iletisim#form"
              className="mt-6 inline-flex min-h-12 items-center bg-gold px-6 text-sm font-semibold text-dark hover:bg-gold-dark"
            >
              Ücretsiz Keşif Al
            </Link>
          </aside>
        </div>
      </Section>

      <Section soft>
        <SectionTitle eyebrow="Sistemler" title="Hangi sistem, hangi açıklığa" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {service.systems.map((system) => (
            <article key={system.title} className="border-t-2 border-gold bg-white p-6">
              <h3 className="text-lg font-bold tracking-tight text-dark">{system.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{system.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="Süreç" title="Keşiften teslimata" />
        <ProcessList />
      </Section>

      <Section soft>
        <SectionTitle eyebrow="SSS" title={`${service.title} hakkında`} />
        <div className="mt-10">
          <FaqList items={service.faqs} />
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Bölgeler"
          title="İlçeye göre keşif sayfası"
          text="Reklam ve arama için her ilçenin kendi sayfası var. Montaj planı yine Pendik’teki atölyeden çıkar."
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/bolgeler/${area.slug}/${service.slug}`}
                className="inline-flex min-h-10 items-center border border-black/10 px-3 text-sm text-dark hover:border-gold"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section soft>
        <SectionTitle eyebrow="Diğer hizmetler" title="Aynı keşifte bakılabilir" />
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {otherServices(service.slug).map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </Section>

      <Section>
        <ContactPanel defaultService={service.title} source={service.title} />
      </Section>
    </>
  );
}
