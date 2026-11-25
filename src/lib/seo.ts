import type { Metadata } from "next";
import { areas } from "@/lib/areas";
import { site, addressLine } from "@/lib/site";
import type { Service } from "@/lib/services";
import type { Faq } from "@/lib/services";

type PageMetaInput = {
  title: string | { absolute: string };
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: typeof title === "string" ? title : title.absolute,
      description,
      url: path,
      locale: site.locale,
      type: "website",
      siteName: site.legalName,
    },
  };
}

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.legalName,
    url: site.url,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: areas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.name}, ${area.city}`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: week,
      opens: site.opening.opens,
      closes: site.opening.closes,
    },
    currenciesAccepted: "TRY",
  };
}

export function serviceJsonLd(service: Service, path: string, areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: areaName ? `${areaName} ${service.title}` : service.title,
    serviceType: service.title,
    description: service.description,
    url: `${site.url}${path}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.legalName,
      telephone: site.phoneE164,
      url: site.url,
      address: addressLine(),
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaName ? `${areaName}` : "İstanbul Anadolu Yakası",
    },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
