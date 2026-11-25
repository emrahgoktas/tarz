export const site = {
  name: "Tarz Yapı",
  legalName: "Tarz Yapı Cam Balkon Sistemleri",
  tagline: "Cam Balkon Sistemleri",
  description:
    "Pendik’te cam balkon, alüminyum doğrama, PVC kapı-pencere ve sineklik. Ücretsiz yerinde keşif, yazılı teklif, garantili montaj. Tarz Yapı.",
  url: "https://tarzcambalkon.com",
  locale: "tr_TR",
  phone: "0538 237 19 20",
  phoneHref: "tel:+905382371920",
  phoneE164: "+905382371920",
  phone2: "0538 781 56 34",
  phone2Href: "tel:+905387815634",
  phone2E164: "+905387815634",
  whatsapp: "905382371920",
  email: "info@tarzcambalkon.com",
  address: {
    street: "Çınardere Mah. Ayazma Cad. No:78",
    district: "Pendik",
    city: "İstanbul",
    postalCode: "34896",
    country: "TR",
  },
  hours: "Her gün 09:00–18:00",
  opening: { opens: "09:00", closes: "18:00" },
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function addressLine() {
  const { street, postalCode, district, city } = site.address;
  return `${street}, ${postalCode} ${district} / ${city}`;
}

export function mapQuery() {
  return `${site.address.street}, ${site.address.district}, ${site.address.city}`;
}

export function mapEmbedSrc() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery())}&hl=tr&z=16&output=embed`;
}

export function mapDirectionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery())}`;
}

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
