import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionTitle } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { gallery, homeFaqs, reasons, reviews, trustItems } from "@/lib/content";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: { absolute: "Pendik Cam Balkon, PVC ve Alüminyum Doğrama | Tarz Yapı" },
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <section className="relative flex min-h-[88svh] items-end bg-dark text-white">
        <Image
          src="/images/hero.jpg"
          alt="Geniş cam açıklıklı modern bir konut"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/35 sm:bg-gradient-to-r sm:from-dark sm:via-dark/75 sm:to-dark/25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Tarz Yapı · Pendik
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Cam balkon ve doğramada net teklif, temiz montaj
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Alüminyum doğrama, PVC kapı-pencere, cam balkon ve sineklik. Ölçüyü yerinde alır, fiyatı kalem kalem yazar, montajı kendi ekibimizle yaparız.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#form" className="w-full sm:w-auto">
              Ücretsiz Keşif Al
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline" className="w-full sm:w-auto">
              Hemen Ara
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-soft" aria-label="Güven">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-black/10">
          {trustItems.map((item) => (
            <li key={item.label} className="px-5 py-8 sm:px-8">
              <p className="text-2xl font-bold tracking-tight text-dark">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Hizmetler"
          title="Dört iş. Tek keşif."
          text="Balkon, pencere ve sineklik aynı randevuda konuşulur. Sistemi ölçüyü gördükten sonra öneririz."
        />
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section soft>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Neden biz"
              title="Sürpriz kalem bırakmadan ilerleriz"
              text="Keşif ücretsizdir. Onayınız olmadan üretime geçmeyiz."
            />
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <span className="text-sm font-semibold tracking-[0.16em] text-gold">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-dark">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Görünüm"
            title="Açıklık tipi, sistemi belirler"
            text="Camın genişliği, kat ve açılım yönü sistemi değiştirir. Aşağıdakiler bu seçimde baktığımız açıklık tipleridir."
          />
          <Link
            href="/referanslar"
            className="shrink-0 text-sm font-semibold text-dark underline decoration-gold decoration-2 underline-offset-4"
          >
            Tüm görünümler
          </Link>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item) => (
            <li key={item.src} className="relative aspect-[4/3] bg-soft">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section soft>
        <SectionTitle eyebrow="Yorumlar" title="Müşteri yorumları" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="bg-white p-8">
              <blockquote className="text-base leading-relaxed text-dark">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-dark">{review.name}</span>
                <span className="text-muted"> · {review.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="SSS" title="Keşiften önce sorulanlar" />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={homeFaqs} />
          </div>
        </div>
      </Section>

      <Section soft>
        <ContactPanel />
      </Section>
    </>
  );
}
